import React, { useEffect } from "react";
import "./dashboard.scss";
import FilterPanel from "../FilterPanel/filterPanel";
import ProductsPanel from "../ProductsPanel/productsPanel";
import { getProducts } from "../../actions/products.actions";
import { useSelector, useDispatch } from "react-redux";
import { BrandsContext, TagsContext, ProductTypesContext }  from "../../contexts/index";

import './dashboard.scss';

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const products = useSelector((state) => state.productsReducer.data);
  return (
    <BrandsContext.Provider value={products && products.brands}>
      <TagsContext.Provider value={products && products.tags}>
        <ProductTypesContext.Provider value={products && products.types}>
        <div id="container">
          <FilterPanel></FilterPanel>
          <ProductsPanel></ProductsPanel>
          {/*  <CartPanel></CartPanel> */}
        </div>
        </ProductTypesContext.Provider>
      </TagsContext.Provider>
    </BrandsContext.Provider>
  );
};

export default Dashboard;
