import {
  getProducts,
  productsActionTypes,
  companyActionTypes,
} from "../actions/products.actions";
import { PRODUCT_PAGE_LIMIT } from "../constants";
const initialState = {
  products: [],
  types: [],
  initialProducts: [],
  totalPage: 0,
  activePage: 1,
  isLoading: true,
  totalCount: 0,
  tags: [],
  brands: [],
  price: [
    { name: "Price low to high", id: "low" },
    { name: "Price high to low", id: "high" },
    { name: "New to old", id: "new" },
    { name: "Old to new", id: "old" },
  ],
  selectedType: "",
  selectedPriceType: "low",
  selectedBrands: [],
  selectedTags : [],
  filteredProducts : []
};

export const productsReducer = (state = initialState, action) => {
  console.log("Products state in reducer before: ");
  switch (action.type) {
    case companyActionTypes.GET_COMPANIES_SUCCESS:
      console.log(action.payload, "in companies");
      return {
        ...state,
        brands: action.payload,
      };
    case productsActionTypes.GET_PRODUCTS_SUCCESS:
      console.log("Inside products reducer", state, action);
      let updatedState = {
        ...state,
        initialProducts: action.payload.products,
        types: [
          ...new Set(action.payload.products.map(({ itemType }) => itemType)),
        ],
        price: state.price,
        totalCount: action.payload.products.length,
        totalPage: Math.ceil(
          action.payload.products.length / PRODUCT_PAGE_LIMIT
        ),
        tags: [
          ...new Set(
            action.payload.products
              .map(({ tags }) => tags)
              .reduce((acc, item) => acc.concat(...item))
          ),
        ],
        selectedType: action.payload.products[0].itemType,
        // activePage: action.payload.activePage,
        // selectedPriceType : action.payload.selectedPriceType ? action.payload.selectedPriceType : state.selectedPriceType
      };
      const filteredProds = getFilteredProductsByFilterOptions(updatedState);
      console.log("updated state in reducer: ", updatedState);
      updatedState = {
        ...state,
        products: getProductsFilteredByPage(
          action.payload.products,
          action.payload.activePage
        ),
        totalPage: Math.ceil(action.payload.products.length / PRODUCT_PAGE_LIMIT),
         isLoading: false,
         types : updatedState.types,
         activePage: state.activePage,
         selectedType: updatedState.selectedType,
         initialProducts : updatedState.initialProducts
        // selectedPriceType: updatedState.selectedPriceType
      };
      console.log("updated state in reducer after", updatedState);
      return updatedState;
    case productsActionTypes.GET_PRODUCTS_ERROR:
      return { ...state, products: [] };
    case productsActionTypes.GET_FILTERED_PRODUCTS_BY_TYPE : 
          let filteredProductsByType = getProductsFilteredByProductType(state, action);
          return {
            ...state,
            products : getProductsFilteredByPage(
              filteredProductsByType,
              state.activePage
            ),
            filteredProducts : filteredProductsByType,
            totalPage : Math.ceil(filteredProductsByType.length / PRODUCT_PAGE_LIMIT),
            activePage : state.activePage
          }
    case productsActionTypes.GET_FILTERED_PRODUCTS_BY_PAGE : 
    console.log('inside GET_FILTERED_PRODUCTS_BY_PAGE', action);
        let filteredProductsByPage = getProductsFilteredByPage(state.filteredProducts, parseInt(action.payload.page));
        console.log('Filtered products by page : ', filteredProductsByPage);
        return {
          ...state,
          products : filteredProductsByPage,
          activePage : action.payload.page
        }
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
const getFilteredProductsByPrice = (products, type) => {
  console.log('Get products by price : ', products, type);
  let filteredProds = [...products];
  if (type === "low") {
    filteredProds.sort((a, b) => a.price - b.price);
  } else if (type === "high") {
    filteredProds.sort((a, b) => b.price - a.price);
  } else if (type=== "old") {
    filteredProds.sort((a, b) => new Date(a.added) - new Date(b.added));
  } else {
    filteredProds.sort((a, b) => new Date(b.added) - new Date(a.added));
  }
  return filteredProds;
};
/**
 * Filter Products by page
 * @param {*} products
 * @param {*} activePage
 * @returns
 */
const getProductsFilteredByPage = (products, activePage) => {
  console.log("Inside Filter products by page : ", products, activePage);
  let copyProducts = [...products];
  if (activePage === 1) return copyProducts.slice(0, PRODUCT_PAGE_LIMIT);
  return copyProducts.slice(
    activePage * PRODUCT_PAGE_LIMIT - PRODUCT_PAGE_LIMIT,
    activePage * PRODUCT_PAGE_LIMIT
  );
};

const getProductsFilteredByProductType = (state, action) => {
  console.log('Filter Products By Type', state, action);
  let productType = (action.payload && action.payload.type) ? action.payload.type : state.selectedType;
  console.log('product type :', productType, state.initialProducts);
  let filteredProductsByType = state.initialProducts.filter(product => product.itemType === productType);
  console.log('Filtered Products By Type', filteredProductsByType);
  return filteredProductsByType;
}
const getProductsByOptions = (products, action, page) => {
  let filteredProds = [];
  let checkedData = action.payload.data
    .filter((data) => data.checked === true)
    .map((item) => (action.type === "brands" ? item.slug : item.name));
  if (checkedData.length > 0) {
    filteredProds = products.filter((product) => {
      if (action.payload.datatype === "brands") {
        return checkedData.includes(product.manufacturer);
      } else {
        return checkedData.includes(...product.tags);
      }
    });
    console.log("filtered prods : ", filteredProds);
  } else {
    filteredProds = products;
  }
  return getProductsFilteredByPage(filteredProds, page);
};


const getFilteredProductsByFilterOptions = (state) => {
  console.log("state in filtering options : ", state.selectedPriceType);
  let filteredProducts = [];
  if (state.selectedType !== "") {
    filteredProducts = state.initialProducts.filter((product) => product.itemType === state.selectedType);
  }
  filteredProducts = getFilteredProductsByPrice(filteredProducts, state.selectedPriceType);
  console.log("filter options:", filteredProducts);
  return filteredProducts;
};
