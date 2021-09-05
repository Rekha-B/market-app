import { useSelector } from "react-redux";
import "./dashboard.scss";
import FilterPanel from "../FilterPanel/filterPanel";
import ProductsList from "../ProductsList/productsList";
import Cart from '../Cart/cart';

const Dashboard = () => {
  const cartItems = useSelector((state) => state.cartReducer.items);
  const { isLoading } = useSelector((state) => state.productsReducer);

  return (
    <>
    { !isLoading &&
    (<div id="container">
      <FilterPanel />
      <ProductsList />
      { cartItems && cartItems.length > 0 && <Cart/> }
    </div>) }
    </>
  );
};

export default Dashboard;
