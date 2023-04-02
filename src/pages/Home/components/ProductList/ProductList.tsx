import { useState } from "react";
import { Link } from "react-router-dom";

import ProductCard from "../ProductCard/ProductCard";
import Pagination from "../Pagination/Pagination";
import Modal from "../../../../components/Modal/Modal";
import Filters from "../Filters/Filters";

import { useProductList } from "../../../../store/hooks/use-store-actions";
import useWindowDimensions from "../../../../hooks/useWindowDimension";

import "./ProductList.scss";

const ProductList = () => {
  const { productList } = useProductList();
  const [page, setPage] = useState<number>(1);
  const [modalActive, setModalActive] = useState<boolean>(false);
  const { width } = useWindowDimensions();

  const isMobile = width < 750;

  const onClose = () => setModalActive(false);
  const onOpen = () => setModalActive(true);

  return (
    <section className="products-section">
      <h1 className="page-title">Products</h1>
      {isMobile && (
        <button className="filters-button" onClick={onOpen}>
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
      {isMobile && (
        <Modal isOpen={modalActive} onClose={onClose} lazy>
          <Link to="/" className="back-link" onClick={onClose}>
            Back to products
          </Link>
          <Filters />
        </Modal>
      )}
    </section>
  );
};

export default ProductList;
