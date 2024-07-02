export const wishlistReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return { ...state, wishlist: [...state.wishlist, action.payload] };
    case "REMOVE_WISH":
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};
