import React from "react";
import { CURRENCY_SYMBOL } from "../../constants";
import './product.scss';

const Product = ({ product }) => {
  const { name, price } = product;
  return (
    <div className="product">
      <div className="item-image">
        <div></div>
      </div>
      <p className="item-price">{CURRENCY_SYMBOL} {price}</p>
      <p className="item-name">{name}</p>
      <button>Add</button>
    </div>
  );
};

export default Product;
