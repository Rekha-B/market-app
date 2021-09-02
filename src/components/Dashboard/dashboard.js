import { useSelector } from "react-redux";
import "./dashboard.scss";
import FilterPanel from "../FilterPanel/filterPanel";
import ProductsList from "../ProductsList/productsList";
import Cart from '../Cart/cart';

const Dashboard = () => {
  const brands = useSelector((state) => state.companyReducer.data);
  const cartItems = useSelector((state) => state.cartReducer.items);
  return (
    <div id="container">
      <FilterPanel brands={brands}  />
      <ProductsList />
      { cartItems && cartItems.length > 0 && <Cart/> }
    </div>
  );
};

export default Dashboard;
