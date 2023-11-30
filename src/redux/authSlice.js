// authSlice.js
import { createSlice } from "@reduxjs/toolkit";


const storedAuthData = JSON.parse(localStorage.getItem("authData")) || null;

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: storedAuthData ? storedAuthData.user : null,
    token: storedAuthData ? storedAuthData.accessToken : null,
    roles: storedAuthData ? storedAuthData.roles : null,
    organization: storedAuthData ? storedAuthData.organization : null,
  },
  reducers: {
    setCredentials: (state, action) => {
      const { user, accessToken, roles, organization } = action.payload;
      state.user = user;
      state.token = accessToken;
      state.roles = roles;
      state.organization = organization;

      localStorage.setItem("authData", JSON.stringify(action.payload));
    },
    logOut: (state, action) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("authData");
    }
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
