// /* eslint-disable react/prop-types */
// import { useContext } from "react"
// import { ShopContext } from "../context/ShopContext"
// import dropdown_icon from '../assets/dropdown_icon.png'
// import Item from "../components/Item/Item"

// const ShopCategory = (props) => {
//     const {all_product} = useContext(ShopContext);
//   return (
//     <div>
//         <img src={props.banner} alt="" />
//         <div>
//             <p>
//                 <span>Showing 1-12</span> out fo 36 products
//             </p>
//             <div>
//                 Sort by <img src={dropdown_icon} alt="" />
//             </div>
//         </div>
//         <div className=''>
//             {/* {all_product.map((item)=>{
//                  if(props.category===item.category){
//                     return <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
//                  }else{
//                     return null; 
//                  }
//             })} */}
//             {all_product
//                 .filter(item=>props.category===item.category)
//                 .map(item => (
//                     <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
//                 ))}
//         </div>
//     </div>
//   )
// }

// export default ShopCategory 
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import dropdown_icon from '../assets/dropdown_icon.png'; // Corrected variable name
import Item from "../components/Item/Item";
import PropTypes from 'prop-types'; // Added PropTypes

const ShopCategory = (props) => { // Destructured props
    const { all_product } = useContext(ShopContext);
    console.log("Context:",all_product);
    // Filter products by category before mapping

    // const filteredProducts = all_product.filter(item => props.category === item.category);

    return (
        <div className="flex flex-col ">
            <img src={props.banner} alt="Category Banner" /> {/* Added descriptive alt */}
            <div className="flex justify-between p-2 w-[90%] m-auto">
                <p>
                    <span>Showing 1-12</span> out of 36 products {/* Fixed typo */}
                </p>
                <div className="flex justify-center items-center gap-2 bg-slate-300 rounded-full p-1 cursor-pointer">
                    Sort by <img src={dropdown_icon} alt="Dropdown Icon" style={{width:'10px', height:'10px'}}/> {/* Corrected variable name and added alt */}
                </div>
            </div>
            <div className='grid grid-cols-4 gap-4 mt-2 cursor-pointer border border-solid border-red-500'> {/* Example Tailwind classes */}
            {all_product.map((item,i)=>{
                 if(props.category==item.category){
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                 }else{
                    return null; 
                 }
            })}
            </div>
            <div className="flex justify-center items-center my-4 mx-auto p-4 bg-slate-300 rounded-full cursor-pointer">Explore More</div>
        </div>
    );
};

// Define PropTypes for better prop validation
ShopCategory.propTypes = {
    banner: PropTypes.string.isRequired, // Adjust type based on actual prop
    category: PropTypes.string.isRequired,
};

export default ShopCategory;
