import { useDispatch, useSelector } from "react-redux";
import "./cart.scss";
import Price from '../Price/price';
import { addToCart, removeFromCart} from "../../actions/cart.actions";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartReducer.items);
  const dispatch = useDispatch();
  const handleIncreaseQuantity = (id, name, price) => dispatch(addToCart(id, name, price));
  const handleDecreaseQuantity = (id) => dispatch(removeFromCart(id));
  const calculateTotal = () => cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <aside>
      <div className="cart">
        {cartItems.map((item, index) => {
        return (
          <div id="cart-container">
            <div className="cart-item">
              <div className="item-container">
                <span className="item-name">{item.name}</span>
                <Price price={item.price} />
              </div>
              <div className="quantity-container">
                <span onClick={() => handleDecreaseQuantity(item.id)}>-</span>
                <span className="item-quantity">{item.quantity}</span>
                <span
                  onClick={() =>
                    handleIncreaseQuantity(item.id, item.name, item.price)
                  }
                >
                  +
                </span>
              </div>
            </div>
            <hr />
          </div>
        );
      })}
      <div className="total-price flex">
      <Price price={calculateTotal()} />
      </div>
      
      </div>
    </aside>
  );
};

export default Cart;
