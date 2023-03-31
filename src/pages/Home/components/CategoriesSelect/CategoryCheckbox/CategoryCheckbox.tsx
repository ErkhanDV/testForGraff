import { useEffect, useState } from "react";
import { useFilter } from "../../../../../store/hooks/use-filter-actions";

const CategoryCheckbox = ({ category }: { category: string }) => {
  const { searchCategory, setSearchCategory, removeSearchCategory } =
    useFilter();
  const [isChecked, setChecked] = useState<boolean>(false);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setSearchCategory(category.toLowerCase());
      return;
    }
    removeSearchCategory(category.toLowerCase());
  };

  useEffect(() => {
    setChecked(searchCategory.includes(category.toLowerCase()));
  }, [searchCategory]);

  return (
    <label htmlFor="first">
      <input
        type="checkbox"
        id={category}
        onChange={changeHandler}
        checked={isChecked}
      />
      {category}
    </label>
  );
};

export default CategoryCheckbox;
