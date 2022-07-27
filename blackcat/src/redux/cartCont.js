import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const cartContAdd = createAsyncThunk("ADD", (value) => {
  return value;
});
export const cartContSubtract = createAsyncThunk("SUBTRACT", () => {});

const cartContReducer = createReducer(0, {
  [cartContAdd.fulfilled]: (state, action) => {
    return state + action.payload;
  },
  [cartContSubtract.fulfilled]: (state, action) => {
    if (state > 0) {
      return state - 1;
    }
  },
});

export default cartContReducer;
