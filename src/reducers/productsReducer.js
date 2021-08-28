const initialState = {
    products:[],
    tags : [],
    brands : []
 }

export default function (state = initialState, action){
    switch(action.type){
        case GET_PRODUCTS:
            return {
                ...state,
                products: payload,
            }
        default:
                return state;
    }  
}