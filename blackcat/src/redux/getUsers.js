import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsersRequest = createAsyncThunk("GET_USERS", async (id) => {
  const response = axios.get(`http://localhost:3001/api/users/all/${id}`);
  const usersRequest = await response.data;
  return usersRequest;
});

export const deleteUsersRequest = createAsyncThunk("DELETE_USERS", (id) => {
  return axios.delete(`http://localhost:3001/api/users/delete/${id}`);
});

const getUsersReducer = createReducer([], {
  [getUsersRequest.fulfilled]: (state, action) => action.payload,
  [deleteUsersRequest.fulfilled]: (state, action) => action.payload,
});

export default getUsersReducer;
