import { createAsyncThunk } from "@reduxjs/toolkit";

import { updateProductList } from "../reducers/ProductsSlice";

import { PRODUCTS_LIST } from "../../pages/Home/_constants";

import { TProduct } from "../reducers/types";
import { IFilters } from "../../types/types";

export const getAllProducts = createAsyncThunk<void, IFilters>(
  "getAllProducts",
  async ({ searchTitle, searchCategory, searchBrand }, thunkAPI) => {
    try {
      const response = await fetch(PRODUCTS_LIST);
      if (!response) {
        throw new Error();
      }

      const products: TProduct[] = await response.json();

      const filteredProducts = products.filter(
        (product) =>
          product.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
          product.brand.toLowerCase().includes(searchBrand) &&
          (searchCategory.length
            ? searchCategory.some(
                (category) => product.category.toLowerCase() === category
              )
            : true)
      );

      thunkAPI.dispatch(updateProductList(filteredProducts));
    } catch (error) {
      throw new Error("Can't find products");
    }
  }
);
