import CharacterModel from "../models/createcharmodel";
import { getRefreshToken, logoutUser } from "./currentuser.api";


// internal variables

const RETRY_MAX = 3;
const CONTENT_TYPE = "application/json; charset=UTF-8"

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
  return await formDataQuery("api", "characters", basechar, token);
};

export const updateCharacter = async (pk, data, token) => {
  return await updateData("api", `characterupdate/${pk}`, data, token);
}

export const postCharacterSubclass = async (subclass, character) => {
  return await postData("api", "addcharactersubclass", {subclass, character})
}

export const postCharacterLevel = async (level, character, char_class) => {
  return await postData("api", "addcharacterlevel", {level, character, char_class})
}

export const postCharacterAttributes = async (strength, dexterity, constitution, intelligence, wisdom, charisma, character) => {
  const attributesArray = [strength, dexterity, constitution, intelligence, wisdom, charisma]
  const response = await Promise.all(attributesArray.map(async a=>await postData("api", "addcharacterattributes", {...a, character:character})));
  return response
}


// render character page

export const getCharacterList = async (token) => {
  const mycharacters = await getData("api", "mycharacters", token)
  console.log(mycharacters)
  return mycharacters.sort((a,b) => a.character_name-b.character_name)
}



// logins


export const signUp = async (signUpData) => {
  return await postData("dj-rest-auth", "registration", signUpData);
};

export const login = async (loginData) => {
  return await postData("dj-rest-auth", "login", loginData);
};

export const currentUser = async (token) => {
  return await getData("dj-rest-auth", "user", token);
};


// access tokens

export const refreshAccessToken = async () => {
  const access_token =  await postData("dj-rest-auth", "token/refresh", getRefreshToken());
  localStorage.setItem("access_token", access_token.access);
  return access_token;
}

async function postData(area, path, data, token, options){
  const headerattributes = {
    "Content-Type": CONTENT_TYPE,
  };
  if (token) {
    headerattributes.Authorization = `Bearer ${token}`;
  }
  const request = {
    method: "POST",
    mode: "cors",
    headers: headerattributes,
    redirect: "follow",
    body:JSON.stringify(data)
  };
  return await dataQuery(area, path, request, options);
}

async function getData(area, path, token, options){
  const headerattributes = {
    "Content-Type": CONTENT_TYPE,
  };
  if (token) {
    headerattributes.Authorization = `Bearer ${token}`;
  }
  const request = {
    method: "GET",
    mode: "cors",
    headers: headerattributes,
    redirect: "follow",
  };
  return await dataQuery(area, path, request, options);
}

async function updateData(area, path, data, token, options){
  const headerattributes = {
    "Content-Type": CONTENT_TYPE,
    "_method": "PUT"
  };
  if (token) {
    headerattributes.Authorization = `Bearer ${token}`;
  }
  const request = {
    method: "PUT",
    mode: "cors",
    headers: headerattributes,
    redirect: "follow",
    body:JSON.stringify(data)
  };
  return await dataQuery(area, path, request, options);
}
async function dataQuery(area, path, request, options={retryCount:0}) {
  if (!path || !area) {
    console.error("url and area must be defined");
    return undefined;
  }
  const url = `https://8000-jameshart19-heroestaver-phaga8fole7.ws-eu105.gitpod.io/${area}/${path}/`;
  let response;
  try {
    response = await fetch(url, request).catch((err) => {
      console.log(err);
    });
  } catch (err) {
    console.log(err);
  }
  if (response.status === 401 && options.retryCount <= RETRY_MAX) {
    const access_token = refreshAccessToken()
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
  }
  if (response.status >= 200 && response.status < 300) {
    return await response.json();
  }
  throw await response.json();
}

async function formDataQuery(area, path, formdata, token, options={retryCount:0}) {
  if (!path || !area) {
    console.error("url and area must be defined");
    return undefined;
  }
  const url = `https://8000-jameshart19-heroestaver-phaga8fole7.ws-eu105.gitpod.io/${area}/${path}/`;
  const headerattributes = {
    "Content-Type": "multipart/form-data",
  };
  if (token) {
    headerattributes.Authorization = `Bearer ${token}`;
  }
  let response;
  try {
    response = await fetch(url, {
      method: "POST",
      header: headerattributes,
      body: formdata
    }).catch((err) => {
      console.log(err);
    });
  } catch (err) {
    console.log(err);
  }
  if (response.status === 401 && options.retryCount <= RETRY_MAX) {
    const access_token = refreshAccessToken()
    options.retryCount++;
    return await formDataQuery(area, path, formdata, access_token, options)    
  } 
  if (response.status === 500 && options.retryCount <=RETRY_MAX) {
    options.retryCount++;
    return await formDataQuery(area, path, formdata, token, options)
  }
  if (options.retryCount > RETRY_MAX && response.status===401) {
    logoutUser();
  }
  if (response.status >= 200 && response.status < 300) {
    return await response.json();
  }
  throw await response.json();
}