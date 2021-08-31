import React from "react";
import ProductItem from '../Product/product';
import './productsList.scss';

const ProductsList = ({ products }) => {
   return (
      <div id="products-list">
        {
            products && products.map(product => {
                return <ProductItem product={product} />
            })
        }
      </div>
   )
}

export default ProductsList;