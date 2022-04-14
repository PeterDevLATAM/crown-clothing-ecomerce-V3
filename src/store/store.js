import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
  Boolean
);
//in order to actualy work as a middleware need to be passed to createStore trhough compose and applyMiddleware

const composedEnhancers = compose(applyMiddleware(...middleWares));
//middlewares run before dispatching the action. Are passed as a 3rd arg to create store

export const store = createStore(rootReducer, undefined, composedEnhancers);
// createStore takes 3 args 1-rootREducer(the only necesary), 2- for testing, 3- All middlewares toghether 
