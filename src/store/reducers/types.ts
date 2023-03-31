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

export interface IProductsStore {
  products: TProduct[];
}

export interface IFilter {
  title: string;
  category: string[];
  brand: string;
}
