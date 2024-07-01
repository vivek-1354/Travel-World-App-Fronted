import { createContext, useContext, useReducer } from "react";
import { wishlistReducer } from "../reducer";

//create context
const WishlistContext = createContext([]);

//provider
const WishlistProvider = ({ children }) => {
  const [wishlist, dispatch] = useReducer(wishlistReducer, []);
  return (
    <WishlistContext.Provider value={{ wishlist, dispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => {
  return useContext(WishlistContext);
};

export { WishlistProvider, useWishlist };
