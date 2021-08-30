import React, { Fragment, useContext } from "react";
import InputBox from "../../commons/InputBox/inputBox";
import "./filterSection.scss";
import tick_icon from "../../assets/images/tick_icon.svg";
import { useFilterHook } from "../../utils/useFilterHook";
import BrandContext from "../../contexts/brands.context";
const FilterSection = ({ title, data, type, placeholder, id }) => {
  const brands = useContext(BrandContext);
  const { list, currentValue, handleChange, searchValue, handleSearchChange } =
    useFilterHook(data, type);

  const RadioGroup = () => {
    return (
      <ol>
        {list.map(({ name, value, checked }) => (
          <li key={name}>
            <label className="radio-custom">
             
              {name}
              <input
                  type="radio"
                  name="radio"
                  value={value}
                  checked={checked}
                  onChange={handleChange}
                />
                <span className="checkmark" style={{ borderRadius : '17.5px'}}></span>
                
            </label>
          </li>
        ))}
      </ol>
    );
  };

  const CheckboxGroup = () => {
    return (
      <Fragment>
        <InputBox
          value={searchValue}
          onChange={handleSearchChange}
          placeholder={placeholder}
        />
        <ol style={{ marginTop: "19px", height: "140px", overflow: "auto" }}>
          {list.map(({ name, value, checked }) => (
              <li key={name}>
                <label>
                  {name}
                  <input
                  type="checkbox"
                  name={name}
                  checked={checked}
                  onChange={handleChange}
                />
                <span className="checkmark"></span>
                  {/* <div className="checkbox">
                    <img src={tick_icon} alt="tick" onChange={handleChange} />
                  </div> */}
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
      checkbox: CheckboxGroup(data, handleChange),
    };
    return lists[type];
  };

  return (
    <section id="filter">
      <h2>{title}</h2>
      <div className={`card ${type === "checkbox" ? "checkboxStyle" : ""}`}>
        {renderList()}
      </div>
    </section>
  );
};

export default FilterSection;
//style={{ height : type === 'checkbox' ? '244px' : '184px'}}
