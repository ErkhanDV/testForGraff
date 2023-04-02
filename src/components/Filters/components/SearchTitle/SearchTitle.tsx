import React, { useEffect, useState } from "react";

import { useDebounce } from "../../../../hooks/useDebounce";
import { useFilter } from "../../../../store/hooks/use-filter-actions";

import "../../Filters.scss";

const SearchTitle = () => {
  const { setSearchTitle } = useFilter();
  const [search, setSearch] = useState<string>("");

  const debouncedSearchValue = useDebounce(search, 500);

  const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    setSearchTitle(debouncedSearchValue);
  }, [debouncedSearchValue]);

  return (
    <div className="search-container">
      <input
        placeholder="Search by title..."
        type="text"
        className="input-search"
        defaultValue={search}
        onChange={searchHandler}
      />
    </div>
  );
};

export default SearchTitle;
