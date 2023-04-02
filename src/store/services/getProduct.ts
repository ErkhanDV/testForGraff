import { createAsyncThunk } from "@reduxjs/toolkit";

import { PRODUCTS_LIST } from "../../pages/Home/_constants";
import { getCurrentProduct } from "../reducers/ProductSlice";

import { TProduct } from "../reducers/types";

export const getProduct = createAsyncThunk<void, string>(
  "getProduct",
  async (id, thunkAPI) => {
    try {
      const response = await fetch(`${PRODUCTS_LIST}/${id}`);
      if (!response) {
        throw new Error();
      }
      const product: TProduct = await response.json();
      thunkAPI.dispatch(getCurrentProduct(product));
    } catch (error) {
      throw new Error("Can't find products");
    }
  }
);
