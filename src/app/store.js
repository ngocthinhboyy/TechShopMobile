import { configureStore } from "@reduxjs/toolkit";
import reducerProduct from "../utilities/slices/productSlice";
import reducerUser from "../utilities/slices/userSlice";
import reducerCategory from "../utilities/slices/categorySlice";

const rootReducer = {
  product: reducerProduct,
  user: reducerUser,
  category: reducerCategory
};
const store = configureStore({
  reducer: rootReducer,
});
export default store;
