import { companyActionTypes } from "../actions/companies.actions";

const initialState = {
  data: []
}
export const companyReducer = (state = initialState, action) => {
  switch (action.type){
    case companyActionTypes.GET_COMPANIES_SUCCESS: return { ...state,  data: action.payload };
    case companyActionTypes.GET_COMPANIES_ERROR: return { ...state,  data: []};
    default: return state;
  }
};