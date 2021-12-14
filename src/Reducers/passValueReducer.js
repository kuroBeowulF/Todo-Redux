import { setValue } from "./actionTypes";
const passValueReducer = (state = "", action) => {
  switch (action.type) {
    case setValue.type:
      return action.payload;

    default:
      return state;
  }
};
export default passValueReducer;
