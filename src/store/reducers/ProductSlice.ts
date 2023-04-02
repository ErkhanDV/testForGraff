import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IProduct, TProduct } from "./types";

const initialState: IProduct = {
  product: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getCurrentProduct(state, action: PayloadAction<TProduct>) {
      state.product = action.payload;
    },
  },
});

export const { getCurrentProduct } = productSlice.actions;

export default productSlice.reducer;
