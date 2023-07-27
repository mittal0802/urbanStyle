import { createContext, useEffect, useReducer } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../utils/firebase/firebase.utils";
//as the actual value you want to acess
import { createAction } from "../utils/reducer/reducer.utils";

export const UserContext = createContext({
  //for the initialise for context
  currentUser: null,
  setCurrentUser: () => null,
  userAddress: null,
  setUserAddress: () => null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
  SET_CURRENT_USER_ADDRESS: "SET_CURRENT_USER_ADDRESS",
};

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state, //spread the state as there can be other unchanged objects such as userAddress
        currentUser: payload,
      };
    case USER_ACTION_TYPES.SET_CURRENT_USER_ADDRESS:
      return {
        ...state,
        userAddress: payload,
      };
    default:
      throw new Error(`Unknown action type: "${type}" in userReducer`);
  }
};

const INITIAL_STATE = {
  currentUser: null,
  userAddress: null,
};
export const UserProvider = ({ children }) => {
  // for initialise of state
  // const [currentUser, setCurrentUser] = useState(null);

  const [{ currentUser, userAddress }, dispatch] = useReducer(
    userReducer,
    INITIAL_STATE
  );
  const setCurrentUser = (user) => {
    //whenever we set dispatch it will call the reducer and update the state
    dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
  };
  const setUserAddress = (address) => {
    //whenever we set dispatch it will call the reducer and update the state
    dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER_ADDRESS, address));
  };
  const value = { currentUser, userAddress, setUserAddress };

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
