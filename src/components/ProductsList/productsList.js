import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductItem from '../Product/product';
import ProductTypes from '../ProductTypes/productType';
import './productsList.scss';
import { getFilteredProducts } from "../../actions/products.actions";

const ProductsList = () => {
  const products = useSelector((state) => state.productsReducer.products);
  console.log("products in list : ", products);
  const types = useSelector((state) => state.productsReducer.types);;
  const [selectedType, setSelectedType] = useState(types ? types[0] : '');
  const dispatch = useDispatch();

  useEffect(() => {
    setSelectedType(selectedType !== undefined ? selectedType : types[0]);
  },[types]);

  const handleSelectedType = (type) => {
    setSelectedType(type);
    dispatch(getFilteredProducts(type));
  }
  
  return (
    <section id="products">
       <h1>Products</h1>
       <ProductTypes  types={types} selectedType={selectedType} handleSelectedType={handleSelectedType}/>
       <div id="products-list">
       {
            products.map(product => (
               <ProductItem product={product} />
            ))
        }
      </div>
    </section>
 )
}

export default ProductsList;