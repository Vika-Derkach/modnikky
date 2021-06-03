const clothesRequested = () => {
  return {
    type: "FETCH_CLOTHES_REQUEST",
  };
};

const clothesLoaded = (newClothes) => {
  return {
    type: "FETCH_CLOTHES_SUCCESS",
    payload: newClothes,
  };
};

const clothesError = (error) => {
  return {
    type: "FETCH_CLOTHES_FAILURE",
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
const fetchClothes = (modnikkyService, dispatch) => () => {
  dispatch(clothesRequested());
  modnikkyService
    .getClothes()
    .then((data) => dispatch(clothesLoaded(data)))
    .catch((err) => dispatch(clothesError(err)));
};
export {
  fetchClothes,
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
