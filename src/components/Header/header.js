import { useSelector} from 'react-redux';
import "./header.scss";
import logo from "../../assets/images/logo.svg";
import basketIcon from "../../assets/images/basket.svg";
import Price from '../Price/price';


const Header = () => {
    const cartItems = useSelector((state) => state.cartReducer.items);
    const calculateTotal = () => cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  
  return (
    <header>
      <img src={logo} alt="logo" />
      <div id="CartCount">
        <img src={basketIcon} alt="basket-icon" />
        <Price price={calculateTotal()} />
      </div>
    </header>
  );
};

export default Header;
