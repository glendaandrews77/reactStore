import "./quantityPicker.css";
import { useState } from 'react';

// for the buttons on catalog + and - sign

function QuantityPicker(props) {
    const [quantity, setQuantity] = useState(1); 

    function decrease() {
        if (quantity === 1) return;
        let val = quantity - 1;
        setQuantity(val);
        props.onChange(val);
    }

    function increase() {
        let val = quantity + 1;
        setQuantity(val);
        props.onChange(val);
    }

    return ( 
        <div className="qt-picker"> 
            <button 
                className="btn btn-sm btn-outline-light" 
                onClick={decrease}
                disabled={quantity === 1} 
            >
                -
            </button>
            <label>{quantity}</label>
            <button 
                className="btn btn-sm btn-outline-light" 
                onClick={increase}
            >
                +
            </button>
        </div>
    );
}

export default QuantityPicker;
