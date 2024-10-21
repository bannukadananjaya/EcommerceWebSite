import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"
import remove_icon from "../assets/cart_cross_icon.png"


const CartItems = () => {
    const {all_product,cartItems,removeFromCart} = useContext(ShopContext);
    // function removeFromCart(){

    // }
    console.log("This is cart");
    // console.log(cartItems[]);
  return (
    <div className="mx-5 my-10">
        <div className="grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-[75px] py-[20px] text-[#454545] text-[18px] font-semibold">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>

        </div>
        <hr className="h-1 bg-slate-600 border-none"/>
        <div >
            {all_product.map((item)=>{
                if(cartItems[item.id]>0){
                    return <div key={item.name} className="grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-[75px] py-[20px] text-[#454545] text-[18px] font-semibold">
                                <img src={item.image} alt="" />
                                <p>{item.name}</p>
                                <p>{item.new_price}</p>
                                <button>{cartItems[item.id]}</button>
                                <p>{item.new_price*cartItems[item.id]}</p>
                                <img src={remove_icon} alt="" onClick={()=>{removeFromCart(item.id)}}/>
                                <hr />
                            </div>
             
                }
                return null;
            }
            )}
            
        </div>
    </div>
  )
}

export default CartItems
