import React from "react";
import "./dashboard.scss";
import FilterPanel from "../FilterPanel/filterPanel";
import ProductsList from "../ProductsList/productsList";
import { useSelector } from "react-redux";
import "./dashboard.scss";

const Dashboard = () => {
  const brands = useSelector((state) => state.companyReducer.data);

  return (
    <div id="container">
      <FilterPanel brands={brands}  />
      <ProductsList />
      {/* <CartPanel/> */}
    </div>
  );
};

export default Dashboard;
