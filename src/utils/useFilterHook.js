import { useState } from 'react';
import { productsActionTypes } from '../actions/products.actions';
import { useDispatch } from 'react-redux';
const transformData = (data, type, id) => {
  if (type === 'checkbox' && id === 'brands') {
    return data.map((value, index) => ({ name: value.name, checked: index === 0 }));
  }
  if (type === 'radio' && id === 'price') {
    return data.map((value, index) => ({ name: value.name, id : value.id}));
  }
  return data.map((value, index) => ({ name: value, value, checked: index === 0 }));
};

export const useFilterHook = (data, type, id) => {
  const dispatch = useDispatch();
  const transformedData = transformData(data, type, id);
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

  const handLeCheckboxChange = (name, checked) => {
    const updatedList = list.map(item => {
      if (item.name === name) {
        return { ...item, checked: checked };
      }
      return item;
    });
    setList(updatedList);
  };
  const handleRadioChange = (name, checked, id) => {
    setCurrentValue(name);
    console.log('name :', name, 'id', id);
    dispatch({ type : productsActionTypes.GET_FILTERED_PRODUCTS_BY_PRICE, payload : id})
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
