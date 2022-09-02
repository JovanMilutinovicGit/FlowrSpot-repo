import { combineReducers } from "redux";
import flowerReducer from "./flowerReducer";
import sightingsReducer from "./sightingsReducer";
import sightingComments from "./sightingComments";
import randomFlowerReducer from "./randomFlowerReducer";
import fetchFlower from "./fetchFlower";
export default combineReducers({
  flowrs: flowerReducer,
  sightings: sightingsReducer,
  comments: sightingComments,
  random: randomFlowerReducer,
  fetchFlower: fetchFlower,
});
