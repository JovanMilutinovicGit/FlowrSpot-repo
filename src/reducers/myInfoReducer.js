export default (state = {}, action) => {
  switch (action.type) {
    case "GET_MY_INFO":
      return action.payload;
    default:
      return state;
  }
};
