import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const postLoginRequest = createAsyncThunk(
  "LOGIN",
  ({ email, password }) => {
    return axios
      .post(
        "http://localhost:3001/api/users/login",
        {
          email: email.value,
          password: password.value,
        },
        { withCredentials: true },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "http://localhost:3000/",
          },
        }
      )
      .then((res) => {
        const user = {
          id: res.data.id,
          name: res.data.name,
          admin: res.data.admin,
        };
        localStorage.setItem("user", JSON.stringify(user));
        return user;
      });
  }
);
export const postLogoutRequest = createAsyncThunk("LOGOUT", () => {
  return axios
    .post(
      "http://localhost:3001/api/users/logout",
      { withCredentials: true },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "http://localhost:3000/",
        },
      }
    )
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
});

export const postMeRequest = createAsyncThunk("ME", () => {
  return axios
    .get(
      "http://localhost:3001/api/users/me",
      { withCredentials: true },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "http://localhost:3000/",
        },
      }
    )
    .then((res) => console.log("ACA RES DATA", res.data))
    .catch((err) => {
      console.log(err);
    });
});

const loginReducer = createReducer(
  {},
  {
    [postMeRequest.fulfilled]: (state, action) => action.payload,
    [postLoginRequest.fulfilled]: (state, action) => action.payload,
    [postLogoutRequest.fulfilled]: (state, action) => action.payload,
  }
);

export default loginReducer;
