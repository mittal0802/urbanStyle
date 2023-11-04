import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  userAddress: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
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
      return state;
  }
};
