import { createContext, useContext, useEffect, useState } from "react";
import { getCurrentUser } from "../helpers/caching.service.api";

const CurrentUserContext = createContext();
export const useCurrentUserContext = () => useContext(CurrentUserContext);

export const useCurrentUser = () => {
  const { currentUser } = useCurrentUserContext();
  return currentUser;
};


export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const handleMount = async () => {
    try {
      const data  = await getCurrentUser();
      setCurrentUser(data);
    } catch (err) {
    }
  };

  useEffect(() => {
    handleMount();
  }, []);

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
};
