import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

let prods = [];

export const getProductsRequest = createAsyncThunk("PRODUCTS", () => {
  return axios
    .get(`http://localhost:3001/api/products/get/${id}`)
    .then((res) => (prods = [...prods, res.data]))
    .then((res) => res);
});

export const getOrderProducts = createAsyncThunk("ORDER_PRODUCTS", (id) => {
  return axios
    .get(`http://localhost:3001/api/products/get/${id}`)
    .then((res) => (prods = [...prods, res.data]))
    .then((res) => res);
});

const productsReducer = createReducer([], {
  [getProductsRequest.fulfilled]: (state, action) => action.payload,
  [getOrderProducts.fulfilled]: (state, action) => action.payload,
});

export default productsReducer;
