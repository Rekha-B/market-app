import React , { useState} from 'react';
import './productsPanel.scss';
import ProductTypes from '../ProductTypes/productType';
import ProductsList from '../ProductsList/productsList';

const ProductsPanel = ({ products }) => {
   const [ selectedType, setSelectedType ] = useState(products[0].itemType);

   return (
      <section id="products">
         <h1>Products</h1>
         <ProductTypes selectedType={selectedType} />
         <ProductsList  products={products} />
      </section>
   )
  
}

export default ProductsPanel;