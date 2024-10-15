const LoginSignup = () => {
  return (
    <div className="h-[80vh] bg-slate-200">
        <div className="w-[580px] h-[600px] flex flex-col bg-white m-auto px-8 py-16">
            <h1 className="text-3xl mx-4">Sign Up</h1>
            <div className="flex flex-col gap-5 mt-5">
                <input className="h-12 w-full pl-2 text-sm border border-solid border-slate-200 text-slate-500" type="text"  placeholder="Your Name"/>
                <input className="h-12 w-full pl-2 text-sm border border-solid border-slate-200 text-slate-500" type="email"  placeholder="Your Email"/>
                <input className="h-12 w-full pl-2 text-sm border border-solid border-slate-200 text-slate-500" type="password"  placeholder="Passwordd"/>
            </div>
            <button className="flex justify-center items-center h-[72px] text-white mt-5 border-none bg-red-400 rounded-md">Continue</button>
            <p className="mt-5 text-slate-500 font-semibold">Allready have an account? <span className="text-red-400 font-bold">Login</span></p>
            <div className="flex items-center mt-5 gap-2 text-slate-500">
                <input type="checkbox" name='' id='' />
                <p>By continuing, i agree to the terms of use & privacy policcy</p>
            </div>
        </div>
    </div>
  )
}

export default LoginSignup