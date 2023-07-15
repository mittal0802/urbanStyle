import { createContext } from "react";

//as the actual value you want to acess
export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};
