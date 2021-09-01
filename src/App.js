import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './components/Header/header';
import Dashboard from './components/Dashboard/dashboard';
import { getCompanies } from "./actions/companies.actions.js";
import { getProducts } from "./actions/products.actions.js";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
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
