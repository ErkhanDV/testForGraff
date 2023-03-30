import { useParams } from "react-router-dom";
import { useProductList } from "../../store/hooks/use-store-actions";

const Product = () => {
  const { id } = useParams();
  const { productList } = useProductList();
  const product = productList.find((product) => product.id === Number(id));

  return (
    <div className="product-info">
      <h5 className="product-title">{product?.title}</h5>
    </div>
  );
};

export default Product;
