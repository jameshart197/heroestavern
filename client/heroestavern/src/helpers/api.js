import CharacterModel from "../models/createcharmodel";
import { getRefreshToken, logoutUser } from "./caching.service.api";
import toast from 'react-hot-toast';


// internal variables

const RETRY_MAX = 3;
const USER_MESSAGES = {
  "api/characters" : "Character created successfully!",
  "api/characterupdate" : "Character updated successfully!",
  "api/addcharactersubclass" : "Subclass successfully added!",
  "api/addcharacterlevel" : "Character level successfully added!",
  "api/addcharacterattributes" : "Character attributes successfully added!",
  "dj-rest-auth/registration" : "Registration successful!",
  "dj-rest-auth/login" : "Login successful!"
}

// internal functions 

const getContentType = (data) => {
  if (data instanceof FormData) {
    return {};
  }
  else return {"Content-Type": "application/json; charset=UTF-8"};
}

const toastUser = (area, path) => {
  const message = Object.keys(USER_MESSAGES).find(m=>`${area}/${path}`.startsWith(m));
  if(message) {
    toast.success(USER_MESSAGES[message]);
  }
}

// get content tables

export const getRaces = async () => {
  return (await getData("api", "races")).sort((a,b) => a.id-b.id);
}

export const getSubraces = async () => {
  return (await getData("api", "subraces")).sort((a,b) => a.id-b.id);
}

export const getCharclasses = async () => {
  return (await getData("api", "classes")).sort((a,b) => a.id-b.id);
}

export const getSubclasses = async () => {
  return (await getData("api", "subclasses")).sort((a,b) => a.id-b.id);
}

export const getBackgrounds = async () => {
  return (await getData("api", "backgrounds")).sort((a,b) => a.id-b.id);
}

export const getAlignments = async () => {
  return (await getData("api", "alignments")).sort((a,b) => a.id-b.id);
}

// post character creation

export const postBaseCharacter = async (basechar, token) => {
  return await postData("api", "characters", basechar, token);
};

export const putBaseCharacter = async (pk, basechar, token) => {
  return await updateData("api", `updatebasechar/${pk}`, basechar, token);
}

export const postCharacterSubclass = async (subclass, character) => {
  const data = JSON.stringify({subclass, character});
  return await postData("api", "addcharactersubclass", data)
}

export const postCharacterLevel = async (level, character, char_class) => {
  const data = JSON.stringify({level, character, char_class});
  return await postData("api", "addcharacterlevel", data)
}

export const postCharacterAttributes = async (strength, dexterity, constitution, intelligence, wisdom, charisma, character) => {
  const attributesArray = [strength, dexterity, constitution, intelligence, wisdom, charisma]
  const response = await Promise.all(attributesArray.map(async a=> {
    const data = JSON.stringify({...a, character:character});
    return await postData("api", "addcharacterattributes", data);
  }));
  return response
}

export const updateCharacter = async (pk, data, token) => {
  return await updateData("api", `characterupdate/${pk}`, JSON.stringify(data), token);
}


// render character page

export const getCharacterList = async (token) => {
  const mycharacters = await getData("api", "mycharacters", token)
  return mycharacters.sort((a,b) => a.character_name-b.character_name)
}

// delete character

export const deleteCharacter = async (pk, token) => {
  return await deleteData("api", `characterdelete/${pk}`, null, token);
}

// logins

export const signUp = async (signUpData) => {
  return await postData("dj-rest-auth", "registration", JSON.stringify(signUpData));
};

export const login = async (loginData) => {
  return await postData("dj-rest-auth", "login", JSON.stringify(loginData));
};

export const currentUser = async (token) => {
  return await getData("dj-rest-auth", "user", token);
};


// access tokens

export const refreshAccessToken = async (count) => {
  const data = JSON.stringify(getRefreshToken())
  const access_token =  await postData("dj-rest-auth", "token/refresh", data);
  if(count==1) {
    toast('Refreshing Access Token', {
      icon: '⏳',
    });
  }
  localStorage.setItem("access_token", access_token.access);
  return access_token.access;
}

// CRUD functions

async function postData(area, path, data, token, options){
  const headerattributes = getContentType(data);
  if (token) {
    headerattributes.Authorization = `Bearer ${token}`;
  }
  const request = {
    method: "POST",
    headers: headerattributes,
    body: data
  };
  return await dataQuery(area, path, request, options);
}

async function getData(area, path, token, options){
  const headerattributes = getContentType(null);
  if (token) {
    headerattributes.Authorization = `Bearer ${token}`;
  }
  const request = {
    method: "GET",
    headers: headerattributes,
  };
  return await dataQuery(area, path, request, options);
}

async function updateData(area, path, data, token, options){
  const headerattributes = getContentType(data);
  if (token) {
    headerattributes.Authorization = `Bearer ${token}`;
  }
  const request = {
    method: "PUT",
    headers: headerattributes,
    body: data
  };
  return await dataQuery(area, path, request, options);
}

async function deleteData(area, path, data, token, options){
  const headerattributes = getContentType(data);
  if (token) {
    headerattributes.Authorization = `Bearer ${token}`;
  }
  const request = {
    method: "DELETE",
    headers: headerattributes,
  };
  return await dataQuery(area, path, request, options);
}

async function dataQuery(area, path, request, options={retryCount:0}) {
  if (!path || !area) {
    console.error("url and area must be defined");
    toast.error("Resource missing, please try again")
    return undefined;
  }
  const url = `https://heroestavern-d4f7b4a77ff6.herokuapp.com/${area}/${path}/`;
  let response;
  try {
    response = await fetch(url, request).catch((err) => {
      toast.error(err.message || err)
    });
  } catch (err) {
    toast.error(err.message || err)
  }
  if (response.status === 401 && options.retryCount <= RETRY_MAX) {
    const access_token = await refreshAccessToken(options.retryCount)
    options.retryCount++;
    request.headers.Authorization = `Bearer ${access_token}`;
    return await dataQuery(area, path, request, options)    
  } 
  if (response.status === 500 && options.retryCount <=RETRY_MAX) {
    options.retryCount++;
    return await dataQuery(area, path, request, options)
  }
  if (options.retryCount > RETRY_MAX && response.status===401) {
    logoutUser();
    toast.error("Unauthorized access, please log in and try again")
  }
  if (response.status >= 200 && response.status < 300) {
    toastUser(area,path);
    if (response.status === 204) {
      return true;
    }
    return await response.json();
  }
  throw await response.json();
}
