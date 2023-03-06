import { combineReducers } from "redux";
import { userReducer } from "./UserReducer";

export const reducers = combineReducers({ userReducer });

export type RootState = ReturnType<typeof reducers>;
