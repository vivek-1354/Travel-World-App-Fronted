import { combineReducers } from "redux";
import authReducer from "./authReducer";
import dateReducer from "./dateReducer";
import filterReducer from "./filterReducer";
import wishlistReducer from "./wishlistReducer";

const rootReducer = combineReducers({
  authReducer,
  dateReducer,
  filterReducer,
  wishlistReducer,
});

export default rootReducer;
