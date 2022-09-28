/* eslint-disable no-unused-vars */
import jsonFlowers from "../apis/jsonFlowers.js";

export const fetchFlowers = () => async (dispatch) => {
  const response = await jsonFlowers.get("/flowers");
  dispatch({ type: "FETCH_FLOWERS", payload: response.data.flowers });
};

export const fetchFlower = (id) => async (dispatch) => {
  const response = await jsonFlowers.get(`/flowers/${id}`);
  dispatch({ type: "FETCH_FLOWER", payload: response.data.flower });
};

export const fetchRandomFlowers = () => async (dispatch) => {
  const response = await jsonFlowers.get("/flowers/random");
  dispatch({ type: "FETCH_RANDOM_FLOWERS", payload: response.data.flowers });
};

export const fetchSearchFlowers = (searchValue) => async (dispatch) => {
  const response = await jsonFlowers.get(
    `/flowers/search?query=${searchValue}`
  );
  dispatch({ type: "FETCH_SEARCH_FLOWERS", payload: response.data.flowers });
};

export const fetchSightings = () => async (dispatch) => {
  const response = await jsonFlowers.get("/sightings");
  dispatch({ type: "FETCH_SIGHTINGS", payload: response.data.sightings });
};

export const fetchSighting = (id) => async (dispatch) => {
  const response = await jsonFlowers.get(`/sightings/${id}`);
  dispatch({ type: "FETCH_SIGHTING", payload: response.data.sighting });
};

export const createSighting = (formValues) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const response = await jsonFlowers.post("/sightings", formValues, {
    headers: {
      authorization: token,
    },
  });
};

export const fetchSightingListCurrentlyFlower = (id) => async (dispatch) => {
  const response = await jsonFlowers.get(`/flowers/${id}/sightings`);
  dispatch({
    type: "FETCH_SIGHTING_LIST_CURRENTLY_FLOWER",
    payload: response.data.sightings,
  });
};

export const fetchComments = (id) => async (dispatch) => {
  const response = await jsonFlowers.get(`/sightings/${id}/comments`);
  dispatch({ type: "FETCH_COMMENTS", payload: response.data.comments });
};

export const createComment = (content, id) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const response = await jsonFlowers.post(
    `/sightings/${id}/comments`,
    content,
    {
      headers: {
        authorization: token,
      },
    }
  );
};

export const createProfile = (formValues) => async (dispatch) => {
  const response = await jsonFlowers.post("/users/register", formValues);
  dispatch({ type: "CREATE_PROFILE", payload: response });
};

export const getMyInfo = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  const response = await jsonFlowers.get("/users/me", {
    headers: {
      authorization: token,
    },
  });
  dispatch({ type: "GET_MY_INFO", payload: response.data.user });
};

export const login = (formValues) => async (dispatch) => {
  const response = await jsonFlowers.post("/users/login", formValues);
  localStorage.setItem("token", response.data.auth_token);
  dispatch({ type: "LOGIN", payload: response.data });
};

export const init = () => async (dispatch) => {
  const token = await localStorage.getItem("token");
  dispatch({ type: "INIT", payload: token });
};

export const logoutUser = () => async (dispatch) => {
  await localStorage.clear();
  dispatch({ type: "LOGOUT" });
};

export const getUsername = (id) => async (dispatch) => {
  const response = await jsonFlowers.get(`users/${id}`);
  dispatch({ type: "USERNAME", payload: response.data.user.first_name });
};

export const fetchFavorites = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  const response = await jsonFlowers.get("/flowers/favorites", {
    headers: {
      authorization: token,
    },
  });
  dispatch({ type: "FETCH_FAVORITES", payload: response.data.fav_flowers });
};

export const markFavorite = (id, mark) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const response = await jsonFlowers.post(`/flowers/${id}/favorites`, mark, {
    headers: {
      authorization: token,
    },
  });
};

export const unpinFavorite = (id_flower, fav_id) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const response = await jsonFlowers.delete(
    `/flowers/${id_flower}/favorites/${fav_id}`,
    {
      headers: {
        authorization: token,
      },
    }
  );
};

export const fetchUserSightings = (id) => async (dispatch) => {
  const response = await jsonFlowers.get(`/users/${id}/sightings`);
  dispatch({ type: "USER_SIGHTINGS", payload: response.data.sightings });
};
