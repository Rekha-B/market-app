import { productsActionTypes } from "../actions/products.actions";
import { PRODUCT_PAGE_LIMIT } from "../constants";
const initialState = {
  products: [],
  types: [],
  copyProducts: [],
  totalPage: 0,
  activePage: 1,
  isLoading: true,
  totalCount: 0,
  price: [
    { name: "Price low to high", id: "low" },
    { name: "Price high to low", id: "high" },
    { name: "New to old", id: "new" },
    { name: "Old to new", id: "old" },
  ],
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case productsActionTypes.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: getProductsFilteredByPage(
          action.payload.products,
          action.payload.activePage
        ),
        copyProducts: action.payload.products,
        types: [
          ...new Set(action.payload.products.map(({ itemType }) => itemType)),
        ],
        price: state.price,
        totalCount: action.payload.products.length,
        totalPage: Math.ceil(action.payload.products.length / 16),
        activePage: action.payload.activePage,
      };
    case productsActionTypes.GET_PRODUCTS_ERROR:
      return { ...state, products: [] };
    case productsActionTypes.GET_FILTERED_PRODUCTS_BY_TYPE:
      return {
        ...state,
        products: state.copyProducts.filter(
          (product) => product.itemType === action.payload
        ),
      };
    case productsActionTypes.GET_FILTERED_PRODUCTS_BY_PRICE:
      return {
        ...state,
        products: getFilteredProductsByPrice(
          state.copyProducts,
          action,
          state.activePage
        ),
      };
    case productsActionTypes.GET_PRODUCTS_FILTERED_SUCCESS:
      return { ...state, products: action.payload.products };
    default:
      return state;
  }
};

/**
 * Sort Products by price and date added
 * @param {*} products 
 * @param {*} action 
 * @param {*} page 
 * @returns 
 */
const getFilteredProductsByPrice = (products, action, page) => {
  if (action.payload === "low") {
    products.sort((a, b) => a.price - b.price);
  } else if (action.payload === "high") {
    products.sort((a, b) => b.price - a.price);
  } else if (action.payload === "old") {
    products.sort((a, b) => new Date(a.added) - new Date(b.added));
  } else {
    products.sort((a, b) => new Date(b.added) - new Date(a.added));
  }
  let filteredProds = getProductsFilteredByPage(products, page);
  return filteredProds;
};
/**
 * Filter Products by page
 * @param {*} products 
 * @param {*} activePage 
 * @returns 
 */
const getProductsFilteredByPage = (products, activePage) => {
  console.log("page : ", products, activePage);
  let copyProducts = [...products];
  if (activePage === 1) return copyProducts.slice(0, PRODUCT_PAGE_LIMIT);
  return copyProducts.slice(
    activePage * PRODUCT_PAGE_LIMIT - PRODUCT_PAGE_LIMIT,
    activePage * PRODUCT_PAGE_LIMIT
  );
};
