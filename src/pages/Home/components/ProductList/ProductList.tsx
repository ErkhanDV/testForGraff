import { useState } from "react";

import ProductCard from "../ProductCard/ProductCard";
import Pagination from "../Pagination/Pagination";

import { useProductList } from "../../../../store/hooks/use-store-actions";

import "./ProductList.scss";

const ProductList = () => {
  const { productList } = useProductList();
  const [page, setPage] = useState<number>(1);

  return (
    <section className="products-section">
      <h1 className="page-title">Products</h1>
      <button className="filters-button">Filters</button>
      <nav className="product-list">
        <ul className="products">
          {productList
            .filter((_, index) => {
              return index < 5 * page && index >= 5 * (page - 1);
            })
            .map((product, index) => (
              <ProductCard product={product} key={index} />
            ))}
        </ul>
      </nav>
      <Pagination page={page} setPage={setPage} />
    </section>
  );
};

export default ProductList;
