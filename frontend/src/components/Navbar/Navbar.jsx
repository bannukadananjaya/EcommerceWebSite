// import './Navbar.css'

import logo from '../../assets/logo.png'
import cart_icon from '../../assets/cart_icon.png'

const Navbar = () => {
  return (
    <div className='flex w-full mx-auto justify-around shadow-lg border border-solid border-red-400'>
      <div className="flex items-center gap-2">
        <img src={logo} alt="" />
        <p className='text-gray-600 font-semibold '>SHOPPER</p>
      </div>
      <ul className="flex items-center gap-8 text-gray-600 font-semibold">
        <li className='cursor-pointer'>Shop <hr className='w-4 mx-auto h-1 rounded-full bg-red-500'/></li>
        <li className='cursor-pointer'>Men</li>
        <li className='cursor-pointer'>Women</li>
        <li className='cursor-pointer'>Kids</li>
      </ul>
      <div className="flex items-center gap-4">
        <button className='font-medium border  rounded-full px-3 py-1 bg-slate-100 text-gray-600 hover:bg-red-400 hover:text-white'>Login</button>
        <img className='w-6' src={cart_icon} alt="" />
        <p className='flex items-center justify-center font-medium text-xs -mt-4 -ml-6 w-4 h-4 bg-red-500 rounded-xl text-white'>0</p>
      </div>
    </div>
  )
}

export default Navbar