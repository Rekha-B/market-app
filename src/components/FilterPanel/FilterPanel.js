import React from 'react';
import { useSelector } from 'react-redux';
import FilterSection from '../FilterSection/filterSection';

const FilterPanel = ({ brands }) => {
  const products = useSelector((state) => state.productsReducer.data);
  console.log(products);
  const tagsData =
  products && products.length > 0 && products.map(({ tags }) => tags);
const tags = [
  ...new Set(
    tagsData && tagsData.reduce((acc, item) => acc.concat(...item), [])
  ),
];
  console.log("tags " , tags);
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
      {brands && brands.length > 0 && <FilterSection
        title="Brands"
        data={brands}
        type="checkbox"
        placeholder="Search brand"
        id="brands"
      /> }
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
