// import './Navbar.css'
import {useState} from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'

const Navbar = () => {
  const [menu,setMenu] = useState("Shop")

  return (
    <div className='flex w-full mx-auto justify-around shadow-lg border border-solid border-red-400'>
      <div className="flex items-center gap-2">
        <img src={logo} alt="" />
        <p className='text-gray-600 font-semibold '>SHOPPER</p>
      </div>
      <ul className="flex items-center gap-8 text-gray-600 font-semibold">
        <li className='cursor-pointer' onClick={()=>setMenu("Shop")}><Link to="/">Shop</Link> {menu=="Shop"?<hr className='w-4 mx-auto h-1 rounded-full bg-red-500'/>:<></>}</li>
        <li className='cursor-pointer' onClick={()=>setMenu("Men")}><Link to="/mens">Men</Link>{menu=="Men"?<hr className='w-4 mx-auto h-1 rounded-full bg-red-500'/>:<></>}</li>
        <li className='cursor-pointer' onClick={()=>setMenu("Women")}><Link to="/womens">Women</Link> {menu=="Women"?<hr className='w-4 mx-auto h-1 rounded-full bg-red-500'/>:<></>}</li>
        <li className='cursor-pointer' onClick={()=>setMenu("Kids")}><Link to="/kids">Kids</Link> {menu=="Kids"?<hr className='w-4 mx-auto h-1 rounded-full bg-red-500'/>:<></>}</li>
      </ul>
      <div className="flex items-center gap-4">
        <Link to="/login">
          <button className='font-medium border  rounded-full px-3 py-1 bg-slate-100 text-gray-600 hover:bg-red-400 hover:text-white'>Login</button>
        </Link>
        <Link to="/cart">
        <img className='w-6' src={cart_icon} alt="" />
        </Link>
        <p className='flex items-center justify-center font-medium text-xs -mt-4 -ml-6 w-4 h-4 bg-red-500 rounded-xl text-white'>0</p>
      </div>
    </div>
  )
}

export default Navbar