import React, { useState } from 'react';
import StoreContext from './storeContext';

const GlobalState = (props) => {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({ id: 1324, name: 'Gigi' });

    function addProductToCart() {
        console.log("global add");
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
