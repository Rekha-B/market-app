import React, { useEffect } from "react";
import "./dashboard.scss";
import FilterPanel from "../FilterPanel/FilterPanel";
import ProductsPanel from "../ProductsPanel/productsPanel";
import { getProducts } from "../../actions/products.actions";
const Dashboard = () => {

  useEffect(() => {
     const products = getProducts();
  },[]);

  return (
    <div id="container">
      <FilterPanel></FilterPanel>
      <ProductsPanel></ProductsPanel>
     {/*  <CartPanel></CartPanel> */}
    </div>
  );
};

export default Dashboard;
