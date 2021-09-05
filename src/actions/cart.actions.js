export const cartActionTypes = {
    ADD_CART : 'ADD_CART',
    REMOVE_CART : 'REMOVE_CART'
  };

/***
 * Action for adding products to cart
 */
export const addToCart = (id, name, price) => dispatch => {
   dispatch({ type : cartActionTypes.ADD_CART , payload : {id, name, price}});
}

/***
 * Action for removing products from  cart
 */
export const removeFromCart = (id) => dispatch => {
    dispatch({ type : cartActionTypes.REMOVE_CART , payload : {id}});
 }