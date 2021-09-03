import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import './productsList.scss';
import ProductItem from '../Product/product';
import ProductTypes from '../ProductTypes/productType';
import { productsActionTypes } from "../../actions/products.actions";
import { Pagination } from '../Pagination/pagination';

const ProductsList = () => {
  const { products, types, selectedType, activePage, totalPage } = useSelector((state) => state.productsReducer);
  console.log("inside product list:", products, types, selectedType, totalPage);
  const [selectedProductType, setSelectedProductType] = useState(selectedType);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type : productsActionTypes.GET_FILTERED_PRODUCTS_BY_TYPE})
  },[]);

  const handleSelectedType = (type) => {
    console.log('selected Type : ', type);
    setSelectedProductType(type);
    dispatch({ type : productsActionTypes.GET_FILTERED_PRODUCTS_BY_TYPE, payload : { type : type}})
    //dispatch(getProducts(activePage, type));
  }
  
  return (
    <section id="products">
       <h1>Products</h1>
       <ProductTypes  types={types} selectedType={selectedProductType} handleSelectedType={handleSelectedType}/>
       <div id="products-list">
       {
            products.map(product => (
               <ProductItem product={product} />
            ))
        }
      </div>
      <Pagination />
    </section>
 )
}

export default ProductsList;