import React, { useEffect } from "react";
import "./dashboard.scss";
import FilterPanel from "../FilterPanel/filterPanel";
import ProductsPanel from "../ProductsPanel/productsPanel";
import { getProducts } from "../../actions/products.actions";
import { useSelector, useDispatch } from "react-redux";
import BrandContext from "../../contexts/brands.context";
import TagsContext from "../../contexts/tags.context";
import './dashboard.scss';

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const products = useSelector((state) => state.productsReducer.data);
  return (
    <BrandContext.Provider value={products && products.brands}>
      <TagsContext.Provider value={products && products.tags}>
        <div id="container">
          <FilterPanel></FilterPanel>
          <ProductsPanel></ProductsPanel>
          {/*  <CartPanel></CartPanel> */}
        </div>
      </TagsContext.Provider>
    </BrandContext.Provider>
  );
};

export default Dashboard;
