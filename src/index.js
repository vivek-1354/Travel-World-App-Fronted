import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import {
  AuthContextProvider,
  CategoryProvider,
  DateProvider,
  FilterContextProvider,
} from "./context";
import { WishlistProvider } from "./context/wishlist-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CategoryProvider>
        <DateProvider>
          <FilterContextProvider>
            <AuthContextProvider>
              <WishlistProvider>
                <App />
              </WishlistProvider>
            </AuthContextProvider>
          </FilterContextProvider>
        </DateProvider>
      </CategoryProvider>
    </BrowserRouter>
  </React.StrictMode>
);
