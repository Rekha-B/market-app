import { combineReducers } from 'redux'
import { cartReducer }  from './cartReducer';
import { productsReducer } from './productsReducer';
import { companyReducer } from './companiesReducer';
export default combineReducers({
    cartReducer,
    productsReducer,
    companyReducer
})