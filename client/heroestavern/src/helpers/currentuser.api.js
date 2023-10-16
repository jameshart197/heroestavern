import { currentUser } from "./api";

export const getCurrentUser = async () => {
  const token = localStorage.getItem("access_token");
  if (!token || token=="undefined") {
    return undefined
  }
  const response = await currentUser(token);
  return response;
};

export const logoutUser = () => {
    localStorage.removeItem("access_token")
}
