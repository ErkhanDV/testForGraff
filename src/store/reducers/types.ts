export type TProduct = {
  name: string;
  amount: number;
};

export interface IProductsStore {
  products: TProduct[];
}
