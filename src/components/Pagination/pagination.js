import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";
import classNames from "classnames";
import './pagination.scss';
import prev from '../../assets/images/prev.svg';
import next from '../../assets/images/next.svg';
import { getProducts } from "../../actions/products.actions";
import { PAGINATION_SHOW_PAGES } from "../../constants";

export const Pagination = () => {
  const { totalPage, activePage } = useSelector((state) => state.productsReducer);
  console.log('total page :' , totalPage);
  const dispatch = useDispatch();

  /**
   * Handle Previous Click Event
   */
  const handlePrevClick = () => {
    if (activePage > 1) {
      dispatch(getProducts(activePage-1));
    }
  };

  /**
   * Handle Next Click Event
   */
  const handleNextClick = () => {
    if (activePage < totalPage) {
      dispatch(getProducts(activePage+1));
    }
  };

  /**
   * Handle Page Number Change Event
   * @param {*} event 
   */
  const handlePageNumberClick = (event) => {
    const pageNumber = event.target.id;
    dispatch(getProducts(pageNumber));
  }
 
  const renderPageNumber = (index) => {
    const classname = classNames({ active: Number(activePage) === index });
    return (<a onClick={handlePageNumberClick}  id={index} className={`${classname} flex`}  key={`page_${index}`}>{index}</a>);
  }

  /**
   * Render Page Numbers in pagination
   */
  const renderPageNumbers = useCallback(() => {
    console.log(totalPage, "inside render");
    let pageNumbers = [];
    for (let index = 1; index <= PAGINATION_SHOW_PAGES; index++) {
      pageNumbers.push(renderPageNumber(index));
    }
    pageNumbers.push(<span className="dots">...</span>);
    for (let index = totalPage - PAGINATION_SHOW_PAGES + 1; index <= totalPage; index++) {
      pageNumbers.push(renderPageNumber(index));
    }
   return pageNumbers
  }, [activePage]);

  
  return (
      <div className="pagination">
        <a className="prev" onClick={handlePrevClick}>
          <img src={prev} alt="prev"/>
          <span>Prev</span>
        </a>
          {totalPage > 0 && renderPageNumbers() }
        <a className="next" onClick={handleNextClick}>
        <span>Next</span>
          <img src={next} alt="next"/>
        </a>
    </div>
  )
};