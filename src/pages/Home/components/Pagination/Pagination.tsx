import { useEffect } from "react";

import { useProductList } from "../../../../store/hooks/use-store-actions";

import "./Pagination.scss";

const Pagination = ({
  page,
  setPage,
}: {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const { productList } = useProductList();
  const isNextBtnActive = productList.length > page * 5;
  const isPrevBtnActive = page > 1;

  const pageIncrement = () => {
    if (isNextBtnActive) {
      setPage(page + 1);
    }
  };
  const pageDecrement = () => {
    if (isPrevBtnActive) {
      setPage(page - 1);
    }
  };

  useEffect(() => {
    setPage(1);
  }, [productList]);

  return (
    <div className="pagination-container">
      <button
        className={`button left${isPrevBtnActive ? " active" : ""}`}
        onClick={pageDecrement}
      />
      <span className="page-number">{page}</span>
      <button
        className={`button right${isNextBtnActive ? " active" : ""}`}
        onClick={pageIncrement}
      />
    </div>
  );
};

export default Pagination;
