import HeroImage from '../assets/hero_image.png';
import HandIcon from '../assets/hand_icon.png';

function Hero() {
  return (
    <div className="flex h-screen px-10 py-8" style={{background:'linear-gradient(180deg,#fde1ff,#e1ffea22 60%'}}>
        <div className='flex-1 flex flex-col justify-center pl-10 gap-5 '>
            
            <p className=' text-xl text-zinc-600 font-light uppercase'>New Arrivals Only</p>          
            <div className='flex'>
                <p className='text-5xl font-bold'>New </p>
                <img src={HandIcon} alt="" className='img mx-4' style={{height:'40px',width:'auto'}}/>
            </div>
            <p className='text-5xl font-bold'> Collections</p>
            <p className='text-5xl font-bold'>for Everyone</p>
            <button className='max-w-[200px] mt-2 px-4 p-2 rounded-md text-xl bg-red-400 cursor-pointer text-white'>Latest Collection</button>
        </div>
        <div className="flex">
          <img src={HeroImage} alt="hero image" />
        </div>
    </div>
  )
}

export default Hero