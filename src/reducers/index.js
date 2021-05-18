const initialState = {
  clothes: [],
  loading: true,
  error: null,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "BOOKS_REQUESTED":
      return {
        clothes: [],
        loading: true,
        error: null,
      };
    case "CLOTHES_LOADED":
      return {
        clothes: action.payload,
        loading: false,
        error: null,
      };
    case "CLOTHES_ERROR":
      return {
        clothes: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
