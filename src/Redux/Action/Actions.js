import { actionTypes } from "./ActionTypes";
export const addTodo = (InputValue) => {
  return {
    type: actionTypes.ADD_TODO,
    payload: { InputValue },
  };
};
export const RemoveTodo = (id) => {
  return {
    type: actionTypes.REMOVE,
    payload: { id },
  };
};
export const HandleTrue = (todo, id) => {
  return {
    type: actionTypes.HANDEL_TRUE,
    payload: { todo, id },
  };
};

export const HandleFalse = (todo, id) => {
  return {
    type: actionTypes.HANDEL_FALSE,
    payload: { todo, id },
  };
};
export const SetValue = (text, id) => {
  return {
    type: actionTypes.SET_VALUE,
    payload: { text, id },
  };
};
export const RecoverState = (boolean, id, text) => {
  return {
    type: actionTypes.RECOVER_STATE,
    payload: { boolean, id, text },
  };
};
