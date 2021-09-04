import './productType.scss';

const ProductType = ({ types , selectedType, handleSelectedType }) => {
   return (
       <ul>
           {types.map(type => <li key={type} className={`${selectedType === type ? 'selected' : ''}`}  onClick={() => handleSelectedType(type)}>{type}</li>)}
       </ul>
   )
}

export default ProductType;