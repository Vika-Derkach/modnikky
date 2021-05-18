const initialState = {
  clothes: [],
  loading: true,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "BOOKS_REQUESTED":
      return {
        clothes: [],
        loading: true,
      };
    case "CLOTHES_LOADED":
      return {
        clothes: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
export default reducer;
