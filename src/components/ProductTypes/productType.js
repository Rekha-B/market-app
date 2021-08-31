import { useContext } from "react";
import { ProductTypesContext }  from "../../contexts/index";
import ProductsPanel from "../ProductsPanel/productsPanel";
import './productType.scss';

const ProductType = ({ selectedType, handleSelectedType }) => {
    const types = useContext(ProductTypesContext);

   return (
       <ul>
           {types && types.map(type => <li className={`${selectedType === type ? 'selected' : ''}`}  onClick={() => handleSelectedType(type)}>{type}</li>)}
       </ul>
   )
}

export default ProductType;