import arrow_icon from '../assets/breadcrum_arrow.png'

const Breadcrums = (props) => {
    const {product} = props;
    console.log("Hi");
  return (
    <div className='flex text-xs gap-2 p-2'>
        HOME <img src={arrow_icon} alt="" />SHOP <img src={arrow_icon} alt="" />{product.category} <img src={arrow_icon} alt="" />{product.name}
    </div> 
  )
}

export default Breadcrums