import { useEffect } from "react";

import { useFilter } from "../../store/hooks/use-filter-actions";
import { useProductList } from "../../store/hooks/use-store-actions";

import FiltersBlock from "./components/FiltersBlock/FiltersBlock";
import ProductList from "./components/ProductList/ProductList";

import { TProduct } from "../../store/reducers/types";

import { PRODUCTS_LIST } from "./_constants";

import "./Home.scss";

const Home = () => {
  const { setProductList } = useProductList();
  const { searchTitle, searchCategory, searchBrand } = useFilter();

  useEffect(() => {
    (async () => {
      try {
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
      } catch (error) {
        throw new Error("Can't find products");
      }
    })();
  }, [searchTitle, searchCategory, searchBrand]);
  return (
    <main className="main">
      <ProductList />
      <FiltersBlock />
    </main>
  );
};

export default Home;
