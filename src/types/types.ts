import { TProduct } from "../store/reducers/types";

export interface IProducts {
  limit: number;
  products: TProduct[];
  skip: number;
  total: number;
}

export interface IFilters {
  searchTitle: string;
  searchCategory: string[];
  searchBrand: string;
}
