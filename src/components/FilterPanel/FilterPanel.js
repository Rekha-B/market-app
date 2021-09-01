import React from 'react';
import FilterSection from '../FilterSection/filterSection';

const FilterPanel = () => {

  
  return (
    <section className="filter-panel">
      <FilterSection
        title="Sorting"
        data={[
          'Price low to high',
          'Price high to low',
          'New to old',
          'Old to new'
        ]}
        type="radio"
        id="price"
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
        placeholder="Search brand"
        id="brands"
      /> 
      <FilterSection
        title="Tags"
        data={[
          'Price low to high',
          'Price high to low',
          'New to old',
          'Old to new'
        ]}
        type="checkbox"
        placeholder="Search tag"
        id="tags"
      /> 
    </section>
  );
};

export default FilterPanel;
