import React, { useEffect, useState, useCallback } from "react";
import "./dashboard.scss";
import FilterPanel from "../FilterPanel/filterPanel";
import ProductsPanel from "../ProductsPanel/productsPanel";
import { getProducts } from "../../actions/products.actions";
import { useSelector, useDispatch } from "react-redux";
import {
  BrandsContext,
  TagsContext,
  ProductTypesContext,
} from "../../contexts/index";

import "./dashboard.scss";

const Dashboard = () => {
  const [selectedType, setSelectedType] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const dispatch = useDispatch();

 const getFilteredProducts = ( products, selectedType) => products.filter(product => product.itemType === selectedType);
  
  const products = useSelector((state) => state.productsReducer.data);
  
  const fetchProducts = useCallback(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    if (products && products.types && products.products.length > 0) {
        setSelectedType(products.types[0])
    }
  }, [products]);

  const handleSelectedType = (selected) => {
    setSelectedType(selected);
    getFilteredProducts(products.products, selected);
  }

  return (
    <BrandsContext.Provider value={products.brands}>
      <TagsContext.Provider value={products.tags}>
        <ProductTypesContext.Provider value={products.types}>
          {products && products.products && products.products.length > 0 ? (
            <div id="container">
              <FilterPanel></FilterPanel>
              <ProductsPanel products={getFilteredProducts(products.products, selectedType)} type={selectedType} handleSelectedType={handleSelectedType}></ProductsPanel>
              {/*  <CartPanel></CartPanel> */}
            </div>
          ) : (
            <div className="divLoader">
              <svg
                className="svgLoader"
                viewBox="0 0 100 100"
                width="10em"
                height="10em"
              >
                <path
                  ng-attr-d="{{config.pathCmd}}"
                  ng-attr-fill="{{config.color}}"
                  stroke="none"
                  d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50"
                  fill="#51CACC"
                  transform="rotate(179.719 50 51)"
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    calcMode="linear"
                    values="0 50 51;360 50 51"
                    keyTimes="0;1"
                    dur="1s"
                    begin="0s"
                    repeatCount="indefinite"
                  ></animateTransform>
                </path>
              </svg>
            </div>
          )}
        </ProductTypesContext.Provider>
      </TagsContext.Provider>
    </BrandsContext.Provider>
  );
};

export default Dashboard;
