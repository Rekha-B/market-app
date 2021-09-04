import {
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
    selectedSortType: "",
    selectedBrands: [],
    selectedTags : [],
    filteredProducts : [],
    filteredBrands:[]
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {

      case companyActionTypes.GET_COMPANIES_SUCCESS:
        return {
          ...state,
          brands: action.payload,
        };

      case productsActionTypes.GET_PRODUCTS_SUCCESS:
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
        };
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
          initialProducts : updatedState.initialProducts,
          tags : updatedState.tags
        };
        return updatedState;

      case productsActionTypes.GET_PRODUCTS_ERROR:  return { ...state, products: [] };
        
      case productsActionTypes.GET_FILTERED_PRODUCTS_BY_TYPE : 
            let filteredProductsByType = getProductsFilteredByProductType(state, state.initialProducts, action);
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
          let filteredProductsByPage = getProductsFilteredByPage(state.filteredProducts, parseInt(action.payload.page));
          return {
            ...state,
            products : filteredProductsByPage,
            activePage : action.payload.page
          }

      case productsActionTypes.GET_SORTED_PRODUCTS : 
          let sortType = action.payload.sortType;
          let sortedProducts = sortProducts(state, state.filteredProducts, sortType);
          return {
            ...state,
            products : getProductsFilteredByPage(sortedProducts, state.activePage),
            selectedSortType : sortType,
            activePage : state.activePage,
            filteredProducts: sortedProducts
          }
    
      case productsActionTypes.GET_PRODUCTS_BY_BRANDS : 
           let filteredProductsByBrands= getProductsByBrands(state, state.filteredProducts, action);
           return {
                  ...state,
                  products : getProductsFilteredByPage(filteredProductsByBrands.filteredProds, state.activePage),
                totalPage : Math.ceil(filteredProductsByBrands.filteredProds.length / PRODUCT_PAGE_LIMIT),
                selectedBrands :  filteredProductsByBrands.selectedData 
                
         }      
         
         case productsActionTypes.GET_PRODUCTS_BY_TAGS : 
         let filteredProductsByTags = getProductsByTags(state, state.filteredProducts, action);
         return {
                ...state,
                products : getProductsFilteredByPage(filteredProductsByTags.filteredProds, state.activePage),
              totalPage : Math.ceil(filteredProductsByTags.filteredProds.length / PRODUCT_PAGE_LIMIT),
              selectedTags :  filteredProductsByTags.selectedData 
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
const sortProducts = (state, products, sortType) => {
      if (sortType === "low") {
        products.sort((a, b) => a.price - b.price);
      } else if (sortType === "high") {
        products.sort((a, b) => b.price - a.price);
      } else if (sortType=== "old") {
        products.sort((a, b) => new Date(a.added) - new Date(b.added));
      } else {
        products.sort((a, b) => new Date(b.added) - new Date(a.added));
      }
      if(state.selectedBrands.length > 0) {
        products = getProductsByBrands(state, products, { payload : { data : state.selectedBrands, datatype : 'brands'}}).filteredProds;
      }
      if(state.selectedTags.length > 0) {
        products = getProductsByTags(state, products, { payload : { data : state.selectedTags, datatype : 'tags'}}).filteredProds;
      }
      return products;
};
/**
 * Filter Products by page
 * @param {*} products
 * @param {*} activePage
 * @returns
 */
const getProductsFilteredByPage = (products, activePage) => {
  let copyProducts = [...products];
  if (activePage === 1) return copyProducts.slice(0, PRODUCT_PAGE_LIMIT);
  return copyProducts.slice(
    activePage * PRODUCT_PAGE_LIMIT - PRODUCT_PAGE_LIMIT,
    activePage * PRODUCT_PAGE_LIMIT
  );
};

const getProductsFilteredByProductType = (state, products, action) => {
      let productType = (action.payload && action.payload.type) ? action.payload.type : state.selectedType;
      let filteredProductsByType = products.filter(product => product.itemType === productType);
      if(state.selectedBrands.length > 0) {
        filteredProductsByType = getProductsByBrands(state, filteredProductsByType, action = { payload : { data : state.selectedBrands, datatype : 'brands'}}).filteredProds;
      }
      if(state.selectedTags.length > 0) {
        filteredProductsByType = getProductsByTags(state, filteredProductsByType, action = { payload : { data : state.selectedTags, datatype : 'tags'}}).filteredProds;
      }
      filteredProductsByType = sortProducts(state, filteredProductsByType, state.selectedSortType);
      return filteredProductsByType;
}

const getProductsByBrands = (state, products, action) => {
    let filteredProds = [];
    let selectedData = action.payload.data;
    if (selectedData.length > 0) {
      filteredProds = products.filter((product) => selectedData.includes(product.manufacturer));
      } else {
      filteredProds = products;
    }
    if( state.selectedTags.length > 0){
      filteredProds = getProductsByTags(state, filteredProds, action = { payload : { data : state.selectedTags, datatype : 'tags'}}).filteredProds;
    }
   return {
      filteredProds,
      selectedData
    }
};

const getProductsByTags = (state, products, action) => {
  let filteredProds = [];
  let selectedData = action.payload.data;
 if (selectedData.length > 0) {
    filteredProds = products.filter((product) => selectedData.some(r => product.tags.includes(r)));
    filteredProds = state.selectedBrands.length > 0 ? filteredProds.filter((product) => state.selectedBrands.includes(product.manufacturer)) : filteredProds;
  } else {
    filteredProds = products;
  }
 
 return {
    filteredProds,
    selectedData
  }
};