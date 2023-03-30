import { useEffect } from "react";

import { useProductList } from "./store/hooks/use-store-actions";

import AppRouter from "./router/AppRouter";

import { PRODUCTS_LIST } from "./pages/Home/_constants";

import { IProducts } from "./store/reducers/types";

import "./App.scss";

const App = () => {
  const { setProductList } = useProductList();

  useEffect(() => {
    (async () => {
      const respounse = await fetch(PRODUCTS_LIST);
      const products: IProducts = await respounse.json();
      setProductList(products.products);
    })();
  }, []);
  return <AppRouter />;
};

export default App;
