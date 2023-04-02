import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useProduct } from "../../store/hooks/use-product-action";
import { useAppDispatch } from "../../store/hooks/use-redux";

import { getProduct } from "../../store/services/getProduct";

import BackLink from "../../components/BackLink/BackLink";

import "./Product.scss";

const Product = () => {
  const { id } = useParams();
  const { product } = useProduct();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getProduct(id));
    }
  }, []);

  if (!product) {
    return <h2>Not product</h2>;
  }

  return (
    <main className="card">
      <BackLink />
      <section className="card_wrapper">
        <div className="card-info">
          <h1 className="card_title">{product.title}</h1>
          <h2 className="card_price">
            <span className="card_price__subtitle">Price: </span>
            <span className="card_info__value">${product.price}</span>
          </h2>
          <p className="card_discription">
            <span className="card_discription__value">
              {product.description}
            </span>
          </p>
          <p className="card_info">
            <span className="card_info__subtitle">Category: </span>
            <span className="card_info__value">{product.category}</span>
          </p>
          <p className="card_info">
            <span className="card_info__subtitle">Brand: </span>
            <span className="card_info__value">{product.brand}</span>
          </p>
          <p className="card_info">
            <span className="card_info__subtitle">Rating: </span>
            <span className="card_info__value">{product.rating}</span>
          </p>
          <p className="card_info">
            <span className="card_info__subtitle">Stock: </span>
            <span className="card_info__value">{product.stock}</span>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Product;
