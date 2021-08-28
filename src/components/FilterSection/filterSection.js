import React, { Fragment } from 'react';
import InputBox from '../../commons/InputBox/inputBox';
import './filterSection.scss';

import { useFilterHook } from '../../utils/useFilterHook';
const FilterSection = ({ title, data, type }) => {
  const {
    list,
    currentValue,
    handleChange,
    searchValue,
    handleSearchChange
  } = useFilterHook(data, type);

  const RadioGroup = () => {
    return (
      <ol>
        {list.map(({ name, value }) => (
          <li>
            <label>
              <input
                type="radio"
                name={name}
                value={value}
                checked={value === currentValue}
                onChange={handleChange}
              />
              {name}
            </label>
          </li>
        ))}
      </ol>
    );
  };

  const CheckboxGroup = () => {
    return (
      <Fragment>
        <InputBox value={searchValue} onChange={handleSearchChange} />
        <ol>
          {list.map(({ name, checked }) => (
            <li>
              <label>
                <input
                  type="checkbox"
                  name={name}
                  checked={checked}
                  onChange={handleChange}
                />
                {name}
              </label>
            </li>
          ))}
        </ol>
      </Fragment>
    );
  };

  const renderList = () => {
    const lists = {
      radio: RadioGroup(data, handleChange),
      checkbox: CheckboxGroup(data, handleChange)
    };
    return lists[type];
  };

  return (
    <section>
      <h2>{title}</h2>
      <div className="card">{renderList()}</div>
    </section>
  );
};

export default FilterSection;
