import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppState, Theme } from "./appReducer.model";

const initialState: AppState = {
  theme: "dark",
};

export const appReducer = createSlice({
  name: "app",
  initialState,
  reducers: {
    setTheme: (state: AppState, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = appReducer.actions;
