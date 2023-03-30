export type TProduct = {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  stock: string;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export interface IProducts {
  limit: number;
  products: TProduct[];
  skip: number;
  total: number;
}

export interface IProductsStore {
  products: TProduct[];
}
