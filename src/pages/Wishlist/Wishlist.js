import { useEffect, useState } from "react";
import { HotelCard, Navbar } from "../../components";
import { useWishlist } from "../../context";
import "./Wishlist.css";

export const Wishlist = () => {
  const [wishlist, setWishlist] = useState();
  const { wishlistState } = useWishlist();

  useEffect(() => {
    setWishlist(wishlistState.wishlist);
  }, []);
  return (
    <>
      <Navbar />
      <h2 className="heading-2">Your Wishlist</h2>
      <section className="wishlist-page d-flex align-center wrap gap-larger">
        {wishlist &&
          wishlist.map((hotel) => <HotelCard key={hotel._id} hotel={hotel} />)}
      </section>
    </>
  );
};
