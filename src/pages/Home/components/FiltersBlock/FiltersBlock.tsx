import { useFilter } from "../../../../store/hooks/use-filter-actions";

import { BRANDS } from "../../_constants";

import BrandsFilter from "../BrandOption/BrandOption";
import CategoriesSelect from "../CategoriesSelect/CategoriesSelect";

import "./FiltersBlock.scss";

const FiltersBlock = () => {
  const { searchTitle, searchBrand, setSearchBrand, setSearchTitle } =
    useFilter();

  return (
    <aside className="filters">
      <h3 className="title">Filters</h3>
      <div className="search-container">
        <input
          placeholder="Search by title..."
          type="text"
          className="input-search"
          defaultValue={searchTitle}
          onChange={(event) => setSearchTitle(event.target.value)}
        />
      </div>
      <div className="brands-filter_container">
        <fieldset className="brands-list">
          Choose a brand:
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
    </aside>
  );
};

export default FiltersBlock;
