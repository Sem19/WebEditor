import { createSlice } from "@reduxjs/toolkit";
import { getCookie } from "../../utils/cookies/getTokenFromCookies";

const tokenFromCookies = getCookie("token") || "";
const initialState = {
  isLogined: Boolean(tokenFromCookies),
  token: tokenFromCookies,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    updateIsLogined: (state, action) => {
      state.isLogined = action.payload;
    },
    updateToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { updateIsLogined, updateToken } = userSlice.actions;

export default userSlice.reducer;
