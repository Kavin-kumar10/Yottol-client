import React,{useContext, useState} from "react";
import './OtpVerify.scss'
import {CgPassword} from 'react-icons/cg'
import { MyContext } from "../../Context/context";
import { useNavigate } from "react-router-dom";

const OtpVerify = ({setisLogged}) =>{
  const Navigate = useNavigate();
  const [otp,setOtp] = useContext(MyContext);
  const [inputOtp,setInputOtp] = useState('');
  const [Match,setMatch] = useState(true);
  setTimeout(()=>{
    setOtp(localStorage.getItem('otp'))
  },1000)
  const submitHandler = (e) =>{
      e.preventDefault();
      if(inputOtp == otp){
        setisLogged(true);
        setMatch(true);
        Navigate('/Home');
      }
      else{
        console.log(otp);
        setMatch(false);
        console.log(inputOtp);
      }
      setInputOtp('');
  }
    return(
        <div className="OtpVerify">
        <div className="Contain">
        <h2><i>Swift</i>folios</h2>
        <p>OtpVerify</p>
        <form onSubmit={submitHandler}>
          <label htmlFor="Email">Verfiy Your OTP</label>
            <input type="number" placeholder='OTP' id='OTP' name="OTP" value={inputOtp} required onChange={(e)=>{setInputOtp(e.target.value)}}/>
            <p style={{color:'grey'}}>Disclaimer: check in spam too</p>
            {(!Match)?<p style={{color:'red',fontSize:'12px'}}>Incorrect OTP try again</p>:null}
          <button className="btn" type="submit">
            <CgPassword size={25} color="green"/>
            <p>Submit Otp</p>
          </button>  
        </form>
      </div>
        </div>
    )
}

export default OtpVerify