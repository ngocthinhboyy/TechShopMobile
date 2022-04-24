import { configureStore } from "@reduxjs/toolkit";
import reducerProduct from "../utilities/slices/productSlice";
import reducerUser from "../utilities/slices/userSlice";

const rootReducer = {
  product: reducerProduct,
  user: reducerUser,
};
const store = configureStore({
  reducer: rootReducer,
});
export default store;
