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
const clothesError = (error) => {
  return {
    type: "CLOTHES_ERROR",
    payload: error,
  };
};

export { clothesLoaded, clothesRequested, clothesError };
