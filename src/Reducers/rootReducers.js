import { combineReducers } from "redux";
import addTodoReducer from "./addTodoReducer";
import passValueReducer from "./passValueReducer";

export const rootReducer = combineReducers({
  addTodoReducer,
  passValueReducer,
});
