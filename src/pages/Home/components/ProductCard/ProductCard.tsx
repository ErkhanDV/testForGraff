import { Link } from "react-router-dom";

import { TProduct } from "../../../../store/reducers/types";

const ProductCard = ({ product }: { product: TProduct }) => {
  return (
    <li className="product-card">
      <Link to={`/products/${product.id}`}>
        <h4 className="product-title">{product.title}</h4>
        <p>{product.description}</p>
      </Link>
    </li>
  );
};

export default ProductCard;
