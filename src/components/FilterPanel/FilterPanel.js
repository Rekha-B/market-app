import React, { Fragment } from 'react';
import FilterSection from '../FilterSection/filterSection';

const FilterPanel = () => {
  return (
    <Fragment>
      <FilterSection
        title="Sorting"
        data={[
          'Price low to high',
          'Price high to low',
          'New to old',
          'Old to new'
        ]}
        type="radio"
      />
      <FilterSection
        title="Brands"
        data={[
          'Price low to high',
          'Price high to low',
          'New to old',
          'Old to new'
        ]}
        type="checkbox"
      />
    </Fragment>
  );
};

export default FilterPanel;
