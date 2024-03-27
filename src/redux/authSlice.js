// authSlice.js
import { createSlice } from "@reduxjs/toolkit";


const storedAuthData = JSON.parse(localStorage.getItem("authData")) || null;

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: storedAuthData ? storedAuthData.user : null,
    token: storedAuthData ? storedAuthData.accessToken : null,
    role: storedAuthData ? storedAuthData.role : null,
    organization: storedAuthData ? storedAuthData.organization : null,
  },
  reducers: {
    setCredentials: (state, action) => {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.token = accessToken;
      state.role = user.role;
      state.organization = user.organization;

      localStorage.setItem("authData", JSON.stringify(action.payload));
    },
    logOut: (state, action) => {
      state.user = null;
      state.token = null;
      state.role = null;
      state.organization = null;
      localStorage.removeItem("authData");
    }
  },
});


export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
