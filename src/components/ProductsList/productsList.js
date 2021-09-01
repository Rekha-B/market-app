import React from "react";
import { useSelector } from "react-redux";
import ProductItem from '../Product/product';
import ProductTypes from '../ProductTypes/productType';
import './productsList.scss';

const ProductsList = () => {
  const products = useSelector((state) => state.productsReducer.products);
  const types = [...new Set(products.map(({ itemType }) => itemType))];
  return (
    <section id="products">
       <h1>Products</h1>
       <ProductTypes  types={types}/>
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