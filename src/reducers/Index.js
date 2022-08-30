import { combineReducers } from "redux";
import flowerReducer from "./flowerReducer";
import selectedFlower from "./selectedFlower.js";
export default combineReducers({
  flowrs: flowerReducer,
  /* selected: selectedFlower,*/
});
