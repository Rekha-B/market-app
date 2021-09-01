import { useState } from 'react';

const transformData = (data, type) => {
  if (type === 'checkbox') {
    return data.map((value, index) => ({ name: value.name, checked: index === 0 }));
  }
  return data.map(value => ({ name: value, value }));
};

export const useFilterHook = (data, type) => {
  const transformedData = transformData(data, type);
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
  const handleRadioChange = name => {
    setCurrentValue(name);
  };

  const handlers = {
    checkbox: handLeCheckboxChange,
    radio: handleRadioChange
  };

  const handleChange = (event) => {
   const { name, type, checked } = event.target;
    handlers[type](name, checked);
  };
  return { list, handleChange, currentValue, handleSearchChange, searchValue };
};
