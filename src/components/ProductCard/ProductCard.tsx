import { Link } from "react-router-dom";

import { TProduct } from "../../store/reducers/types";

import "./ProductCard.scss";

const ProductCard = ({ product }: { product: TProduct }) => {
  return (
    <Link to={`/products/${product.id}`}>
      <li className="product-card">
        <h4 className="title">{product.title}</h4>
        <div className="attributes">
          <div className="container">
            <span className="attribute-name">Category:</span>
            <span>{product.category}</span>
          </div>
          <div className="container">
            <span className="attribute-name">Brand:</span>
            <span>{product.brand}</span>
          </div>
        </div>
      </li>
    </Link>
  );
};

export default ProductCard;
