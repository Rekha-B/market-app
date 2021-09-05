import { JSON_API } from "../constants";
import axios from "axios";

/***
 * Action to retrieve products from json server
 */
export const getApiProducts = async () => {
  try {
    const response = await axios.get(`${JSON_API}/products`);
    if (response.data) {
      return {
        products: response.data,
      };
    }
    return null;
  } catch {
    return null;
  }
};

/***
 * Action to retrieve brands from json server
 */
export const getApiCompanies = async () => {
  try {
    const response = await axios.get(`${JSON_API}/companies`);

    if (response && response.data) {
      return response.data;
    }
    return null;
  } catch {
    return null;
  }
};
