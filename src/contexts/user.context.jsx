import { createContext, useState } from "react";

//as the actual value you want to acess
export const UserContext = createContext({
  //for the initialise for context
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  // for initialise of state
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  //we will use above state from any componnent wrapped inside UserContext.Provider tree
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
