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
const onItemSelected = (clothId) => {
  return {
    type: "ON_ITEM_SELECTED",
    payload: clothId,
  };
};
const productAddedToCart = (bagProductId) => {
  return {
    type: "PRODUCT_ADDED_TO_BAG",
    payload: bagProductId,
  };
};
export {
  clothesLoaded,
  clothesRequested,
  clothesError,
  onItemSelected,
  productAddedToCart,
};
