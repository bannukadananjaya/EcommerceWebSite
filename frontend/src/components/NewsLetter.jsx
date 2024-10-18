const NewsLetter = () => {
  return (
    <div className="h-[40vh]  flex flex-col justify-center items-center m-auto gap-2 border border-solid border-red-500" style={{background:'linear-gradient(180deg,#fde1ff 0%, #e1ffea22 60%)'}}>
        <h1 className="text-2xl text-slate-400 font-medium">Get exclusive offers on your email</h1>
        <p className="text-s font-light">Subscribe to our newsletter and stay updated</p>
        <div className="flex justify-between bg-white w-[730px] h-[50px] rounded-lg border border-solid border-stone-400">
            <input className='w-[500px] ml-4 border-none outline-none' type="email" placeholder="Your Email id:" />
            <button className="w-[210px] rounded-2xl bg-red-400 text-white cursor-pointer">Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter