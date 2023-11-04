import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const TO_DO_THEME = "toDoTheme";

let initialState =
  JSON.parse(localStorage.getItem(TO_DO_THEME) || "false") || false;

const themeSlice = createSlice({
  name: "themeReducer",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      const setState = !state;
      localStorage.setItem(TO_DO_THEME, JSON.stringify(setState));
      return setState;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme;
export default themeSlice.reducer;
