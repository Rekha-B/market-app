import { getFilteredProducts, productsActionTypes } from "../actions/products.actions";

 const initialState = {
    products: [],
    types : [],
    copyProducts : [],
    price:[
      {'name':'Price low to high', 'id' : 'low'},
      {'name':'Price high to low', 'id' : 'high'},
      {'name':'New to old', 'id' : 'new'},
      {'name':'Old to new', 'id' : 'old'},
    ]
  }

export const productsReducer =  (state = initialState, action) => {
  switch (action.type){
        case productsActionTypes.GET_PRODUCTS_SUCCESS: return { ...state, 
                                                                products: action.payload.products, 
                                                                copyProducts : action.payload.products,
                                                                types: [...new Set(action.payload.products.map(({ itemType }) => itemType))],
                                                                price : state.price
                                                              };
        case productsActionTypes.GET_PRODUCTS_ERROR: return { ...state, products: []};
        case productsActionTypes.GET_FILTERED_PRODUCTS_BY_TYPE : return {...state, products: state.copyProducts.filter(product => product.itemType === action.payload)};
        case productsActionTypes.GET_FILTERED_PRODUCTS_BY_PRICE: return getFilteredProductsByPrice(state, action);
        default: return state;
      }
}

const getFilteredProductsByPrice = (state, action) => {
   console.log(state, action, "filter by price");
}