import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IProductsStore, TProduct } from "./types";

const initialState: IProductsStore = {
  products: [],
};

const productStoreSlice = createSlice({
  name: "productStore",
  initialState,
  reducers: {
    updateProductList(state, action: PayloadAction<TProduct[]>) {
      state.products = action.payload;
    },
  },
});

export const { updateProductList } = productStoreSlice.actions;

export default productStoreSlice.reducer;
