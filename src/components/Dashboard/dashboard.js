import React, { useEffect } from "react";
import "./dashboard.scss";
import FilterPanel from "../FilterPanel/filterPanel";
import ProductsPanel from "../ProductsPanel/productsPanel";
import { getProducts } from "../../actions/products.actions";
import { useSelector, useDispatch } from "react-redux";
import {
  BrandsContext,
  TagsContext,
  ProductTypesContext,
} from "../../contexts/index";

import "./dashboard.scss";

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const products = useSelector((state) => state.productsReducer.data);
  console.log(products);
  return (
    <BrandsContext.Provider value={products && products.brands}>
      <TagsContext.Provider value={products && products.tags}>
        <ProductTypesContext.Provider value={products && products.types}>
          {products && products.products && products.products.length > 0 ? (
            <div id="container">
              <FilterPanel></FilterPanel>
              <ProductsPanel products={products.products}></ProductsPanel>
              {/*  <CartPanel></CartPanel> */}
            </div>
          ) : (
            <div class="divLoader">
              <svg
                class="svgLoader"
                viewBox="0 0 100 100"
                width="10em"
                height="10em"
              >
                <path
                  ng-attr-d="{{config.pathCmd}}"
                  ng-attr-fill="{{config.color}}"
                  stroke="none"
                  d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50"
                  fill="#51CACC"
                  transform="rotate(179.719 50 51)"
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    calcMode="linear"
                    values="0 50 51;360 50 51"
                    keyTimes="0;1"
                    dur="1s"
                    begin="0s"
                    repeatCount="indefinite"
                  ></animateTransform>
                </path>
              </svg>
            </div>
          )}
        </ProductTypesContext.Provider>
      </TagsContext.Provider>
    </BrandsContext.Provider>
  );
};

export default Dashboard;
