import { createContext, useEffect, useReducer, useState } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../utils/firebase/firebase.utils";
//as the actual value you want to acess

export const UserContext = createContext({
  //for the initialise for context
  currentUser: null,
  setCurrentUser: () => null,
  userAddress: null,
  setUserAddress: () => null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      throw new Error(`Unknown action type: "${type}" in userReducer`);
  }
};

const INITIAL_STATE = {
  currentUser: null,
};
export const UserProvider = ({ children }) => {
  // for initialise of state
  // const [currentUser, setCurrentUser] = useState(null);

  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);
  const [userAddress, setUserAddress] = useState(null);
  const setCurrentUser = (user) => {
    dispatch({
      type: USER_ACTION_TYPES.SET_CURRENT_USER,
      payload: user,
    });
  };

  const value = { currentUser, setCurrentUser, userAddress, setUserAddress };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  //we will use above state from any component wrapped inside UserContext.Provider tree
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
