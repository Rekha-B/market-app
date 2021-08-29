import React, { useEffect } from "react";
import "./dashboard.scss";
import FilterPanel from "../FilterPanel/FilterPanel";
import ProductsPanel from "../ProductsPanel/productsPanel";
import { getProducts } from "../../actions/products.actions";
import { useSelector, useDispatch} from"react-redux";

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const products = useSelector(state => state.productsReducer.data);
  console.log("Dashboard : ",products);
  return (
    <div id="container">
      <FilterPanel></FilterPanel>
      <ProductsPanel></ProductsPanel>
     {/*  <CartPanel></CartPanel> */}
    </div>
  );
};

export default Dashboard;