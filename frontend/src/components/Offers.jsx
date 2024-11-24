import ExclusiveImg from '../assets/exclusive_image.png'
const Offers = () => {
  return (
    <div className='flex h-3/5 px-10 py-8' style={{background:'linear-gradient(180deg,#fde1ff 0%,#e1ffea22 60%)'}}>
       <div className='flex-1 flex flex-col justify-center pl-10 gap-5  border border-solid border-red-500'>
            <p className='text-5xl font-semibold'>Exclusive</p>
            <p className='text-5xl font-semibold'>Offers for you</p>
            <p className='text-2xl uppercase font-normal'>Only on best sellers products</p>
            <button className='max-w-[200px] p-2 rounded-md bg-red-400 text-white cursor-pointer'>Check Now</button>
        </div> 
        <div className="flex">
            <img src={ExclusiveImg} alt="" />
        </div>
       
    </div>
  )
}

export default Offers