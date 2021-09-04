import { getApiProducts, getApiCompanies } from "../apis/index";

export const productsActionTypes = {
  GET_PRODUCTS_SUCCESS: "GET_PRODUCTS_SUCCESS",
  GET_PRODUCTS_ERROR: "GET_PRODUCTS_ERROR",
  GET_FILTERED_PRODUCTS_BY_TYPE: "GET_FILTERED_PRODUCTS_BY_TYPE",
  GET_FILTERED_PRODUCTS_BY_PRICE: "GET_FILTERED_PRODUCTS_BY_PRICE",
  GET_PRODUCTS_BY_PAGE: "GET_PRODUCTS_BY_PAGE",
  GET_PRODUCTS_FILTERED_SUCCESS: 'GET_PRODUCTS_FILTERED_SUCCESS',
  GET_PRODUCTS_FILTERED_ERROR: 'GET_PRODUCTS_FILTERED_ERROR',
  GET_PRODUCTS_BY_OPTIONS : 'GET_PRODUCTS_BY_OPTIONS',
  GET_SORTED_PRODUCTS : 'GET_SORTED_PRODUCTS',
  GET_FILTERED_PRODUCTS_BY_PAGE : 'GET_FILTERED_PRODUCTS_BY_PAGE',
  GET_PRODUCTS_BY_BRANDS : 'GET_PRODUCTS_BY_BRANDS',
  GET_PRODUCTS_BY_TAGS : 'GET_PRODUCTS_BY_TAGS'
};

export const companyActionTypes = {
  GET_COMPANIES_SUCCESS: 'GET_COMPANIES_SUCCESS',
  GET_COMPANIES_ERROR: 'GET_COMPANIES_ERROR'
}


export const getCompanies = () => async (dispatch) => {
  const res = await getApiCompanies();
  if (res) {
    dispatch({ type: companyActionTypes.GET_COMPANIES_SUCCESS, payload: res });
  } else {
    dispatch({ type: companyActionTypes.GET_COMPANIES_ERROR, payload: null })
  }
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

