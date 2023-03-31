import FiltersBlock from "./components/FiltersBlock/FiltersBlock";
import ProductList from "./components/ProductList/ProductList";

import "./Home.scss";

const Home = () => {
  return (
    <main className="main">
      <ProductList />
      <FiltersBlock />
    </main>
  );
};

export default Home;
