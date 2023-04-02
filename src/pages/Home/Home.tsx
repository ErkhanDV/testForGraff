import { useEffect } from "react";

import FiltersBlock from "./components/FiltersBlock/FiltersBlock";
import ProductList from "./components/ProductList/ProductList";

import { getAllProducts } from "../../store/services/getAllProducts";
import { useFilter } from "../../store/hooks/use-filter-actions";
import { useAppDispatch } from "../../store/hooks/use-redux";

import "./Home.scss";

const Home = () => {
  const { searchTitle, searchCategory, searchBrand } = useFilter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllProducts({ searchTitle, searchCategory, searchBrand }));
  }, [searchTitle, searchCategory, searchBrand]);

  return (
    <main className="main">
      <ProductList />
      <FiltersBlock />
    </main>
  );
};

export default Home;
