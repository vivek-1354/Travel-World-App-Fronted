export const wishlistReducer = (state, action) => {
  switch (action.type) {
    case "ADD_WISH":
      return [...state, action.payload];
    case "REMOVE_WISH":
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};
