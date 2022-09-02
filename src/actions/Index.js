import jsonFlowers from "../apis/jsonFlowers.js";

export const fetchFlowers = () => async (dispatch) => {
  const response = await jsonFlowers.get("/flowers");
  dispatch({ type: "FETCH_FLOWERS", payload: response.data.flowers });
};

export const fetchSightings = () => async (dispatch) => {
  const response = await jsonFlowers.get("/sightings");
  dispatch({ type: "FETCH_SIGHTINGS", payload: response.data.sightings });
};

export const fetchRandomFlowers = () => async (dispatch) => {
  const response = await jsonFlowers.get(`/flowers/random`);
  dispatch({ type: "FETCH_RANDOM_FLOWERS", payload: response.data.flowers });
};

export const fetchSearchFlowers = (searchValue) => async (dispatch) => {
  const response = await jsonFlowers.get(
    `/flowers/search?query=${searchValue}`
  );
  dispatch({ type: "FETCH_SEARCH_FLOWERS", payload: response.data.flowers });
};

export const fetchComments = (id) => async (dispatch) => {
  const response = await jsonFlowers.get(`/sightings/${id}/comments`);
  dispatch({ type: "FETCH_COMMENTS", payload: response.data.comments });
};

export const fetchSighting = (id) => async (dispatch) => {
  const response = await jsonFlowers.get(`/sightings/${id}`);
  dispatch({ type: "FETCH_SIGHTING", payload: response.data.sightings });
};

export const fetchFlower = (id) => async (dispatch) => {
  const response = await jsonFlowers.get(`/flowers/${id}`);
  dispatch({ type: "FETCH_FLOWER", payload: response.data.flower });
};

export const createProfile = (formValues) => async (dispatch) => {
  const response = await jsonFlowers.post("/users/register", formValues);
  dispatch({ type: "CREATE_PROFILE", payload: response.data });
};
