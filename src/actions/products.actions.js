import { PRODUCTS_URL } from '../config';
import * as types from '../constants/actionTypes';

export const getProducts = () => (dispatch) => {
    console.log('inside products actions');
  fetch(PRODUCTS_URL)
    .then((res) => res.json())
    .then(async(data) => {
      data = await derivedData(data);
      console.log('data : ', data);
      dispatch({ type: types.GET_PRODUCTS , payload: data });
    });
};

const derivedData = async (data) => {
   const brands = new Set([...data.filter(manufacturer => !brands.includes(manufacturer))]);
   const types = new Set([...data.filter(itemType => !types.includes(itemType))]);
   const tags = new Set([...data.filter(tags => [...tags])]);
   return {
       brands,
       tags,
       types
   };
}