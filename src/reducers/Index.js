import { combineReducers } from "redux";
import flowerReducer from "./flowerReducer";
import sightingsReducer from "./sightingsReducer";
import sightingComments from "./sightingComments";
import randomFlowerReducer from "./randomFlowerReducer";
import fetchFlower from "./fetchFlower";
import fetchSightingList from "./fetchSightingList";
import fetchSighting from "./fetchSighting.js";
import initReducer from "./initReducer";
import usernameReducer from "./usernameReducer";

export default combineReducers({
  flowrs: flowerReducer,
  sightings: sightingsReducer,
  comments: sightingComments,
  random: randomFlowerReducer,
  fetchFlower: fetchFlower,
  currentlySightings: fetchSightingList,
  currentlySightingDetail: fetchSighting,
  init: initReducer,
  name: usernameReducer,
});
