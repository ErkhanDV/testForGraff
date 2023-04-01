import { useState } from "react";

import { useFilter } from "../../../../store/hooks/use-filter-actions";

import CategoryCheckbox from "./CategoryCheckbox/CategoryCheckbox";

import { CATEGORIES } from "../../_constants";

import "./CategoriesSelect.scss";

const CategoriesSelect = () => {
  const { searchCategory } = useFilter();

  const [isVisible, setVisible] = useState<boolean>(false);
  const visibleHandler = () => setVisible(!isVisible);

  return (
    <div className="multiple-select">
      <p className="categories-title">Categories:</p>
      <div className="select-boxes">
        <button
          className={`categories-btn${isVisible ? " active" : ""}`}
          onClick={visibleHandler}
        >
          {!searchCategory.length ? "Any" : `Choosed: ${searchCategory.length}`}
        </button>
        {isVisible && (
          <ul className="checkBoxes">
            {CATEGORIES.map((category, index) => (
              <CategoryCheckbox category={category} key={index} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CategoriesSelect;
