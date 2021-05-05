const clothesLoaded = (newClothes) => {
  return {
    type: "CLOTHES_LOADED",
    payload: newClothes,
  };
};
export { clothesLoaded };
