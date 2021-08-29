import { PRODUCTS_URL } from '../config';
import * as types from '../constants/actionTypes';

export const getProducts = () => (dispatch) => {
    console.log('inside products actions');
  fetch(PRODUCTS_URL)
    .then((res) => res.json())
    .then(async(data) => {
      data = await derivedData(data);
      console.log('Retrieve Products: ', data);
      dispatch({ type: types.GET_PRODUCTS , payload: data });
    });
};

const derivedData = async (data) => {
  let brands = [...new Set(data.map(({ manufacturer }) => manufacturer))];
  let types = [...new Set(data.map(({ itemType }) => itemType))];
  let tagsData = data.map(({ tags }) => tags);
  let tags = [...new Set(tagsData.reduce((acc, item) => acc.concat(...item) ,[]))];
  return {
       brands,
       tags,
       types,
       products : data
   };
}