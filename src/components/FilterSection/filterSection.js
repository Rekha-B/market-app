import React, { Fragment, useEffect } from "react";
import "./filterSection.scss";
import { useDispatch, useSelector } from "react-redux";
import InputBox from "../../commons/InputBox/inputBox";
import { useFilterHook } from "../../utils/useFilterHook";
import { productsActionTypes } from "../../actions/products.actions";

const FilterSection = ({ title, data, type, placeholder, id }) => {
  const { list, currentValue, handleChange, searchValue, handleSearchChange } =
    useFilterHook(data, type, id);
  const dispatch = useDispatch();
  const { totalPage } = useSelector((state) => state.productsReducer);
  
  useEffect(() => {
     dispatch({ type : productsActionTypes.GET_SORTED_PRODUCTS})
  }, [totalPage]);

  const RadioGroup = () => {
    return (
      <ol>
        {list.map(({ name, value, checked, id }) => (
          <li key={name}>
            <label className="radio-custom">
             
              {name}
              <input
                  type="radio"
                  id={id}
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
        <ol style={{ marginTop: "19px", height: "140px", overflow: "auto" }} id="checkbox">
          {list.map(({ name, value, checked, slug, id }) => (
              <li key={name}>
                <label>
                  {name}
                  <input
                  id={id}
                  type="checkbox"
                  name={name}
                  checked={checked}
                  onChange={handleChange}
                />
                <span className="checkmark"></span>
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