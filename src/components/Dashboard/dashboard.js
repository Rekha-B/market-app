import React from "react";
import "./dashboard.scss";
import FilterPanel from "../FilterPanel/FilterPanel";
import ProductsPanel from "../ProductsPanel/productsPanel";
const Dashboard = () => {
  return (
    <React.Fragment>
      <FilterPanel></FilterPanel>
      <ProductsPanel></ProductsPanel>
     {/*  <CartPanel></CartPanel> */}
    </React.Fragment>
  );
};

export default Dashboard;
