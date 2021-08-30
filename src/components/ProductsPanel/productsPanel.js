import './productsPanel.scss';
import ProductTypes from '../ProductTypes/productType';
const ProductsPanel = () => {

   return (
      <section id="products">
         <h2>Products</h2>
         <ProductTypes />
      </section>
   )
  
}

export default ProductsPanel;