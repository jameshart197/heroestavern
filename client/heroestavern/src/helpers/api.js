import CharacterModel from "../models/createcharmodel";
import { getRefreshToken, logoutUser } from "./currentuser.api";

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

export const postBaseCharacter = async (basechar, token) => {
  let newChar = Object.keys(CharacterModel).reduce((a, b) => {
    a[b] = basechar[b];
    return a;
  }, {});
  newChar = {...newChar, subrace:newChar.subrace.id};
  return await postData("api", "characters", newChar, token);
};

export const postCharacterSubclass = async (subclass, character, token) => {
  return await postData("api", "addcharactersubclass", {subclass, character}, token)
}

export const postCharacterLevel = async (level, character, char_class, token) => {
  return await postData("api", "addcharacterlevel", {level, character, char_class}, token)
}

export const postCharacterAttributes = async (strength, dexterity, constitution, intelligence, wisdom, charisma, character, token) => {
  const attributesArray = [strength, dexterity, constitution, intelligence, wisdom, charisma]
  return attributesArray.map(async a=>await postData("api", "addcharacterattributes", {...a, character:character}, token))
}

export const signUp = async (signUpData) => {
  return await postData("dj-rest-auth", "registration", signUpData);
};

export const login = async (loginData) => {
  return await postData("dj-rest-auth", "login", loginData);
};

export const currentUser = async (token) => {
  return await getData("dj-rest-auth", "user", token);
};



// const postCompleteCharacter =async () => {

// }


export const refreshAccessToken = async () => {
  const access_token =  await postData("dj-rest-auth", "token/refresh", getRefreshToken());
  localStorage.setItem("access_token", access_token.access);
  return access_token;
}

async function getData(area = "", url = "", token = null, retryCount = 0) {
  if (!url || !area) {
    console.error("url and area must be defined");
    return undefined;
  }
  url = `https://8000-jameshart19-heroestaver-phaga8fole7.ws-eu105.gitpod.io/${area}/${url}/`;
  let response;
  try {
    const headerattributes = {
      "Content-Type": "application/json",
    };
    if (token) {
      headerattributes.Authorization = `Bearer ${token}`;
    }
    response = await fetch(url, {
      method: "GET",
      mode: "cors",
      headers: headerattributes,
    }).catch((err) => {
      console.log(err);
    });
  } catch (err) {
    console.log(err);
  }
  if (response.status === 401 && retryCount <= 2) {
    const access_token = refreshAccessToken()
    return await getData(area, url, access_token.access, retryCount++)
  } 
  if (retryCount > 2) {
    logoutUser();
  }
  if (response.status >= 200 && response.status < 300) {
    return await response.json();
  }
  throw await response.json();
}

async function postData(area = "", url = "", data = {}, token = null, retryCount = 0) {
  if (!url || !area) {
    console.error("url and area must be defined");
    return undefined;
  }
  url = `https://8000-jameshart19-heroestaver-phaga8fole7.ws-eu105.gitpod.io/${area}/${url}/`;
  let response;
  try {
    const headerattributes = {
      "Content-Type": "application/json",
    };
    if (token) {
      headerattributes.Authorization = `Bearer ${token}`;
    }
    response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: headerattributes,
      redirect: "follow",
      body: JSON.stringify(data),
    }).catch((err) => {
      console.log(err);
    });
  } catch (err) {
    console.log(err);
  }
  if (response.status === 401 && retryCount <= 2) {
    const access_token = refreshAccessToken()
    return await postData(area, url, data, access_token.access, retryCount++)    
  } 
  if (retryCount > 2) {
    logoutUser();
  }
  if (response.status >= 200 && response.status < 300) {
    return await response.json();
  }
  throw await response.json();
}
