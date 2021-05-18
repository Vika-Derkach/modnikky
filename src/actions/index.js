const clothesLoaded = (newClothes) => {
  return {
    type: "CLOTHES_LOADED",
    payload: newClothes,
  };
};
const clothesRequested = () => {
  return {
    type: "BOOKS_REQUESTED",
  };
};
export { clothesLoaded, clothesRequested };
