import Popular from '../components/Popular/popular';
import HeroImage from '../assets/hero_image.png';
import HandIcon from '../assets/hand_icon.png'
import Offers from '../components/Offers/Offers';
import NewCollextions from '../components/NewCollections/NewCollextions';
import NewsLetter from '../components/NewsLetter/NewsLetter';
const Shop = () => {
  return (
    <>
    <div className="hero h-screen border border-solid border-red-500" style={{background:'linear-gradient(180deg,#fde1ff,#e1ffea22 60%'}}>
        <div className='flex items-center content-center'>
            <div className='flex-1 flex flex-col pl-8 gap-4 border-solid border-red-500'>
                <p className=' text-xl text-zinc-600 font-light border border-solid border-red-500 uppercase'>New Arrivals Only</p>
                <div className='flex'>
                    <p className='text-3xl font-bold'>New </p>
                    <img src={HandIcon} alt="" className='img mx-4' style={{height:'40px',width:'auto'}}/>
                </div>
                <p className='text-3xl font-bold'> Collections</p>
                <p className='text-3xl font-bold'>for Everyone</p>
                <button className='m-auto mt-2 px-4 p-2 rounded-md text-xl bg-red-400 cursor-pointer text-white'>Latest Collection</button>
            </div>
            <div className='flex-1 justify-center m-auto'><img src={HeroImage} alt="hero image" /></div>
        </div>
    </div>
    <div>
        <Popular/>
        <Offers/>
        <NewCollextions/>
        <NewsLetter/>
    </div>
    </>
    
  )
}

export default Shop;