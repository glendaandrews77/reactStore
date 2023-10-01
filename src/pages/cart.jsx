import "./cart.css";
import { useContext } from 'react';
import StoreContext from '../state/storeContext';
import CartProduct from '../components/cartProduct';

function Cart() {
    const { cart } = useContext(StoreContext);
  
    return (
        <div className="cart page">
            <h1>Kicking Up Heels & Check Out</h1>
            <h3>👠 You have {cart.length} items in the shopping cart 👠</h3>

            <div className="prod-list">
              {cart.map((prod) => <CartProduct key={prod._id} data={prod} /> )}
            </div>
        </div>
    );
}

export default Cart;
