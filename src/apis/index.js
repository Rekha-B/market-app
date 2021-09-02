import { COMPANIES_URL, PRODUCTS_URL } from "../config";
import axios from "axios";
import { PRODUCT_PAGE_LIMIT } from "../constants";

export const getApiProducts = async () => {
  try {
    const response = await axios.get(`${PRODUCTS_URL}`);
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

export const getApiProductsFiltered = async (page, limit) => {
  try {
    const response = await axios.get(`${PRODUCTS_URL}`, {
      params: { _page: page, _limit: limit },
    });
    if (response.data) {
      return {
        products: response.data,
        totalCount: response.headers["x-total-count"],
        totalPage: Math.ceil(
          response.headers["x-total-count"] / PRODUCT_PAGE_LIMIT
        ),
      };
    }
    return null;
  } catch {
    return null;
  }
};

export const getApiCompanies = async () => {
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
