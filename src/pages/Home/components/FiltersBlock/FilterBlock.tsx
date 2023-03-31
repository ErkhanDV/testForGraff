import { useFilter } from "../../../../store/hooks/use-filter-actions";

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
          onChange={(event) => setSearchTitle(event.target.value.toLowerCase())}
        />
      </div>
    </div>
  );
};

export default FiltersBlock;
