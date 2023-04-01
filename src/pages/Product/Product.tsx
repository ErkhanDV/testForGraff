import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { TProduct } from "../../store/reducers/types";

import { PRODUCTS_LIST } from "../Home/_constants";

import "./Product.scss";

const Product = () => {
  const { id } = useParams();
  const [currentProduct, setCurrentProduct] = useState<TProduct>();

  useEffect(() => {
    (async () => {
      const respounse = await fetch(`${PRODUCTS_LIST}/${id}`);
      const product: TProduct = await respounse.json();
      setCurrentProduct(product);
    })();
  }, []);

  if (!currentProduct) {
    return <h2>Not product</h2>;
  }

  return (
    <main className="card">
      <Link to="/" className="back-link">
        Back to products
      </Link>
      <section className="card_wrapper">
        <div className="card-info">
          <h1 className="card_title">{currentProduct.title}</h1>
          <h2 className="card_price">
            <span className="card_price__subtitle">Price: </span>
            <span className="card_info__value">${currentProduct.price}</span>
          </h2>
          <p className="card_discription">
            <span className="card_discription__value">
              {currentProduct.description}
            </span>
          </p>
          <p className="card_info">
            <span className="card_info__subtitle">Category: </span>
            <span className="card_info__value">{currentProduct.category}</span>
          </p>
          <p className="card_info">
            <span className="card_info__subtitle">Brand: </span>
            <span className="card_info__value">{currentProduct.brand}</span>
          </p>
          <p className="card_info">
            <span className="card_info__subtitle">Rating: </span>
            <span className="card_info__value">{currentProduct.rating}</span>
          </p>
          <p className="card_info">
            <span className="card_info__subtitle">Stock: </span>
            <span className="card_info__value">{currentProduct.stock}</span>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Product;
