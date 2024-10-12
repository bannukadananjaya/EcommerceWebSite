import HeroImage from '../assets/hero_image.png';
import HandIcon from '../assets/hand_icon.png'
const Shop = () => {
  return (
    <div className="hero h-screen border border-solid border-red-500" style={{background:'linear-gradient(180deg,#fde1ff,#e1ffea22 60%'}}>
        <div className='flex justify-center items-center'>
            <div className='border-solid border-red-500'>
                <p className='m-auto text-2xl border border-solid border-red-500'>New Arrivals Only</p>
                <h1 className='text-3xl font-bold'>New <img src={HandIcon} alt="" className='image' style={{height:'30px'}}/><h1></h1> Collections for Everyone</h1>
                <button className='px-2 rounded-md bg-stone-600 cursor-pointer text-white'>Latest Collection</button>
            </div>
            <div><img src={HeroImage} alt="hero image" /></div>
        </div>
    </div>
  )
}

export default Shop;