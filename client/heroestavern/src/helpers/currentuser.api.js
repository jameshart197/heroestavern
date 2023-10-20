import { useUpdateCurrentUser } from "../contexts/currentUserContext";
import { currentUser, login, signUp } from "./api";

export const getCurrentUser = async () => {
  const token = localStorage.getItem("access_token");
  if (!token || token=="undefined") {
    return undefined
  }
  const response = await currentUser(token);
  return response;
};

export const getRefreshToken = () => ({refresh: localStorage.getItem("refresh_token")})

export const logoutUser = () => {
  localStorage.removeItem("access_token")
  localStorage.removeItem("refresh_token")
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