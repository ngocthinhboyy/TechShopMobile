/**
 * create action & reducer for user
 * thunk for async function
 * data: {
 * isLoggedIn:false}
 */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import UserApi from "../../api/userApi";
import AsyncStorage from '@react-native-async-storage/async-storage';

// thunk action to login and get token
export const login = createAsyncThunk("user/login", async (params) => {
  const token = await UserApi.login(params);
  return token;
});

const user = createSlice({
  name: "user",
  initialState: {
    data: {
      isLoggedIn: false,
      error: "",
    },
  },
  reducers: {
    updateLoggedInStatus: (state, action) => {
      state.data.isLoggedIn = action.payload.isLoggedIn;
    },
    clearData: (state) => {
      state.data.isLoggedIn = false;
      AsyncStorage.setItem('user', "")
    },
    setInit: (state, action) => {
      state.data.isLoggedIn = action.payload;
    }
  },
  extraReducers: {
    [login.pending]: (state) => {},
    [login.fulfilled]: (state, action) => {
      state.data.isLoggedIn = true;
      state.data.error = "";
    },
    [login.rejected]: (state) => {
      state.data.isLoggedIn = false
      state.data.error = "Username or password is incorrect";
    },
  },
});
export default user.reducer;
export const { updateLoggedInStatus, clearData, setInit } = user.actions;
