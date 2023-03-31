import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IProductsStore, TProduct } from "./types";

const initialState: IProductsStore = {
  products: [],
};

const productListSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    updateProductList(state, action: PayloadAction<TProduct[]>) {
      state.products = action.payload;
    },
  },
});

export const { updateProductList } = productListSlice.actions;

export default productListSlice.reducer;
