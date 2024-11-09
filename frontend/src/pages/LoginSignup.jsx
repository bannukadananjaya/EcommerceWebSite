import { useState } from "react"
import { useNavigate } from "react-router-dom";

const LoginSignup = () => {

  const navigation = useNavigate();
  const [state,setState] = useState("Signin")
  const [data,setData] = useState({});

  const handleChange = (e) => { 
    e.preventDefault();

    setData({...data,[e.target.name]:e.target.value})
  }

  const handleSignin = async() => {
    let responseData;
    try{  
      await fetch('http://localhost:4000/user/signin',{
        method:"POST",
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(data),
      }).then((res)=>res.json()).then((data)=>responseData=data,console.log(data)).catch((err)=>console.log(err))

      if(responseData.success){
        // console.log(responseData);
        localStorage.setItem('token',responseData.token);
        navigation('/')
      }
    }catch(err){
      console.log(err);
    }
  }

  const handleSignup = async () => {
    try{  
      await fetch('http://localhost:4000/user/signup',{
        method:"POST",
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(data),
      }).then((res)=>{
        if(res.ok){
          navigation('/login');
        }else{
          console.log("exiset")
        }

      }).catch((err)=>console.log(err))
    }catch(err){
      console.log(err);
    }

  }
  console.log(data);

  return (
    <div className="h-[80vh] bg-slate-200">
        <div className="w-[580px] h-[600px] flex flex-col bg-white m-auto px-8 py-16">
            <h1 className="text-3xl mx-4">{state}</h1>
            <div className="flex flex-col gap-5 mt-5">
                {state==='Signup'?
                   <input className="h-12 w-full pl-2 text-sm border border-solid border-slate-200 text-slate-500" name='name' type="text"  placeholder="Your Name" onChange={handleChange}/>
                  :
                  <></>
                } 
               
                <input className="h-12 w-full pl-2 text-sm border border-solid border-slate-200 text-slate-500" name='email' type="email"  placeholder="Your Email" onChange={handleChange}/>
                <input className="h-12 w-full pl-2 text-sm border border-solid border-slate-200 text-slate-500" name='password' type="password"  placeholder="Passwordd" onChange={handleChange}/>
            </div>
            
            
            {state==='Signin'?
              <>
              <button className="flex justify-center items-center h-[72px] text-white mt-5 border-none bg-red-400 rounded-md" onClick={handleSignin}>Signin</button>
              <p className="mt-5 text-slate-500 font-semibold">Dont have an account? <span className="text-red-400 font-bold cursor-pointer" onClick={()=>setState('Signup')}>Signup</span></p>
              </>
            :
            <>
             <button className="flex justify-center items-center h-[72px] text-white mt-5 border-none bg-red-400 rounded-md" onClick={handleSignup}>Signup</button>
             <p className="mt-5 text-slate-500 font-semibold">Allready have an account? <span className="text-red-400 font-bold cursor-pointer" onClick={()=>{setState('Signin')}}>Login</span></p> 
            </>
            
            }
            
            
            <div className="flex items-center mt-5 gap-2 text-slate-500">
                <input type="checkbox" name='' id='' />
                <p>By continuing, i agree to the terms of use & privacy policcy</p>
            </div>
        </div>
    </div>
  )
}

export default LoginSignup