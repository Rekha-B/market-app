import { PRODUCTS_URL } from '../config';
import * as types from '../constants/actionTypes';

export const getProducts = () => (dispatch) => {
  fetch(PRODUCTS_URL)
    .then((res) => res.json())
    .then(async(data) => {
      data = await derivedData(data);
      dispatch({ type: types.GET_PRODUCTS , payload: data });
    });
};

const derivedData = async (data) => {
  let brands = [...new Set(data.map(({ manufacturer }) => manufacturer))];
  brands.unshift('All');
  let types = [...new Set(data.map(({ itemType }) => itemType))];
  let tagsData = data.map(({ tags }) => tags);
  let tags = [...new Set(tagsData.reduce((acc, item) => acc.concat(...item) ,[]))];
  tags.unshift('All');
  return {
       brands,
       tags,
       types,
       products : data
   };
}