import { productsActionTypes } from "../actions/products.actions";

 const initialState = {
    products: [],
    appliedBrands : [],
    appliedTags : []
  }

export const productsReducer =  (state = initialState, action) => {
    switch (action.type){
        case productsActionTypes.GET_PRODUCTS_SUCCESS: return { ...state, products: action.payload.products};
        case productsActionTypes.GET_PRODUCTS_ERROR: return { ...state, products: []};
        default: return state;
      }
}
