const initialState = {
  clothesFromDb: [],
  clothes: [],
  loading: true,
  error: null,
  selectedItem: null,
  productItems: [],
  bagItems: [],
  orderTotal: 0,
  orderTotalPrice: 0,
  searchClothesValue: "",
  filterClothes: "",
  filterSize: "",
  filterPrice: "",
  filterFabric: "",
  lookPicture: "",
  lookPictureSecond: "",
};
const updateBagItems = (bagItems, item, idx) => {
  /// удаляє елемент з масива
  if (item.count === 0) {
    return [...bagItems.slice(0, idx), ...bagItems.slice(idx + 1)];
  }
  //новий елемент і його потібно добавити в масив
  if (idx === -1) {
    return [...bagItems, item];
  }
  //обновляє існуючий масив
  return [...bagItems.slice(0, idx), item, ...bagItems.slice(idx + 1)];
};

const updateBagItem = (bagProduct, bagProductItem, quantity) => {
  if (bagProductItem) {
    return {
      ...bagProductItem,
      price: bagProductItem.price + quantity * bagProduct.price,
      count: bagProductItem.count + quantity,
    };
  } else {
    return {
      id: bagProduct.id,
      title: bagProduct.title,
      frontPicture: bagProduct.frontPicture,
      price: bagProduct.price,
      color: bagProduct.color,
      count: 1,
      size: bagProduct.size,
    };
  }
};

const updateOrder = (state, bagProductId, quantity) => {
  const { clothes, bagItems } = state;
  // const bagProductId = action.payload;
  const bagProduct = clothes.find((product) => product.id === bagProductId);
  const bagProductIndex = bagItems.findIndex(({ id }) => id === bagProductId);
  const bagProductItem = bagItems[bagProductIndex];

  const newBagItem = updateBagItem(bagProduct, bagProductItem, quantity);

  //////
  const updatedItems = updateBagItems(
    state.bagItems,
    newBagItem,
    bagProductIndex
  );

  let countBag = 0;
  let countPriceBag = 0;
  updatedItems.forEach((updatedItem) => {
    countBag = updatedItem.count + countBag;
  });
  updatedItems.forEach((updatedItem) => {
    countPriceBag = updatedItem.price + countPriceBag;
  });
  //
  return {
    ...state,
    bagItems: updateBagItems(bagItems, newBagItem, bagProductIndex),
    orderTotal: countBag,
    orderTotalPrice: countPriceBag,
  };
};

//filter
const filter = (items, filter) => {
  switch (filter) {
    case "shop-all":
      return items;
    case "shorts":
      return items.filter((item) => item.kind === "shorts");
    case "jeans":
      return items.filter((item) => item.kind === "jeans");
    case "jacket":
      return items.filter((item) => item.kind === "jacket");
    case "top":
      return items.filter((item) => item.kind === "top");
    case "tee-and-trank":
      return items.filter((item) => item.kind === "tee-and-trank");
    case "shirt":
      return items.filter((item) => item.kind === "shirt");
    case "dress":
      return items.filter((item) => item.kind === "dress");
    case "knitwear":
      return items.filter((item) => item.kind === "knitwear");
    case "jumpsuit":
      return items.filter((item) => item.kind === "jumpsuit");
    case "bottom":
      return items.filter((item) => item.kind === "bottom");
    case "hoodie":
      return items.filter((item) => item.kind === "hoodie");
    case "skirt":
      return items.filter((item) => item.kind === "skirt");

    default:
      return items;
  }
};
const filterSizes = (items, filter) => {
  switch (filter) {
    // case "shop-all":
    //   return items;
    case "S":
      return items.filter((item) => item.size === "S");
    case "M":
      return items.filter((item) => item.size === "M");
    case "L":
      return items.filter((item) => item.size === "L");
    case "XL":
      return items.filter((item) => item.size === "XL");

    default:
      return items;
  }
};

const filterPrizes = (items, filter) => {
  switch (filter) {
    case "<30$":
      return items.filter((item) => item.price <= 30);
    case "30-300$":
      return items.filter((item) => item.price > 30 && item.price < 300);
    case "300+$":
      return items.filter((item) => item.price >= 300);

    default:
      return items;
  }
};
const filterFabrics = (items, filter) => {
  switch (filter) {
    case "COTTON":
      return items.filter((item) => item.fabric === "COTTON");
    case "DENIM":
      return items.filter((item) => item.fabric === "DENIM");
    case "LACE":
      return items.filter((item) => item.fabric === "LACE");
    case "LEATHER":
      return items.filter((item) => item.fabric === "LEATHER");
    case "LINEN":
      return items.filter((item) => item.fabric === "LINEN");
    case "SILK":
      return items.filter((item) => item.fabric === "SILK");
    case "SYNTHETIC":
      return items.filter((item) => item.fabric === "SYNTHETIC");
    case "WOOL":
      return items.filter((item) => item.fabric === "WOOL");

    default:
      return items;
  }
};
const reducer = (state = initialState, action) => {
  console.log(action.type);

  switch (action.type) {
    case "FETCH_CLOTHES_REQUEST":
      return {
        ...state,
        clothes: [],
        clothesFromDb: [],
        loading: true,
        error: null,
      };
    case "FETCH_CLOTHES_SUCCESS":
      return {
        ...state,
        clothes: action.payload,
        clothesFromDb: action.payload,
        loading: false,
        error: null,
      };
    case "FETCH_CLOTHES_FAILURE":
      return {
        ...state,
        clothes: [],
        loading: false,
        error: action.payload,
      };
    case "ON_ITEM_SELECTED":
      const clothId = action.payload;
      const cloth = state.clothesFromDb.find((cloth) => cloth.id === clothId);
      const newItem = {
        id: cloth.id,
        title: cloth.title,
        frontPicture: cloth.frontPicture,
        additionalPicture: cloth.additionalPicture,
        fabric: cloth.fabric,
        product_descr: cloth.product_descr,
        price: cloth.price,
        color: cloth.color,
        kind: cloth.kind,
        size: cloth.size,
      };
      const newLookPicture = state.clothesFromDb.find(
        (cloth) =>
          // cloth.frontPicture !== newItem.frontPicture &&
          cloth.kind !== newItem.kind
      );
      const newLookPictureSecond = state.clothesFromDb.find(
        (cloth) =>
          cloth.kind !== newItem.kind && cloth.kind !== newLookPicture.kind
      );

      return {
        ...state,
        productItems: [newItem],
        lookPicture: newLookPicture.frontPicture,
        lookPictureSecond: newLookPictureSecond.frontPicture,
      };
    case "PRODUCT_ADDED_TO_BAG":
      return updateOrder(state, action.payload, 1);

    case "PRODUCT_ALL_REMOVED_FROM_BAG":
      const removedItem = state.bagItems.find(
        ({ id }) => id === action.payload
      );
      return updateOrder(state, action.payload, -removedItem.count);

    case "PRODUCT_REMOVED_FROM_BAG":
      return updateOrder(state, action.payload, -1);

    case "SEARCH_CLOTHES":
      ///search fillter
      const { value = "" } = action;

      const { clothesFromDb } = state;

      const search = (clothes, searchClothesValue) => {
        if (searchClothesValue.length === 0) {
          return clothes;
        }
        return clothes.filter((cloth) => {
          return (
            cloth.title
              .toLowerCase()
              .indexOf(searchClothesValue.toLowerCase()) > -1
          );
        });
      };
      const visibleClothes = filter(
        search(clothesFromDb, value),

        state.filterClothes
      );

      return {
        ...state,
        clothes: visibleClothes,
        searchClothesValue: value,
      };
    case "ON_FILTER_CLOTHES":
      const { clothName = "" } = action;

      const filteredClothes = filter(state.clothesFromDb, clothName);
      return {
        ...state,
        clothes: filteredClothes,
        filterClothes: clothName,
      };
    case "ON_FILTER_SIZE":
      const { sizeName = "" } = action;

      const filteredSized = filter(
        filterSizes(state.clothesFromDb, sizeName),
        state.filterClothes
      );
      return {
        ...state,
        clothes: filteredSized,
        filterSize: sizeName,
      };
    default:
      return state;

    case "ON_FILTER_PRICE":
      const { priceName = "" } = action;

      const filteredPriced = filter(
        filterSizes(
          filterPrizes(state.clothesFromDb, priceName),
          state.filterSize
        ),
        state.filterPrice
      );
      return {
        ...state,
        clothes: filteredPriced,
        filterPrice: priceName,
      };
    case "ON_FILTER_FABRIC":
      const { fabricName = "" } = action;

      const filteredFabric = filter(
        filterSizes(
          filterFabrics(state.clothesFromDb, fabricName),
          state.filterSize
        ),
        state.filterFabric
      );
      return {
        ...state,
        clothes: filteredFabric,
        filterFabric: fabricName,
      };
  }
};
export default reducer;
