import QuantityPicker from "./quantityPicker";
import './product.css';
import { useEffect } from 'react';


function Product(props) {
  useEffect(function () {

    console.log('component loaded');
  }, []);

return(
    <div className="product">
        <img src={'/image/' + props.data.image} alt=""></img>
        <h5>{props.data.title}</h5>


        <div className='prices'>
            <label>${props.data.price}</label>
            <label>${props.data.price}</label>
        </div>

         <QuantityPicker />

        <button className="btn btn-sm btn-success">Add</button>
    </div>

    );
}


export default Product;
