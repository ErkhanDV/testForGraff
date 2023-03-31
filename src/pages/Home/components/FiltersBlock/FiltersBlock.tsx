import { useFilter } from "../../../../store/hooks/use-filter-actions";

import { BRANDS } from "../../_constants";

import BrandsFilter from "../BrandOption/BrandOption";
import CategoriesSelect from "../CategoriesSelect/CategoriesSelect";

const FiltersBlock = () => {
  const { searchTitle, searchBrand, setSearchBrand, setSearchTitle } =
    useFilter();

  return (
    <div className="filters">
      <div className="search_container">
        <input
          placeholder="Search by title..."
          type="text"
          className="name"
          defaultValue={searchTitle}
          onChange={(event) => setSearchTitle(event.target.value)}
        />
      </div>
      <div className="brands-filter_container">
        <fieldset>
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
    </div>
  );
};

export default FiltersBlock;
