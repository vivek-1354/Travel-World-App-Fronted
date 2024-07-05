import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import state from "./Redux/reduxStore";
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
                <Provider store={state}>
                  <App />
                </Provider>
              </WishlistProvider>
            </AuthContextProvider>
          </FilterContextProvider>
        </DateProvider>
      </CategoryProvider>
    </BrowserRouter>
  </React.StrictMode>
);
