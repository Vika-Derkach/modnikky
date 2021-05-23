const initialState = {
  clothes: [],
  loading: true,
  error: null,
  selectedItem: null,
  productItems: [
    // {
    //   id: 1,
    //   title: "CHALK SAINTS",
    //   frontPicture:
    //     "https://i.pinimg.com/736x/05/da/14/05da143bb08929bc209598c319ec2ce2.jpg",
    // },
  ],
  bagItems: [
    // {
    //   id: 1,
    //   title: "CHALK SAINTSbcbcbcbcv",
    //   frontPicture:
    //     "https://i.pinimg.com/736x/05/da/14/05da143bb08929bc209598c319ec2ce2.jpg",
    // },
  ],
  orderTotal: 450,
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
      const newBagItem = {
        id: bagProduct.id,
        title: bagProduct.title,
        frontPicture: bagProduct.frontPicture,
        price: bagProduct.price,
        color: bagProduct.color,
      };
      return {
        ...state,
        bagItems: [...state.bagItems, newBagItem],
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
