import React from 'react';
import './productsPanel.scss';
import ProductTypes from '../ProductTypes/productType';
import ProductsList from '../ProductsList/productsList';

const ProductsPanel = ({ products, handleSelectedType, type }) => {
   return (
      <section id="products">
         <h1>Products</h1>
         <ProductTypes  handleSelectedType={handleSelectedType} selectedType={type}/>
         <ProductsList  products={products} />
      </section>
   )
  
}

export default ProductsPanel;