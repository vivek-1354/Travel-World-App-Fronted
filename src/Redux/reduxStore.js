// src/store/index.js
import { legacy_createStore } from "redux";
import rootReducer from "./reducers/index";

const store = legacy_createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // For Redux DevTools Extension
);

export default store;
