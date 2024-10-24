import { Link } from "react-router-dom"
const Item = (props) => {
  return (
    <div className="p-4">
      <div className="overflow-hidden">
      <Link to={`/product/${props.id}`}><img src={props.image} className="hover:scale-110 transition duration-100 overflow-hidden" alt="" /></Link>
      </div>
      
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