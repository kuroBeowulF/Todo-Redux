import * as actions from "./actionTypes";
import { v4 as uuid } from "uuid";

const addTodoReducer = (state = [], action) => {
  switch (action.type) {
    case actions.addTodo.type:
      return [
        ...state,
        { id: uuid(), text: action.payload, compeleted: false },
      ];
    case actions.removeTodo.type:
      return state.filter((todo) => todo.id !== action.id);
    case actions.handelTrue.type:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...action.payload.item, compeleted: true }
          : todo
      );
    case actions.handelFalse.type:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...action.payload.item, compeleted: false }
          : todo
      );
    case actions.recoverState.type:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? {
              ...todo,
              compeleted: action.payload.boolean,
              text: action.payload.text,
            }
          : todo
      );
    default:
      return state;
  }
};
export default addTodoReducer;
