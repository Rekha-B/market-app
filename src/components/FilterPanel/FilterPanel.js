import React, { useContext } from 'react';
import FilterSection from '../FilterSection/filterSection';
import BrandContext from "../../contexts/brands.context";
import TagsContext from '../../contexts/tags.context';


const FilterPanel = () => {
  const brands = useContext(BrandContext);
  const tags = useContext(TagsContext);
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
      {brands && <FilterSection
        title="Brands"
        data={brands}
        type="checkbox"
        placeholder="Search brand"
        id="brands"
      /> }
     { tags &&  <FilterSection
        title="Tags"
        data={tags}
        type="checkbox"
        placeholder="Search tag"
        id="tags"
      /> }
    </section>
  );
};

export default FilterPanel;
