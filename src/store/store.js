import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import {persistStore, persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"

import { rootReducer } from './root-reducer';

const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
  Boolean
);

const persistConfig= {
  key: "root", 
  storage,
  blacklist: ['users'] //in here you put the slice reducers you don't want to persist the state
  // in this case firebase auth is taking care of the user so it may clash 

}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store)