import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_FLOWERS":
      /* key interpolation syntax, iskoristili smo da bi svaki objekat iz niza objekata razlikovali po svom ID-u*/
      return { ...state, ..._.mapKeys(action.payload, "id") };
    default:
      return state;
  }
};
