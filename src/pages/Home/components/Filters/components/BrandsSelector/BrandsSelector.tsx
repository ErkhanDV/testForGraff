import React from "react";

import { useFilter } from "../../../../../../store/hooks/use-filter-actions";

import BrandsFilter from "../../../BrandOption/BrandOption";

import { BRANDS } from "../../../../_constants";

import "../../Filters.scss";

const BrandsSelector = () => {
  const { searchBrand, setSearchBrand } = useFilter();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearchBrand(event.target.value.toLowerCase());

  return (
    <>
      <span className="brand">Choose a brand:</span>
      <div className="brands-filter_container">
        <fieldset className="brands-list">
          <div className="brand-option">
            <input
              type="radio"
              id="any"
              name="brands"
              value=""
              onChange={onChange}
              checked={!searchBrand}
            />
            <label htmlFor="any">Any</label>
          </div>
          {BRANDS.map((brand, index) => (
            <BrandsFilter brand={brand} key={index} />
          ))}
        </fieldset>
      </div>
    </>
  );
};

export default BrandsSelector;
