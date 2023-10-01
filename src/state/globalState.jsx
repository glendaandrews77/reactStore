import React, { useState } from 'react';
import StoreContext from './storeContext';

const GlobalState = (props) => {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({ id: 1324, name: 'Gigi' });

    function addProductToCart(prod) {
     //MODIFY and state Object or State Array
     //create a copy
     let copy = [...cart];
     //modify the copy
     copy.push(prod);
     //set the copy back
     setCart(copy);
    }

    function removeProductFromCart() {
        console.log("global remove");
    }

    return (
        <StoreContext.Provider 
            value={{
                cart: cart,
                user: user,
                addProductToCart: addProductToCart,
                removeProductFromCart: removeProductFromCart,
            }}
        >
            {props.children}
        </StoreContext.Provider>
    );
}

export default GlobalState;
