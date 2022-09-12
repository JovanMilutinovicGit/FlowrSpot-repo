/* eslint-disable no-unused-vars */

export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_FLOWER":
      return action.payload;
    default:
      return state;
  }
};
