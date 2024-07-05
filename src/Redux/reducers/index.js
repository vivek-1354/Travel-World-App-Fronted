import { combineReducers } from "redux";
import authReducer from "./authReducer";
import dateReducer from "./dateReducer";
import filterReducer from "./filterReducer";
import wishlistReducer from "./wishlistReducer";
import categoryReducer from "./categoryReducer";

const rootReducer = combineReducers({
  authReducer,
  dateReducer,
  filterReducer,
  wishlistReducer,
  categoryReducer,
});

export default rootReducer;
