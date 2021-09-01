import { getApiProducts } from "../apis/index";

export const productsActionTypes = {
  GET_PRODUCTS_SUCCESS: 'GET_PRODUCTS_SUCCESS',
  GET_PRODUCTS_ERROR: 'GET_PRODUCTS_ERROR',
  GET_FILTERED_PRODUCTS_BY_TYPE: 'GET_FILTERED_PRODUCTS_BY_TYPE',
  GET_FILTERED_PRODUCTS_BY_PRICE: 'GET_FILTERED_PRODUCTS_BY_PRICE'
}

export const getProducts = () => async (dispatch) => {
  const res = await getApiProducts();
  if (res) {
    dispatch({ type: productsActionTypes.GET_PRODUCTS_SUCCESS, payload: { ...res}});
  } else {
    dispatch({ type: productsActionTypes.GET_PRODUCTS_ERROR, payload: null })
  }
};

export const getFilteredProducts = (type) => async(dispatch) => {
  console.log("getFilteredproductsCalled in  ",type);
  dispatch({ type : productsActionTypes.GET_FILTERED_PRODUCTS_BY_TYPE , payload : type })
}