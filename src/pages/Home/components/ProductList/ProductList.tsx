import ProductCard from "../ProductCard/ProductCard";

import { useProductList } from "../../../../store/hooks/use-store-actions";

import "./ProductList.scss";

const ProductList = () => {
  const { productList } = useProductList();

  return (
    <section className="products-section">
      <h1 className="title">Products</h1>
      <nav className="product-list">
        <ul className="products">
          {productList.map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default ProductList;
