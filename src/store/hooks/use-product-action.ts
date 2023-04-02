import { useAppDispatch, useAppSelector } from "./use-redux";

import * as productSlice from "../reducers/ProductSlice";

import { TProduct } from "../reducers/types";

export const useProduct = () => {
  const dispatch = useAppDispatch();

  const product = useAppSelector((state) => state.ProductSlice.product);

  const getCurrentProduct = (product: TProduct) => {
    dispatch(productSlice.getCurrentProduct(product));
  };

  return {
    product,
    getCurrentProduct,
  };
};
