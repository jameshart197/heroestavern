import { json } from "react-router-dom";
import { currentUser, login, signUp } from "./api";

export const getCurrentUser = async () => {
  const token = localStorage.getItem("access_token");
  if (!token || token=="undefined") {
    return undefined
  }
  const response = await currentUser(token);
  return response;
};

export const getToken = () => localStorage.getItem("access_token");

export const getRefreshToken = () => ({refresh: localStorage.getItem("refresh_token")})

export const logoutUser = () => {
  localStorage.removeItem("access_token")
  localStorage.removeItem("refresh_token")
  localStorage.removeItem("CharList")
}

export const registerUser = async (signUpData) => {
  const response = await signUp(signUpData);
  localStorage.setItem("access_token", response.access_token);
  localStorage.setItem("refresh_token", response.refresh_token);

  return response
}

export const loginUser =  async  (loginData) => {
  const response = await login(loginData);
  localStorage.setItem("access_token", response.access_token);
  localStorage.setItem("refresh_token", response.refresh_token);
  
  return response;
}

export const setCharList = (charlist) => {
  localStorage.setItem("CharList", JSON.stringify(charlist));
}

export const getCharList = () => {
  return JSON.parse(localStorage.getItem("CharList")) || [];
}