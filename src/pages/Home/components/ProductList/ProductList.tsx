import ProductCard from "../ProductCard/ProductCard";

import { useProductList } from "../../../../store/hooks/use-store-actions";

const ProductList = () => {
  const { productList } = useProductList();

  return (
    <nav className="product-list">
      <ul className="products">
        {productList.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </ul>
    </nav>
  );
};

export default ProductList;
