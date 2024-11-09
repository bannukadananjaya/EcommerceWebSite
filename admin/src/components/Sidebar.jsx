
import {Link} from 'react-router-dom'
import addProductIcon from '../assets/Product_Cart.svg'
import listProductIcon from '../assets/Product_list_icon.svg'


const Sidebar = () => {
  return (
    <div className='min-h-screen flex flex-col items-center pt-10 px-2 gap-5 border-r-2 border-gray-300'>
       <Link to='/addproduct' className='flex items-center p-4 space-x-2 w-full rounded-md bg-slate-200  '>
            <img src={addProductIcon} alt="" />
            <p>Add product</p>
        </Link>
        <Link to='/listproduct' className='flex items-center p-4 space-x-2 w-full rounded-md bg-slate-200'>
            <img src={listProductIcon} alt="" />
            <p>Product list</p>
        </Link>
        {/* <ul className='flex flex-col items-center  border border-solid border-red-400'> */}
          {/* <li className='flex'> */}
           
          {/* </li> */}
          {/* <li> */}
            
          {/* </li> */}
        {/* </ul> */}
    
    </div>
  )
}

export default Sidebar