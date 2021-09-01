import { getApiProducts } from "../apis/index";

export const productsActionTypes = {
  GET_PRODUCTS_SUCCESS: 'GET_PRODUCTS_SUCCESS',
  GET_PRODUCTS_ERROR: 'GET_PRODUCTS_ERROR'
}

export const getProducts = () => async (dispatch) => {
  const res = await getApiProducts();
  if (res) {
    dispatch({ type: productsActionTypes.GET_PRODUCTS_SUCCESS, payload: { ...res}});
  } else {
    dispatch({ type: productsActionTypes.GET_PRODUCTS_ERROR, payload: null })
  }
};