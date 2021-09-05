import { JSON_API } from "../config";
import axios from "axios";

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
