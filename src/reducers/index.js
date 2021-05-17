const initialState = {
  clothes: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CLOTHES_LOADED":
      return {
        clothes: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
