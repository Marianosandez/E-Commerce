import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const getMeRequest = createAsyncThunk("ME", (id) => {
  return axios
    .get(`http://localhost:3001/api/users/get/${id}`)
    .then((res) => res.data);
});

const meReducer = createReducer(
  {},
  {
    [getMeRequest.fulfilled]: (state, action) => action.payload,
  }
);

export default meReducer;
