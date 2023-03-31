import { useAppDispatch, useAppSelector } from "./use-redux";

import * as filterSlice from "../reducers/FilterSlice";

export const useFilter = () => {
  const dispatch = useAppDispatch();

  const searchTitle = useAppSelector((state) => state.filterSlice.title);
  const searchCategory = useAppSelector((state) => state.filterSlice.category);
  const searchBrand = useAppSelector((state) => state.filterSlice.brand);

  const setSearchTitle = (searchTitle: string) => {
    dispatch(filterSlice.setSearchTitle(searchTitle));
  };
  const setSearchCategory = (searchCategory: string) => {
    dispatch(filterSlice.setSearchCategory(searchCategory));
  };
  const setSearchBrand = (searchBrand: string) => {
    dispatch(filterSlice.setSearchBrand(searchBrand));
  };

  return {
    searchTitle,
    searchCategory,
    searchBrand,
    setSearchTitle,
    setSearchCategory,
    setSearchBrand,
  };
};
