export const wishlistReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return { ...state, wishlist: [...state.wishlist, action.payload] };
    case "REMOVE_FRON_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.filter((item) => item._id !== action.payload),
      };
    case "UPDATE_WISHLIST":
      return;
    default:
      return state;
  }
};
