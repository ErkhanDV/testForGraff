import { useFilter } from "../../../../store/hooks/use-filter-actions";

import "./BrandOption.scss";

const BrandsFilter = ({ brand }: { brand: string }) => {
  const { searchBrand, setSearchBrand } = useFilter();

  return (
    <div className="brand-option">
      <input
        className="custom-radio"
        type="radio"
        id={brand}
        name="brands"
        value={brand}
        onChange={(event) => setSearchBrand(event.target.value.toLowerCase())}
        checked={searchBrand === brand.toLowerCase()}
      />
      <label htmlFor={brand}>{brand}</label>
    </div>
  );
};

export default BrandsFilter;
