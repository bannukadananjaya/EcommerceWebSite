// import './Navbar.css'
// import navlogo from '../../assets/navLogo'
// import navprofile from '../../assets/nav-profile.svg'
import { navLogo,navProfile } from '../assets/all_products' 
 
// const { arrowIcon, crossIcon, navLogo, navProfile } = icons;
const Navbar = () => {
  return (
    <div className='border border-b-2 border-b-slate-300 shadow-lg p-2'> 
      <div className='flex justify-between items-center w-[80%] mx-auto '>
        <div>
          <img src={navLogo} alt=""/>
          {/* <p>SHOPPER</p> */}
        </div>
        {/* <ul className='flex gap-8 text-gray-600 font-semibold'>
          <li>Shop</li>
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
        </ul> */}
        <img src={navProfile} alt=""/>  
      </div>
      
    </div>
  )
}

export default Navbar