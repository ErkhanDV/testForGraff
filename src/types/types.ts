import { TProduct } from "../store/reducers/types";

export interface IProducts {
  limit: number;
  products: TProduct[];
  skip: number;
  total: number;
}
