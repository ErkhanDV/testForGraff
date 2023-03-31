import { useState } from "react";

import { useFilter } from "../../../../store/hooks/use-filter-actions";

import CategoryCheckbox from "./CategoryCheckbox/CategoryCheckbox";

import { CATEGORIES } from "../../_constants";

import "./CategoriesSelect.scss";

const CategoriesSelect = () => {
  const { searchCategory } = useFilter();

  const [isVisible, setVisible] = useState<boolean>(false);

  return (
    <div className="multiple-select">
      <h3>Categories</h3>
      <div className="select-boxes">
        <button className="select-btn" onClick={() => setVisible(!isVisible)}>
          {!searchCategory.length ? "Any" : `Choosed: ${searchCategory.length}`}
        </button>
        <div className={isVisible ? "visible checkBoxes" : "checkBoxes"}>
          {CATEGORIES.map((category, index) => (
            <CategoryCheckbox category={category} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesSelect;
