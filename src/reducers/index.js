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
const filterSized = (items, filter) => {
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
const reducer = (state = initialState, action) => {
  console.log(action.type);

  switch (action.type) {
    case "BOOKS_REQUESTED":
      return {
        ...state,
        clothes: [],
        clothesFromDb: [],
        loading: true,
        error: null,
      };
    case "CLOTHES_LOADED":
      return {
        ...state,
        clothes: action.payload,
        clothesFromDb: action.payload,
        loading: false,
        error: null,
      };
    case "CLOTHES_ERROR":
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
      return {
        ...state,
        productItems: [newItem],
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
      const { filterSize } = state;

      const filteredSized = filter(
        filterSized(state.clothesFromDb, sizeName),
        state.filterClothes
      );
      return {
        ...state,
        clothes: filteredSized,
        filterSize: sizeName,
      };
    default:
      return state;
  }
};
export default reducer;
