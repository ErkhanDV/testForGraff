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
    setSearchCategory(state, action: PayloadAction<string>) {
      state.category.push(action.payload);
    },
    setSearchBrand(state, action: PayloadAction<string>) {
      state.brand = action.payload;
    },
  },
});

export const { setSearchTitle, setSearchCategory, setSearchBrand } =
  filterSlice.actions;

export default filterSlice.reducer;
