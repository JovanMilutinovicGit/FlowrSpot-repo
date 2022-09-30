export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_SEARCH_FLOWERS":
      return action.payload;
    default:
      return state;
  }
};
