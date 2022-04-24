import { createSlice } from "@reduxjs/toolkit";

const initial = createSlice({
  name: "initial",
  initialState: false,
  reducers: {
    setInit: (state, action) => {
      state.filter = action.payload;
    },
  },
});
export const { getAsyncStorage } = filter.actions;
export default initial.reducer;

// Set initial state to empty values:
const initialState = {
  uid: "",
  username: "",
};

// Reducer: 
const initialReducer = (state = initialState, action) => {
  switch(action.type) {
    case "setInit":
      return { 
        ...state, 
        username: action.user,
      }
    default: 
      return state;
  }
};


