import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root.reducer";

const middlewares = [logger];

const composedEnhancer = compose(applyMiddleware(...middlewares));

//logger is used to log the state of the store before and after the action is dispatched
export const store = createStore(rootReducer, undefined, composedEnhancer);
