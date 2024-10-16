import HeroImage from '../../assets/hero_image.png';
import HandIcon from '../../assets/hand_icon.png';

function Hero() {
  return (
    <div className="flex h-[80vh] mx-auto border border-solid border-red-500" style={{background:'linear-gradient(180deg,#fde1ff,#e1ffea22 60%'}}>
        <div className='flex-1 flex items-center justify-center'>
            <div className='flex-1 flex flex-col p-20 gap-4 border-solid border-red-500'>
                <p className=' text-xl text-zinc-600 font-light border border-solid border-red-500 uppercase'>New Arrivals Only</p>
                <div className='flex'>
                    <p className='text-3xl font-bold'>New </p>
                    <img src={HandIcon} alt="" className='img mx-4' style={{height:'40px',width:'auto'}}/>
                </div>
                <p className='text-3xl font-bold'> Collections</p>
                <p className='text-3xl font-bold'>for Everyone</p>
                <button className='m-auto mt-2 px-4 p-2 rounded-md text-xl bg-red-400 cursor-pointer text-white'>Latest Collection</button>
            </div>
        </div>
        <div className='flex-1 justify-center m-auto'><img src={HeroImage} alt="hero image" /></div>
    </div>
  )
}

export default Hero