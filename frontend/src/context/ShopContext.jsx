/* eslint-disable react/prop-types */
import { createContext } from "react"
import all_product from '../assets/all_product'
import { useState } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for(let index=0;index<all_product.length+1;index++){
        cart[index]= 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems,setCartItems] = useState(getDefaultCart());
    
    const addToCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems){
            if (cartItems[item]>0) {
                let itemInfo = all_product.find((product)=>product.id === Number(item))
                totalAmount = itemInfo.new_price*cartItems[item];
                return totalAmount;
                }
        }
    }
    const getTotalCartItems = () =>{
        let totalCartItem =0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalCartItem += cartItems[item];
            }
        }
        return totalCartItem;
    }
    const contextValue = {getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart};
   
    console.log(cartItems);
    console.log(getTotalCartItems());
    console.log(getTotalCartAmount());
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;

// import { createContext, useMemo } from "react";
// import PropTypes from 'prop-types';
// import { allProducts } from '../assets/all_product'; // Renamed to camelCase

// // Create the ShopContext with a default value
// export const ShopContext = createContext({
//   allProducts: [],
// });

// // Define the Provider component
// const ShopContextProvider = ({ children }) => {
//   // Memoize the context value to optimize performance
//   const contextValue = useMemo(() => ({ allProducts }), []);

//   return (
//     <ShopContext.Provider value={contextValue}>
//       {children}
//     </ShopContext.Provider>
//   );
// };

// // Define PropTypes for the Provider
// ShopContextProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// export default ShopContextProvider;
