import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";
import "./pagination.scss";
import prev from "../../assets/images/prev.svg";
import next from "../../assets/images/next.svg";
import {  productsActionTypes } from "../../actions/products.actions";
import { PAGINATION_SHOW_PAGES, PAGINATION_MIN_PAGE_LIMIT } from "../../constants";

export const Pagination = () => {
  const { totalPage, activePage } = useSelector((state) => state.productsReducer);
  const dispatch = useDispatch();

  /**
   * Handle Previous Click Event
   */
  const handlePrevClick = () => {
    if (activePage > 1) {
      dispatch({ type : productsActionTypes.GET_FILTERED_PRODUCTS_BY_PAGE, payload : { page : parseInt(activePage) - 1}});
    }
  };

  /**
   * Handle Next Click Event
   */
  const handleNextClick = () => {
    if (activePage < totalPage) {
      dispatch({ type : productsActionTypes.GET_FILTERED_PRODUCTS_BY_PAGE, payload : { page : parseInt(activePage) + 1}})
    }
  };

  /**
   * Handle Page Number Change Event
   * @param {*} event
   */
  const handlePageNumberClick = (event) => {
    const pageNumber = event.target.id;
    dispatch({ type : productsActionTypes.GET_FILTERED_PRODUCTS_BY_PAGE, payload : { page : pageNumber}});
  };

  const renderPageNumber = (index) => {
    const classname = classNames({ active: Number(activePage) === index });
    return (
      <a
        onClick={handlePageNumberClick}
        id={index}
        className={`${classname} flex`}
        key={`page_${index}`}
      >
        {index}
      </a>
    );
  };

  /**
   * Render Page Numbers in pagination
   */
  const renderPageNumbers = () => {
      const pageNumbers = [];
    for (let index = 1; index <= PAGINATION_SHOW_PAGES; index++) {
        pageNumbers.push(renderPageNumber(index));
      }
      pageNumbers.push(<span className="dots">...</span>);
      for (
        let index = totalPage - PAGINATION_SHOW_PAGES + 1;
        index <= totalPage;
        index++
      ) {
        pageNumbers.push(renderPageNumber(index));
      }
      return pageNumbers;
    }

  const renderPages = () => {
     const pageNumbers = [];
     for(let index = 1;index <= totalPage; index++){
      pageNumbers.push(renderPageNumber(index));
     }
     return pageNumbers;
  }

  return (
    <div className="pagination">
     {totalPage !== 0 && <a className="prev" onClick={handlePrevClick}>
        <img src={prev} alt="prev" />
        <span>Prev</span>
      </a>}
      { totalPage > PAGINATION_MIN_PAGE_LIMIT ? renderPageNumbers() : renderPages() }
      { totalPage !== 0 && <a className="next" onClick={handleNextClick}>
        <span>Next</span>
        <img src={next} alt="next" />
      </a>}
    </div>
  );
};
