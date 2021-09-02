import { useSelector, useDispatch } from "react-redux";
// import { PRODUCT_PAGE_LIMIT } from "../constants";
import prev from '../../assets/images/prev.svg';
import next from '../../assets/images/next.svg';

export const Pagination = () => {
  const { totalPage, activePage } = useSelector(
    (state) => state.productsReducer
  );
  const dispatch = useDispatch();

  const onPrevClick = () => {
    if (activePage > 1) {
      //dispatch(getProductsPagination(activePage - 1, PRODUCT_PAGE_LIMIT));
    }
  };

  const onNextClick = () => {
    if (activePage < totalPage) {
      //dispatch(getProductsPagination(activePage + 1, PRODUCT_PAGE_LIMIT));
    }
  };

  return (
    <div className="pagination">
      <a className="prev">
        <img src={prev} alt="prev"/>
        <span>Prev</span>
      </a>
      {/* {totalPage > PAGINATION_SHOW_FIRST_AND_LAST_PAGES_LIMIT
        ? renderFirstAndLastPageNumbers()
        : renderPageNumbers()} */}
      <a className="next">
      <img src={next} alt="next"/>
        <span>Next</span>
        
      </a>
    </div>
  );
};
