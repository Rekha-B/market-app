const initialState = {
  cartTotal: 0
};
export const cartReducer = (state = initialState, action) => {
switch(action.type) {
  // case ADD_ONE:
  //   return {
  //     cartTotal: state.cartTotal + action.value
  //   };
  default:
    return state;
  }
}
