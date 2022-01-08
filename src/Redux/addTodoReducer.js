import { actionTypes } from "./Action/ActionTypes";
import { v4 as uuid } from "uuid";

const addTodoReducer = (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_TODO:
      return [
        ...state,
        { id: uuid(), text: payload.InputValue, compeleted: false },
      ];
    case actionTypes.REMOVE:
      return state.filter((todo) => todo.id !== payload.id);
    case actionTypes.HANDEL_TRUE:
      return state.map((todo) =>
        todo.id === payload.id ? { ...payload.todo, compeleted: true } : todo
      );
    case actionTypes.HANDEL_FALSE:
      return state.map((todo) =>
        todo.id === payload.id ? { ...payload.todo, compeleted: false } : todo
      );
    case actionTypes.RECOVER_STATE:
      return state.map((todo) =>
        todo.id === payload.id
          ? {
              ...todo,
              compeleted: payload.boolean,
              text: payload.text,
            }
          : todo
      );
    default:
      return state;
  }
};
export default addTodoReducer;
