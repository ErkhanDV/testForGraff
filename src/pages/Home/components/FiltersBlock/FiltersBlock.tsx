import { useFilter } from "../../../../store/hooks/use-filter-actions";

import { BRANDS } from "../../_constants";

import BrandsFilter from "../BrandOption/BrandOption";

const FiltersBlock = () => {
  const { searchTitle, setSearchTitle } = useFilter();

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
          {BRANDS.map((brand, index) => (
            <BrandsFilter brand={brand} key={index} />
          ))}
        </fieldset>
      </div>
    </div>
  );
};

export default FiltersBlock;
