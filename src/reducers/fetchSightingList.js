// eslint-disable-next-line no-unused-vars

export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_SIGHTING_LIST_CURRENTLY_FLOWER":
      return action.payload;
    default:
      return state;
  }
};
