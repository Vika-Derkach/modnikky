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
const productAddedToBag = (bagProductId) => {
  return {
    type: "PRODUCT_ADDED_TO_BAG",
    payload: bagProductId,
  };
};
const productRemovedFromBag = (bagProductRemovedId) => {
  return {
    type: "PRODUCT_REMOVED_FROM_BAG",
    payload: bagProductRemovedId,
  };
};
const productAllRemovedFromBag = (bagProductRemovedId) => {
  return {
    type: "PRODUCT_ALL_REMOVED_FROM_BAG",
    payload: bagProductRemovedId,
  };
};
///search fillter
const searchClothes = (value) => {
  return {
    type: "SEARCH_CLOTHES",
    value,
  };
};
const onFilterClothes = (clothName) => {
  return {
    type: "ON_FILTER_CLOTHES",
    clothName,
  };
};
const onFilterSize = (sizeName) => {
  return {
    type: "ON_FILTER_SIZE",
    sizeName,
  };
};
const onFilterPrice = (priceName) => {
  return {
    type: "ON_FILTER_PRICE",
    priceName,
  };
};
const onFilterFabric = (fabricName) => {
  return {
    type: "ON_FILTER_FABRIC",
    fabricName,
  };
};
export {
  clothesLoaded,
  clothesRequested,
  clothesError,
  onItemSelected,
  productAddedToBag,
  productRemovedFromBag,
  productAllRemovedFromBag,
  searchClothes,
  onFilterClothes,
  onFilterSize,
  onFilterPrice,
  onFilterFabric,
};
