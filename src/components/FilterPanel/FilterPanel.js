import { useSelector } from 'react-redux';
import FilterSection from '../FilterSection/filterSection';

const FilterPanel = () => {
  const price = useSelector((state) => state.productsReducer.price);
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
      /> } */}
    </section>
  );
};

export default FilterPanel;
