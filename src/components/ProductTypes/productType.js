import { useContext } from "react";
import { ProductTypesContext }  from "../../contexts/index";
import './productType.scss';

const ProductType = ({ selectedType }) => {
    const types = useContext(ProductTypesContext);

   return (
       <ul>
           {types && types.map(type => <li className={`${selectedType === type ? 'selected' : ''}`} >{type}</li>)}
       </ul>
   )
}

export default ProductType;