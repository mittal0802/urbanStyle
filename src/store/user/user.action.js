import { createAction } from "../../utils/reducer/reducer.utils";
import { USER_ACTION_TYPES } from "./user.types";

export const setCurrentUser = (user) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);

//whenever we set dispatch it will call the reducer and update the state
export const setUserAddress = (address) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER_ADDRESS, address);
