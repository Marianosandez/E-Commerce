import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createAdminRequest = createAsyncThunk("CREATE_ADMIN", (id) => {
  return axios.put(`http://localhost:3001/api/users/promote/${id}`, {
    admin: true,
  });
});

export const removeAdminRequest = createAsyncThunk("REMOVE_ADMIN", (id) => {
  return axios.put(`http://localhost:3001/api/users/promote/${id}`, {
    admin: false,
  });
});

const adminReducer = createReducer(
  {},
  {
    [createAdminRequest.fulfilled]: (state, action) => action.payload,
    [removeAdminRequest.fulfilled]: (state, action) => action.payload,
  }
);

export default adminReducer;
