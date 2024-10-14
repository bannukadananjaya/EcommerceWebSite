
const Item = (props) => {
  return (
    <div className="p-4 hover:scale-110 transition duration-100">
         <img src={props.image} className="" alt="" />
         <p>{props.name}</p>
         <div className="item-prices">
            <div className="item-prices-new font-medium">
                ${props.new_price}
            </div>
            <div className="item-prices-old text-stone-400 font-light line-through ">
                ${props.old_price}
            </div>
         </div>
    </div>
  )
}

export default Item