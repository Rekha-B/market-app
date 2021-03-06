import './price.scss';
import { CURRENCY_SYMBOL } from '../../constants';
const Price = ({ price }) => {

  /**
   * Format Price
   * @param {*} price 
   * @returns 
   */
  const formatPrice = (price) => {
     return price.toFixed(2).replace('.',',');
  }
  return (
    <div className="price">
      {CURRENCY_SYMBOL}{formatPrice(price)}
    </div>
  );
};

export default Price;