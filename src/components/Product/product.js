import React from "react";
import './product.scss';

const Product = ({ product }) => {
  return (
    <div className="product">
      <div className="item-image">
        <div></div>
      </div>
      <p className="item-price">₺ {product.price}</p>
      <p className="item-name">{product.name}</p>
      <button>Add</button>
    </div>
  );
};

export default Product;
