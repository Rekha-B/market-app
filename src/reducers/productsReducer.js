import * as types from '../constants/actionTypes';
 const initialState = {
    data : {}
 }

export const productsReducer =  (state = initialState, action) => {
    switch(action.type){
        case types.GET_PRODUCTS:
            console.log('Inside Reducer : ', action.payload)
            return {
                ...state,
                data: action.payload,
            }
        default:
                return state;
    }  
}
