import { createContext} from 'react';

/**
 * Context
 * is interface, discription of the data
 * it promises data
 * does not contains implementation
 */


const StoreContext = createContext({
    cart: [],
    user: {},
    addProductToCar: ()=>{},
    removeProductFromCart: ()=> {}

});



export default StoreContext;