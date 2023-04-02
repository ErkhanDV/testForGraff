import { useState } from "react";
import { Link } from "react-router-dom";

import ProductCard from "../ProductCard/ProductCard";
import Pagination from "../Pagination/Pagination";
import Modal from "../Modal/Modal";
import Filters from "../Filters/Filters";

import { useProductList } from "../../../../store/hooks/use-store-actions";
import useWindowDimensions from "../../../../hooks/useWindowDimension";

import "./ProductList.scss";

const ProductList = () => {
  const { productList } = useProductList();
  const [page, setPage] = useState<number>(1);
  const [modalActive, setModalActive] = useState<boolean>(false);
  const { width } = useWindowDimensions();

  return (
    <section className="products-section">
      <h1 className="page-title">Products</h1>
      {width < 750 && (
        <button className="filters-button" onClick={() => setModalActive(true)}>
          Filters
        </button>
      )}
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
      <Modal active={modalActive}>
        <>
          <Link
            to="/"
            className="back-link"
            onClick={() => setModalActive(false)}
          >
            Back to products
          </Link>
          <Filters />
        </>
      </Modal>
    </section>
  );
};

export default ProductList;
