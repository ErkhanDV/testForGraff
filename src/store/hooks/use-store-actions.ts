import { useAppDispatch, useAppSelector } from "./use-redux";

import * as productStoreSlice from "../reducers/ProductsSlice";

import { TProduct } from "../reducers/types";

export const useStore = () => {
  const dispatch = useAppDispatch();

  const getProductList = useAppSelector((state) => state.ProductsSlice);

  const updateProductList = (productList: TProduct[]) => {
    dispatch(productStoreSlice.updateProductList(productList));
  };

  return {
    getProductList,
    updateProductList,
  };
};
