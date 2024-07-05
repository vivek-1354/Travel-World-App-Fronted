export const addToWishlist = (hotel) => {
  return {
    type: "ADD_TO_WISHLIST",
    payload: hotel,
  };
};

export const deleteFromWishlist = (id) => {
  return {
    type: "REMOVE_FRON_WISHLIST",
    payload: id,
  };
};
