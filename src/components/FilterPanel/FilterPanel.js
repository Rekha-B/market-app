import { useSelector } from 'react-redux';
import FilterSection from '../FilterSection/filterSection';

const FilterPanel = () => {
  const { price, brands, tags } = useSelector((state) => state.productsReducer);
  console.log('Inside Filter Panel : ', tags);
 return (
    <section className="filter-panel">
      {price && price.length > 0 && <FilterSection
        title="Sorting"
        data={price}
        type="radio"
        id="price"
      /> }
      {/* {brands && brands.length > 0 && <FilterSection
        title="Brands"
        data={brands}
        type="checkbox"
        placeholder="Search brand"
        id="brands"
      /> }
      {tags && tags.length > 0 && <FilterSection
        title="Tags"
        data={tags}
        type="checkbox"
        placeholder="Search tag"
        id="tags"
      /> }  */}
    </section>
  );
};

export default FilterPanel;
