import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './components/Header/header';
import Dashboard from './components/Dashboard/dashboard';
import { getCompanies } from "./actions/companies.actions.js";
import { getProducts, getProductsPagination } from "./actions/products.actions.js";
import { PRODUCT_PAGE_LIMIT, PRODUCT_PAGE_NUMBER } from "./constants";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCompanies());
    dispatch(getProductsPagination(PRODUCT_PAGE_NUMBER, PRODUCT_PAGE_LIMIT));
  },[]);

  return (
    <div className="App">
      <Header/>
      <Dashboard/>
    </div>
  );
}

export default App;
