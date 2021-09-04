import { useState } from 'react';
import { getProducts, productsActionTypes } from '../actions/products.actions';
import { useDispatch, useSelector } from 'react-redux';
const transformData = (data, type, id, selectedSortType) => {
  console.log(data, selectedSortType);
  if (type === 'checkbox' && id === 'brands') {
    return data.map((value) => ({ name: value.name, slug : value.slug,  id }));
  }
  if (type === 'radio' && id === 'price') {
    return data.map((value) => ({ name: value.name, id : value.id })) 
  }
  return data.map((value) => ({ name: value, value , id}));
};

export const useFilterHook = (data, type, id) => {
  const {  selectedSortType } = useSelector((state) => state.productsReducer);
  console.log('inside use filter hook', selectedSortType);
  const dispatch = useDispatch();
  const transformedData = transformData(data, type, id, selectedSortType);
  const [list, setList] = useState(transformedData);
  const [currentValue, setCurrentValue] = useState(transformedData[0].value);
  const [searchValue, setSearchValue] = useState('');
  const handleSearchChange = event => {
    const { value } = event.target;
    const updatedList = transformedData.filter(item =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setSearchValue(value);
    setList(updatedList);
  };

  const handLeCheckboxChange = (name, checked, id) => {
    console.log('list : ', list, id);
    const updatedList = list.map(item => {
      if (item.name === name) {
        return { ...item, checked: checked };
      }
      return item;
    });
    console.log("In checkbox ", updatedList,id, typeof(id),  typeof('brands'), id === 'brands');
    let selectedData = updatedList.filter((data) => data.checked === true).map((item) => (id === "brands" ? item.slug : item.name));
    let dispatchType = id === 'brands' ? productsActionTypes.GET_PRODUCTS_BY_BRANDS : productsActionTypes.GET_PRODUCTS_BY_TAGS;
    console.log('dispatch type : ', dispatchType);
    dispatch({ type: dispatchType, payload :  { data : selectedData, datatype : id}})
    setList(updatedList);
  };

  const handleRadioChange = (name, checked, id) => {
    setCurrentValue(name);
    console.log("Handle radio change", "name :", name, 'id', id);
    dispatch({ type : productsActionTypes.GET_SORTED_PRODUCTS, payload : { sortType : id}})
  };

  const handlers = {
    checkbox: handLeCheckboxChange,
    radio: handleRadioChange
  };

  const handleChange = (event) => {
    console.log(event.target);
   const { name, type, checked, id } = event.target;
   console.log("handle change :", name, type, checked, id);
    handlers[type](name, checked, id);
  };

  console.log('list :', list);
  return { list, handleChange, currentValue, handleSearchChange, searchValue };
};
