import { useProductList } from "../../../../store/hooks/use-store-actions";

const FiltersBlock = () => {
  const { productList, setProductList } = useProductList();
  return (
    <div className="filters">
      <input
        type="text"
        className="name"
        onChange={(event) =>
          setProductList(
            productList.filter((product) =>
              product.title.includes(event.target.value)
            )
          )
        }
      />
    </div>
  );
};

export default FiltersBlock;
