import { useState } from 'react';
import { getProducts, productsActionTypes } from '../actions/products.actions';
import { useDispatch, useSelector } from 'react-redux';
const transformData = (data, type, id, selectedPriceType) => {
  if (type === 'checkbox' && id === 'brands') {
    return data.map((value, index) => ({ name: value.name, slug : value.slug,  id }));
  }
  if (type === 'radio' && id === 'price') {
    return data.map((value, index) => ({ name: value.name, id : value.id , checked : value.id === selectedPriceType}));
  }
  return data.map((value, index) => ({ name: value, value , id}));
};

export const useFilterHook = (data, type, id) => {
  const { activePage, selectedType, selectedPriceType } = useSelector((state) => state.productsReducer);
  console.log('inside use filter hook', selectedPriceType);
  const dispatch = useDispatch();
  const transformedData = transformData(data, type, id, selectedPriceType);
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
    console.log("In checkbox ", updatedList,id);
    dispatch({ type: productsActionTypes.GET_PRODUCTS_BY_OPTIONS, payload :  { data : updatedList, datatype : id}})
    setList(updatedList);
  };
  const handleRadioChange = (name, checked, id) => {
    setCurrentValue(name);
    console.log('name :', name, 'id', id);
   // dispatch(getProducts(activePage, selectedType, id));
  };

  const handlers = {
    checkbox: handLeCheckboxChange,
    radio: handleRadioChange
  };

  const handleChange = (event) => {
    console.log(event.target);
   const { name, type, checked, id } = event.target;
   console.log(name, type, checked, id);
    handlers[type](name, checked, id);
  };

  console.log('list :', list);
  return { list, handleChange, currentValue, handleSearchChange, searchValue };
};
