import QuantityPicker from "./quantityPicker";
import './product.css'

function Product(props) {
    function handleQuantityChange(qty) {
        console.log("quantity change", qty);
    }
    console.log(props.data.price)

    return (
        <div className="product">
            <div className="product-image-container">
            <img src={props.data.image ? "/public images/" + props.data.image : "https://picsum.photos/200/200"} alt="Product" className="product-image" />

            </div>

            <h5>{props.data.title}</h5>
            
            <div className="prices">
               
                <label>Price: ${props.data.price.toFixed(2)}</label>
            </div>
            <div className="quantity-picker">
            <QuantityPicker onChange={handleQuantityChange} />

            </div>
            
            <button>Add</button>
        </div>
    );
};

export default Product;

