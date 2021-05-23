const initialState = {
  clothes: [],
  loading: true,
  error: null,
  selectedItem: null,
  productItems: [],
  bagItems: [],
  orderTotal: 0,
  orderTotalPrice: 0,
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

      const newBagItem = updateBagItem(bagProduct, bagProductItem);

      ////
      const updatedItems = updateBagItems(
        state.bagItems,
        newBagItem,
        bagProductIndex
      );
      // console.log(newItem.count);
      // console.log(cartItems.id);
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
        bagItems: updateBagItems(state.bagItems, newBagItem, bagProductIndex),
        orderTotal: countBag,
        orderTotalPrice: countPriceBag,
      };

    case "PRODUCT_REMOVED_FROM_BAG":
      const { bagItems } = state;
      const bagProductRemovedId = action.payload;
      const bagItemIndex = bagItems.findIndex(
        ({ id }) => id === bagProductRemovedId
      );

      // const bagRemovedProduct = state.clothes.find(
      //   (product) => product.id === bagProductRemovedId
      // );

      // const bagRemoveProductItem = state.bagItems[bagItemIndex];

      // const newRemovedBagItem = updateBagItem(
      //   bagRemovedProduct,
      //   bagRemoveProductItem
      // );
      // const updatedRemovedItems = updateBagItems(
      //   bagItems,
      //   newRemovedBagItem,
      //   bagItemIndex
      // );
      // let countBagRemove = 0;
      // let countPriceBagRemove = 0;
      // updatedRemovedItems.forEach((updatedRemovedItem) => {
      //   countBagRemove = updatedRemovedItem.count - countBagRemove;
      // });
      // updatedRemovedItems.forEach((updatedRemovedItem) => {
      //   countPriceBagRemove = updatedRemovedItem.price - countPriceBagRemove;
      // });

      return {
        ...state,
        bagItems: [
          ...bagItems.slice(0, bagItemIndex),
          ...bagItems.slice(bagItemIndex + 1),
        ],
        // orderTotal: countBagRemove,
        // orderTotalPrice: countPriceBagRemove,
      };

    default:
      return state;
  }
};
export default reducer;
