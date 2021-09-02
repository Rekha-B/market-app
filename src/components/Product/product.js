import { useDispatch } from "react-redux";
import './product.scss';
import Price from '../Price/price';
import { addToCart } from "../../actions/cart.actions";

const Product = ({ product }) => {
  const { name, price } = product;
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    const { slug, name, price } = product;
    dispatch(addToCart(slug, name, price));
  };

  return (
    <div className="product">
      <div className="item-image">
        <div></div>
      </div>
      <Price price={price} />
      <p className="item-name">{name}</p>
      <button onClick={() => handleAddToCart(product)}>Add</button>
    </div>
  );
};

export default Product;
