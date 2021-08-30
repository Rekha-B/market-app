import { useContext, useState } from "react";
import { ProductTypesContext }  from "../../contexts/index";
import './productType.scss';

const ProductType = () => {
    const types = useContext(ProductTypesContext);
    const [ selectedType, setSelectedType ] = useState('');

   return (
       <ul>
           {types && types.map(type => <li className={`${selectedType === type ? 'selected' : ''}`} onClick={() => setSelectedType(type)}>{type}</li>)}
       </ul>
   )
}

export default ProductType;