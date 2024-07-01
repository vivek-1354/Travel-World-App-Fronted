import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, SearchResults, SingleHotel, Wishlist } from "./pages";

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
    </Routes>
  );
}

export default App;
