import QuantityPicker from "./quantityPicker";
import PropTypes from 'prop-types';
import './product.css';
import { useEffect, useState } from 'react';

function Product({ data }) {  // Destructuring props here
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    console.log('component loaded');
  }, []);

  function onQuantityChange(value) {
    setQuantity(value);
  }

  function getTotal() {
    const total = quantity * data.price;  // Using the destructured `data` directly
    return total.toFixed(2);
  }

  function handleAdd() {
    console.log("message");
  }

  return (
    <div className="product">
      <img src={'/images/' + data.image} alt="Product Image"></img>
      <h5>{data.title}</h5>
      <div className='prices'>
        <label>${getTotal()}</label>
        <label>${data.price.toFixed(2)}</label>
      </div>
      <QuantityPicker onChange={onQuantityChange} />
      <button onClick={handleAdd} className="btn btn-sm btn-success">Add</button>
      <i className="fas fa-cart-shopping"></i>  {/* Updated class for FontAwesome */}
    </div>
  );
}

Product.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired
};

export default Product;


