import {  cartActionTypes } from "../actions/cart.actions";

const initialState = {
  items: [],
};
export const cartReducer = (state = initialState, action) => {
  
  const productIndex = state.items.findIndex(item => item.id === action.payload.id);
  const newList = [...state.items];

  switch (action.type) {
    case cartActionTypes.ADD_CART : 
    if(productIndex > -1) {
      newList[productIndex] = { ...newList[productIndex], quantity : newList[productIndex].quantity + 1};
    }
    else {
    newList.push({
      id : action.payload.id,
      name : action.payload.name,
      price : action.payload.price,
      quantity : 1
    });
  }
  return { ...state, items : newList } 

  case cartActionTypes.REMOVE_CART : newList[productIndex] = { ...newList[productIndex], quantity : newList[productIndex].quantity - 1};
    return { ...state, items : newList } 

  default:
      return state;
  }
};
