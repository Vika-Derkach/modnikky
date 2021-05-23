const initialState = {
  clothes: [],
  loading: true,
  error: null,
  selectedItem: null,
  productItems: [],
  bagItems: [],
  orderTotal: 0,
};
const updateBagItems = (bagItems, item, idx) => {
  //новий елемент і його потібно добавити в масив
  if (idx === -1) {
    return [...bagItems, item];
  }
  return [...bagItems.slice(0, idx), item, ...bagItems.slice(idx + 1)];
};
const updateBagItem = (bagProduct, bagProductItem) => {
  if (bagProductItem) {
    return {
      ...bagProductItem,
      price: bagProductItem.price + bagProduct.price,
      count: bagProductItem.count + 1,
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
const reducer = (state = initialState, action) => {
  console.log(action.type);

  switch (action.type) {
    case "BOOKS_REQUESTED":
      return {
        ...state,
        clothes: [],
        loading: true,
        error: null,
      };
    case "CLOTHES_LOADED":
      return {
        ...state,
        clothes: action.payload,
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
      const cloth = state.clothes.find((cloth) => cloth.id === clothId);
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
      };
      return {
        ...state,
        productItems: [newItem],
      };
    case "PRODUCT_ADDED_TO_BAG":
      const bagProductId = action.payload;
      const bagProduct = state.clothes.find(
        (product) => product.id === bagProductId
      );
      const bagProductIndex = state.bagItems.findIndex(
        ({ id }) => id === bagProductId
      );
      const bagProductItem = state.bagItems[bagProductIndex];

      // let countCart = 0;
      // // let countPriceCart = 0;
      // state.bagItems.forEach((bagItem) => {
      //   countCart = bagItem.count + countCart + 1;
      // });
      // updatedItems.forEach((updatedItem) => {
      //   countPriceCart = updatedItem.total + countPriceCart;
      // });

      // let newBagItem;
      // if (bagProductItem) {
      //   newBagItem = {
      //     ...bagProductItem,
      //     price: bagProductItem.price + bagProduct.price,

      //     count: bagProductItem.count + 1,
      //   };
      // } else {
      //   newBagItem = {
      //     id: bagProduct.id,
      //     title: bagProduct.title,
      //     frontPicture: bagProduct.frontPicture,
      //     price: bagProduct.price,
      //     color: bagProduct.color,
      //     count: 1,
      //   };
      // }
      const newBagItem = updateBagItem(bagProduct, bagProductItem);
      return {
        ...state,
        bagItems: updateBagItems(state.bagItems, newBagItem, bagProductIndex),
        // orderTotal: countCart,
      };

    case "PRODUCT_REMOVED_FROM_BAG":
      const { bagItems } = state;
      const bagProductRemovedId = action.payload;
      const bagItemIndex = bagItems.findIndex(
        ({ id }) => id === bagProductRemovedId
      );

      // const newBagRemovedProduct = [
      //   ...bagItems.slice(0, bagItemIndex),
      //   ...bagItems.slice(bagItemIndex + 1),
      // ];
      // const newBagRemovedProduct = bagItems.filter(
      //   (el) => el.id !== bagProductRemovedId
      // );
      return {
        ...state,
        bagItems: [
          ...bagItems.slice(0, bagItemIndex),
          ...bagItems.slice(bagItemIndex + 1),
        ],
      };

    default:
      return state;
  }
};
export default reducer;
