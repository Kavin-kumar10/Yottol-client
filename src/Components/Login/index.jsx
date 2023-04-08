import React,{useContext, useState} from "react";
import "./Login.scss"
import {CgPassword} from 'react-icons/cg'
import { MyContext } from "../../Context/context";

const Login = () =>{
  const [otp,setOtp,mail,setMail] = useContext(MyContext);

  const generateOTP = () => {
    let OTP = '';
    for (let i = 0; i < 6; i++) {
      OTP += Math.floor(Math.random() * 10);
    }
    return OTP;
  }

  // useEffect()
  const submitHandler=(e)=>{
    const val = generateOTP();
    setOtp(val);
    localStorage.setItem('otp',val);
    localStorage.setItem('mail',mail);
    setTimeout(()=>{
      e.preventDefault();
      setMail('');
    },1000)
  }
    return(
        <div className="Login">
          <div className="Contain">
            <h2><i>Swift</i>folios</h2>
            <p>Login</p>
            <form action="https://yottol-server.onrender.com" method="POST" onSubmit={submitHandler}>
              <label htmlFor="Email">Email</label>
                <input type="email" placeholder='abcxyz.com' id='Email' name="Email" value={mail} onChange={(e)=>{setMail(e.target.value)}} required/>
                <input type="hidden" name="Otp" value={otp} />
              <button className="btn" type="submit">
                <CgPassword size={25} color="green"/>
                <p>Generate OTP</p>
              </button>  
            </form>
            <div className="footer">
              <p>Reach out to us if you want <span>Swift<i>folios</i></span> to be a part of your tech solution.</p>
            </div>
          </div>
        </div>
    )
}

export default Login