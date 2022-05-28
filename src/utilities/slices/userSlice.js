/**
 * create action & reducer for user
 * thunk for async function
 * data: {
 * isLoggedIn:false}
 */

import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import UserApi from '../../api/userApi';
import OrderApi from '../../api/orderApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {classifyOrder} from '../../helpers/classifyOrder';

// thunk action to login and get token
export const login = createAsyncThunk('user/login', async params => {
  const token = await UserApi.login(params);
  return token;
});

// thunk action to login and get token
export const loginWithFB = createAsyncThunk(
  'user/loginWithFB',
  async params => {
    const token = await UserApi.loginWithFB(params);
    return token;
  },
);

// thunk action to get list order
export const getAllUserOrders = createAsyncThunk(
  'user/getAllUserOrders',
  async () => {
    const orders = await OrderApi.getAllUserOrders();

    const result = classifyOrder(orders);
    return result;
  },
);

const user = createSlice({
  name: 'user',
  initialState: {
    data: {
      isLoggedIn: false,
      error: '',
      listOrders: null,
      facebookToken: '',
    },
  },
  reducers: {
    updateLoggedInStatus: (state, action) => {
      state.data.isLoggedIn = action.payload.isLoggedIn;
    },
    clearData: state => {
      state.data.isLoggedIn = false;
      AsyncStorage.setItem('user', '');
    },
    setInit: (state, action) => {
      state.data.isLoggedIn = action.payload;
    },
    setFBToken: (state, action) => {
      state.data.facebookToken = action.payload;
    },
  },
  extraReducers: {
    [login.pending]: state => {},
    [login.fulfilled]: state => {
      state.data.isLoggedIn = true;
      state.data.error = '';
    },
    [login.rejected]: state => {
      state.data.isLoggedIn = false;
      state.data.error = 'Username or password is incorrect';
    },
    [loginWithFB.pending]: state => {},
    [loginWithFB.fulfilled]: state => {
      state.data.isLoggedIn = true;
      state.data.error = '';
    },
    [loginWithFB.rejected]: state => {
      state.data.isLoggedIn = false;
      state.data.error = 'Username or password is incorrect';
    },
    [getAllUserOrders.pending]: state => {},
    [getAllUserOrders.fulfilled]: (state, action) => {
      state.data.listOrders = action.payload;
    },
    [getAllUserOrders.rejected]: state => {},
  },
});
export default user.reducer;
export const {updateLoggedInStatus, clearData, setInit, setFBToken} =
  user.actions;
