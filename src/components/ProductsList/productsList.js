import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import './productsList.scss';
import ProductItem from '../Product/product';
import ProductTypes from '../ProductTypes/productType';
import { productsActionTypes } from "../../actions/products.actions";
import { Pagination } from '../Pagination/pagination';

const ProductsList = () => {
  const { products, types, selectedType } = useSelector((state) => state.productsReducer);
  const [selectedProductType, setSelectedProductType] = useState(selectedType);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type : productsActionTypes.GET_FILTERED_PRODUCTS_BY_TYPE})
  },[dispatch]);

  const handleSelectedType = (type) => {
    setSelectedProductType(type);
    dispatch({ type : productsActionTypes.GET_FILTERED_PRODUCTS_BY_TYPE, payload : { type : type}})
  }
  
  const onHandleClick = () => {
    alert("handle click");
    Andorid.showToast("Hello React");
  }
  return (
    <section id="products">
       <h1>Products</h1><button onClick={() => onHandleClick()}>Click</button>
       <ProductTypes  types={types} selectedType={selectedProductType} handleSelectedType={handleSelectedType}/>
       <div id="products-list">
       {
            products.length > 0  ? products.map(product => (
               <ProductItem key={product.slug} product={product} />
            )) : <span>No Products</span>
        }
      </div>
      <Pagination />
      
    </section>
 )
}

export default ProductsList;