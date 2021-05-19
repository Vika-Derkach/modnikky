const initialState = {
  clothes: [],
  loading: true,
  error: null,
  selectedItem: null,
  productItem: [
    {
      id: 1,
      title: "CHALK SAINTS",
      frontPicture:
        "https://i.pinimg.com/736x/05/da/14/05da143bb08929bc209598c319ec2ce2.jpg",
    },
  ],
};

const reducer = (state = initialState, action) => {
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
      const cloth = state.clothes.find((book) => book.id === clothId);
      const newItem = {
        id: cloth.id,
        name: cloth.title,
        count: 1,
        total: cloth.price,
      };
      return {
        ...state,
        selectedItem: [newItem],
      };
    default:
      return state;
  }
};
export default reducer;
