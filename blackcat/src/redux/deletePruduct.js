import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const deleteProductRequest = createAsyncThunk(
  "PRODUCT_DELETE",
  (productId) => {
    return axios.delete(`http://localhost:3001/api/products/${productId}`);
  }
);

const deleteproductReducer = createReducer(
  {},
  {
    [deleteProductRequest.fulfilled]: (state, action) => action.payload,
  }
);

export default deleteproductReducer;
