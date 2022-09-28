export default (state = null, action) => {
  switch (action.type) {
    case "INIT":
      return action.payload;
    default:
      return state;
  }
};
