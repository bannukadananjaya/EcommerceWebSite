/* eslint-disable react/prop-types */
import { createContext } from "react"
import all_product from '../assets/all_product'

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const contextValue = {all_product};

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
