/**
 * create action & reducer for category list
 * thunk for async function
 */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import CategoryApi from "../../api/categoryApi";

// thunk action to get list category
export const getCategories = createAsyncThunk(
  "category/getCategories",
  async () => {
    const listCategory = await CategoryApi.getAll();
    return listCategory.map((category) => {
      return {
        ...category,
        isCheckedByAdmin: false,
      };
    }).filter(category => category.slug != 'audio-system' && category.slug != 'gaming-desk-chair')
  }
);

const category = createSlice({
  name: "category",
  initialState: {
    data: [],
  },
  extraReducers: {
    [getCategories.pending]: (state) => {
    },
    [getCategories.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
    [getCategories.rejected]: (state) => {
    },
  },
});
export default category.reducer;
