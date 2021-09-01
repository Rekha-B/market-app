import { COMPANIES_URL, PRODUCTS_URL } from '../config'
import axios from "axios";

export const getApiProducts = async () => {
  try {
    const response = await axios.get(`${PRODUCTS_URL}`);
    if (response.data) {
        return {
          products: response.data
        } 
      }
      return null;
  } catch {
    return null;
  }
};

export const getApiCompanies = async() => {
  try {
    const response = await axios.get(`${COMPANIES_URL}`);

    if (response && response.data) {
      return response.data;
    }
    return null;
  } catch {
    return null;
  }
};