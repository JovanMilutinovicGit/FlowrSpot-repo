const selectedFlower = (selectFlower = null, action) => {
  if (action.type === "FLOWER_SELECTED") {
    return action.payload;
  }
  return selectFlower;
};

export default selectedFlower;
