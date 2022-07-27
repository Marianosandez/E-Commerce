import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const updateProductRequest = createAsyncThunk(
  "UPDATE_PROD",
  (product) => {
    return axios.put(
      `http://localhost:3001/api/products/edit/${product[1]}`,
      product[0]
    );
  }
);

const updateProductsReducer = createReducer([], {
  [updateProductRequest.fulfilled]: (state, action) => action.payload,
});

export default updateProductsReducer;
