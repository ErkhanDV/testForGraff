import { useEffect } from "react";

import { useProductList } from "./store/hooks/use-store-actions";
import { useFilter } from "./store/hooks/use-filter-actions";

import AppRouter from "./router/AppRouter";

import { PRODUCTS_LIST } from "./pages/Home/_constants";

import { IProducts } from "./types/types";

import "./App.scss";

const App = () => {
  const { setProductList } = useProductList();
  const { searchTitle, searchCategory, searchBrand } = useFilter();

  useEffect(() => {
    (async () => {
      const respounse = await fetch(PRODUCTS_LIST);
      const products: IProducts = await respounse.json();
      const productList = products.products;

      setProductList(
        productList.filter(
          (product) =>
            product.title.toLowerCase().includes(searchTitle) &&
            searchCategory.every((category) =>
              product.category.toLowerCase().includes(category)
            ) &&
            product.brand.toLowerCase().includes(searchBrand)
        )
      );
    })();
  }, [searchTitle, searchCategory, searchBrand]);

  return <AppRouter />;
};

export default App;
