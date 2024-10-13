// import React from 'react'
import footer_logo from '../../assets/logo_big.png'
import instagram_icon from '../../assets/instagram_icon.png'
import pintester_icon from '../../assets/pintester_icon.png'
import whatsapp_icon from '../../assets/whatsapp_icon.png'

function Footer() {
  return (
    <>
    <div className='flex justify-around'>
      <div>
        <img src={footer_logo} alt="" />
        <p>Shopper</p>
      </div>
      <ul>
        <li>Company</li>
        <li>Products</li>
        <li>Officers</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div>
        <div className='p-2'>
          <img className='p-1' src={instagram_icon} alt="" />
          <img className='p-1' src={pintester_icon} alt="" />
          <img className='p-1' src={whatsapp_icon} alt="" />
        </div>
      </div>
    </div>
    <hr />
    <div className='flex flex-col items-center p-4'>
      <p>Copyright @ 2024 - All Rights Reserved.</p>
    </div> 
    </> 
  )
}

export default Footer;