import "./quantityPicker.css";
import { useState } from 'react';

function QuantityPicker(props){
    const [quantity, setQuantity] = useState(1);

    function handleIncrease() {
        let nextVal = quantity + 1;
        setQuantity(nextVal);
        props.onChange(nextVal);
    }

    function handleDecrease() {
        if (quantity === 1) return;
        let nextVal = quantity - 1;
        setQuantity(nextVal);
        props.onChange(nextVal);
    }

    return (
        <div className="qty-picker">
            <button onClick={handleDecrease}>-</button>
            <span>{quantity}</span>
            <button onClick={handleIncrease}>+</button>
        </div>
    );
} 

export default QuantityPicker;
