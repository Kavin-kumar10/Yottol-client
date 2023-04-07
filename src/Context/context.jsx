import React,{useState, createContext } from "react";


export const MyContext = createContext();

export const ContextProvider = (props) =>{
  const [otp,setOtp] = useState('');
  const [mail,setMail] = useState('');

    return(
        <MyContext.Provider value={[otp,setOtp,mail,setMail]}>
            {props.children}
        </MyContext.Provider>
    )
}
