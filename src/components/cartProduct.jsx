import"./cartProduct.css";

function CartProduct(props) {

    function getTotal(){
        let total = props.data.price * props.data.Quantity;
        return total.toFixed(2);
}


return (
    <div className="cart-product">
        <img src={'/images/' + props.data.image} alt="Product Image"></img>

        <div className="info d-flex justify-content-center flex-column align-items-center">
            <h5>{props.data.title}</h5>
            <p>{props.data.category}</p>
        </div>

        <label>{props.data.price}</label>
        <label>{props.data.Quantity}</label>
        <label className="total">${getTotal()}</label>
    </div>
);
}



export default CartProduct;