import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";

export const rootReducer = combineReducers({
    ///name of the reducer slice and the actual reducer 
    user:userReducer,

})