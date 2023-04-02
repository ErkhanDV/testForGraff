import useWindowDimensions from "../../hooks/useWindowDimension";

import Filters from "../Filters/Filters";

import "./FiltersBlock.scss";

const FiltersBlock = () => {
  const { width } = useWindowDimensions();

  if (width >= 750) {
    return (
      <aside className="filters">
        <h3 className="title">Filters</h3>
        <Filters />
      </aside>
    );
  }
  return null;
};

export default FiltersBlock;
