import { getApiCompanies } from "../apis/index";

export const companyActionTypes = {
  GET_COMPANIES_SUCCESS: 'GET_COMPANIES_SUCCESS',
  GET_COMPANIES_ERROR: 'GET_COMPANIES_ERROR'
}


export const getCompanies = () => async (dispatch) => {
  const res = await getApiCompanies();
  res.unshift({ name : 'All'});
  if (res) {
    dispatch({ type: companyActionTypes.GET_COMPANIES_SUCCESS, payload: res });
  } else {
    dispatch({ type: companyActionTypes.GET_COMPANIES_ERROR, payload: null })
  }
};