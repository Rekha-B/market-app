import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './components/Header/header';
import Dashboard from './components/Dashboard/dashboard';
import { getProducts, getCompanies } from "./actions/products.actions.js";
import { PRODUCT_PAGE_NUMBER } from "./constants";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts(PRODUCT_PAGE_NUMBER));
    dispatch(getCompanies());
  },[]);

  return (
    <div className="App">
      <Header/>
      <Dashboard/>
    </div>
  );
}

export default App;
