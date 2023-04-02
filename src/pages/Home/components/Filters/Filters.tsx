import CategoriesSelect from "../CategoriesSelect/CategoriesSelect";
import SearchTitle from "./components/SearchTitle/SearchTitle";
import BrandsSelector from "./components/BrandsSelector/BrandsSelector";

import "./Filters.scss";

const Filters = () => {
  return (
    <div className="filters-block">
      <SearchTitle />
      <BrandsSelector />
      <CategoriesSelect />
    </div>
  );
};

export default Filters;
