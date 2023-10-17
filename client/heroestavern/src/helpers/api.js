import CharacterModel from "../models/createcharmodel";
import { getRefreshToken, logoutUser } from "./currentuser.api";

export const postBaseCharacter = async (basechar) => {
  const newChar = Object.keys(CharacterModel).reduce((a, b) => {
    a[b] = basechar[b];
    return a;
  }, {});
  return await postData("api", "characters", newChar);
};

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
