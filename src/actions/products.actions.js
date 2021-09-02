import { getApiProducts, getApiProductsFiltered } from "../apis/index";

export const productsActionTypes = {
  GET_PRODUCTS_SUCCESS: "GET_PRODUCTS_SUCCESS",
  GET_PRODUCTS_ERROR: "GET_PRODUCTS_ERROR",
  GET_FILTERED_PRODUCTS_BY_TYPE: "GET_FILTERED_PRODUCTS_BY_TYPE",
  GET_FILTERED_PRODUCTS_BY_PRICE: "GET_FILTERED_PRODUCTS_BY_PRICE",
  GET_PRODUCTS_BY_PAGE: "GET_PRODUCTS_BY_PAGE",
  GET_PRODUCTS_FILTERED_SUCCESS: 'GET_PRODUCTS_FILTERED_SUCCESS',
  GET_PRODUCTS_FILTERED_ERROR: 'GET_PRODUCTS_FILTERED_ERROR'
};

export const getProducts = (page) => async (dispatch) => {
  const res = await getApiProducts();
  if (res) {
    dispatch({
      type: productsActionTypes.GET_PRODUCTS_SUCCESS,
      payload: { ...res , activePage : page},
    });
  } else {
    dispatch({ type: productsActionTypes.GET_PRODUCTS_ERROR, payload: null });
  }
};

export const getProductsPagination = (page, limit) => async (dispatch) => {
  const res = await getApiProductsFiltered(page, limit);
  if (res) {
    dispatch({
      type: productsActionTypes.GET_PRODUCTS_FILTERED_SUCCESS,
      payload: { ...res },
    });
  } else {
    dispatch({
      type: productsActionTypes.GET_PRODUCTS_FILTERED_ERROR,
      payload: null,
    });
  }
};

export const getFilteredProducts = (type) => async (dispatch) => {
  dispatch({
    type: productsActionTypes.GET_FILTERED_PRODUCTS_BY_TYPE,
    payload: type,
  });
};
