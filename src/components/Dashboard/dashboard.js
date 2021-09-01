import React, { useEffect, useState, useCallback } from "react";
import "./dashboard.scss";
import FilterPanel from "../FilterPanel/filterPanel";
import ProductsList from '../ProductsList/productsList';
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
//   const [selectedType, setSelectedType] = useState('');
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   const dispatch = useDispatch();

//  const getFilteredProducts = ( products, selectedType) => products.filter(product => product.itemType === selectedType);
  
//   const products = useSelector((state) => state.productsReducer.data);
  
//   const fetchProducts = useCallback(() => {
//     dispatch(getProducts());
//   }, [dispatch]);

//   useEffect(() => {
//     fetchProducts();
//   }, [fetchProducts]);

//   useEffect(() => {
//     if (products && products.types && products.products.length > 0) {
//         setSelectedType(products.types[0])
//     }
//   }, [products]);

//   const handleSelectedType = (selected) => {
//     setSelectedType(selected);
//     getFilteredProducts(products.products, selected);
//   }

  return (
    <div id="container">
      <FilterPanel />
       <ProductsList />
      {/* <CartPanel/> */}
     </div>
  );
};

export default Dashboard;
