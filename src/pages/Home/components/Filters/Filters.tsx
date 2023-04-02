import { useFilter } from "../../../../store/hooks/use-filter-actions";

import BrandsFilter from "../BrandOption/BrandOption";
import CategoriesSelect from "../CategoriesSelect/CategoriesSelect";

import { BRANDS } from "../../_constants";

import "./Filters.scss";

const Filters = () => {
  const { searchTitle, searchBrand, setSearchBrand, setSearchTitle } =
    useFilter();

  return (
    <div className="filters-block">
      <div className="search-container">
        <input
          placeholder="Search by title..."
          type="text"
          className="input-search"
          defaultValue={searchTitle}
          onChange={(event) => setSearchTitle(event.target.value)}
        />
      </div>
      <span className="brand">Choose a brand:</span>
      <div className="brands-filter_container">
        <fieldset className="brands-list">
          <div className="brand-option">
            <input
              type="radio"
              id="any"
              name="brands"
              value=""
              onChange={(event) =>
                setSearchBrand(event.target.value.toLowerCase())
              }
              checked={!searchBrand}
            />
            <label htmlFor="any">Any</label>
          </div>
          {BRANDS.map((brand, index) => (
            <BrandsFilter brand={brand} key={index} />
          ))}
        </fieldset>
      </div>
      <CategoriesSelect />
    </div>
  );
};

export default Filters;
