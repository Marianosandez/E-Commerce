import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const getProductDetailsRequest = createAsyncThunk(
  "PRODUCT_DETAILS",
  async (productId) => {
    const response = await axios.get(
      `http://localhost:3001/api/products/get/${productId}`
    );
    const responseData = response.data;
    return responseData;
  }
);

const productDetailsReducer = createReducer(
  {},
  {
    [getProductDetailsRequest.fulfilled]: (state, action) => action.payload,
  }
);

export default productDetailsReducer;

// export const getProductDetailsRequest = createAsyncThunk(
//   "PRODUCT_DETAILS",
//   (productId) => {
//     return axios
//       .get(`http://localhost:3001/api/products/get/${productId}`)
//       .then((res) => res.data);
//   }
// );
