import { createContext, useContext, useReducer } from "react";
import { wishlistReducer } from "../reducer";

const initialState = {
  wishlist: [],
};
//create context
const WishlistContext = createContext(initialState);

//provider
const WishlistProvider = ({ children }) => {
  const [wishlistState, wishlistDispatch] = useReducer(
    wishlistReducer,
    initialState
  );
  return (
    <WishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => {
  return useContext(WishlistContext);
};

export { WishlistProvider, useWishlist };
