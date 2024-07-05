import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Home,
  Payment,
  SearchResults,
  SingleHotel,
  Wishlist,
  BookingSuccess,
} from "./pages";

function App() {
  return (
    // <Home />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/hotels/:name/:address/:id/reserve"
        element={<SingleHotel />}
      />
      <Route path="/hotels/:destination/result" element={<SearchResults />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/confirm-payment/stay/:id" element={<Payment />} />
      <Route path="/booking/successful" element={<BookingSuccess />} />
    </Routes>
  );
}

export default App;
