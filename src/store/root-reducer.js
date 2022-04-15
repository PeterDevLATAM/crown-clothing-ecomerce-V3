import { combineReducers } from 'redux';

import { categoriesReducer } from './category/categories.reducer';
import { userReducer } from './user/user.reducer';

export const rootReducer = combineReducers({
  //in here we use the reducer slice name and the actual reducer 
  user: userReducer,
  categories: categoriesReducer,
});
