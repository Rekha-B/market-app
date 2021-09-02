import { COMPANIES_URL } from "../config";

export const cartActionTypes = {
    ADD_CART : 'ADD_CART',
    REMOVE_CART : 'REMOVE_CART'
  };

export const addToCart = (id, name, price) => dispatch => {
   dispatch({ type : cartActionTypes.ADD_CART , payload : {id, name, price}});
}


export const removeFromCart = (id) => dispatch => {
    dispatch({ type : cartActionTypes.REMOVE_CART , payload : {id}});
 }