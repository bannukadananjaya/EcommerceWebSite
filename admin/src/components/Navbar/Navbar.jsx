// import './Navbar.css'
// import navlogo from '../../assets/navLogo'
// import navprofile from '../../assets/nav-profile.svg'
import { navLogo,navProfile } from '../../assets/all_products' 
 
// const { arrowIcon, crossIcon, navLogo, navProfile } = icons;
const Navbar = () => {
  return (
    <div className='flex border border-solid border-red-300 bg-slate-400'> 
      <div>
        <img src={navLogo} alt=""/>
        <p>SHOPPER</p>
      </div>
      <ul className='flex'>
        <li>Shop</li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
      </ul>
      <img src={navProfile} alt="" />  
    </div>
  )
}

export default Navbar