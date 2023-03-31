import { useAppDispatch, useAppSelector } from "./use-redux";

import * as productStoreSlice from "../reducers/ProductsSlice";

import { TProduct } from "../reducers/types";

export const useProductList = () => {
  const dispatch = useAppDispatch();

  const productList = useAppSelector((state) => state.ProductsSlice.products);

  const setProductList = (productList: TProduct[]) => {
    dispatch(productStoreSlice.updateProductList(productList));
  };

  return {
    productList,
    setProductList,
  };
};
