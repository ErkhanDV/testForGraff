import { useEffect } from "react";

import { useProductList } from "./store/hooks/use-store-actions";
import { useFilter } from "./store/hooks/use-filter-actions";

import AppRouter from "./router/AppRouter";

import { PRODUCTS_LIST } from "./pages/Home/_constants";

import { TProduct } from "./store/reducers/types";

import "./App.scss";

const App = () => {
  const { setProductList } = useProductList();
  const { searchTitle, searchCategory, searchBrand } = useFilter();

  useEffect(() => {
    (async () => {
      const respounse = await fetch(PRODUCTS_LIST);
      const products: TProduct[] = await respounse.json();

      setProductList(
        products.filter(
          (product) =>
            product.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
            product.brand.toLowerCase().includes(searchBrand) &&
            (searchCategory.length
              ? searchCategory.some(
                  (category) => product.category.toLowerCase() === category
                )
              : true)
        )
      );
    })();
  }, [searchTitle, searchCategory, searchBrand]);

  return <AppRouter />;
};

export default App;
