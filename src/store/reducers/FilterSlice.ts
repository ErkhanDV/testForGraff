import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IFilter } from "./types";

const initialState: IFilter = {
  title: "",
  category: [],
  brand: "",
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearchTitle(state, action: PayloadAction<string>) {
      state.title = action.payload;
    },
    setSearchBrand(state, action: PayloadAction<string>) {
      state.brand = action.payload;
    },
    setSearchCategory(state, action: PayloadAction<string>) {
      state.category.push(action.payload);
    },
    removeSearchCategory(state, action: PayloadAction<string>) {
      state.category = state.category.filter(
        (category) => category !== action.payload
      );
    },
  },
});

export const {
  setSearchTitle,
  setSearchBrand,
  setSearchCategory,
  removeSearchCategory,
} = filterSlice.actions;

export default filterSlice.reducer;
