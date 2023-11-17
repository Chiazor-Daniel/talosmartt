import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";


const initialState = {
  name: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: action.payload.name,
        })
      );
    },
  },
});

export const { setUser } = authSlice.actions;

export const selectUserName = (state) => state.auth;

export default authSlice.reducer;
