import FiltersBlock from "./components/FiltersBlock/FiltersBlock";
import ProductList from "./components/ProductList/ProductList";

const Home = () => {
  return (
    <main className="main">
      <ProductList />
      <FiltersBlock />
    </main>
  );
};

export default Home;
