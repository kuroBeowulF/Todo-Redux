import { actionTypes } from "./Action/ActionTypes";
const passValueReducer = (state = "", { type, payload }) => {
  switch (type) {
    case actionTypes.SET_VALUE:
      return payload;

    default:
      return state;
  }
};
export default passValueReducer;
