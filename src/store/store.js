import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

const middleWares = [logger];
//whenever we dispatch an action runs the middleware first
//we have to pass it to create store as a 3rd arg

//in order of the middlewares actualy work we have to call applyMiddleware trhough compose

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);
// createStore takes 3 args 1- rootREducer 2- to test 3 middlewares
