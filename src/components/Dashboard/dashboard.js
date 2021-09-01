import React, { useEffect, useState, useCallback } from "react";
import "./dashboard.scss";
import FilterPanel from "../FilterPanel/filterPanel";
import ProductsList from "../ProductsList/productsList";
import { useSelector, useDispatch } from "react-redux";
import "./dashboard.scss";
import Loader from "../Loader/loader";

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
  const products = useSelector((state) => state.productsReducer.data);
  const brands = useSelector((state) => state.companyReducer.data);
  const tagsData =
    products && products.length > 0 && products.map(({ tags }) => tags);
  const tags = [
    ...new Set(
      tagsData && tagsData.reduce((acc, item) => acc.concat(...item), [])
    ),
  ];
  return (
    <div id="container">
      <FilterPanel brands={brands}  />
      <ProductsList />
      {/* <CartPanel/> */}
    </div>
  );
};

export default Dashboard;
