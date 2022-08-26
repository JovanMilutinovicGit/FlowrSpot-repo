import jsonFlowers from "../apis/jsonFlowers.js";
export const fetchFlowers = () => async (dispatch) => {
  const response = await jsonFlowers.get("/flowers");
  dispatch({ type: "FETCH_FLOWERS", payload: response.data.flowers });
};

export const SelectFlower = (flower) => {
  return {
    type: "FLOWER_SELECTED",
    payload: flower,
  };
};
