import React,{useContext} from "react";
import "./Home.scss"
import { Navigate } from "react-router-dom";
import { MyContext } from "../../Context/context";

const Home = ({isLogged}) =>{
    const [otp,setOtp,mail,setMail] = useContext(MyContext);
    setTimeout(()=>{
        setMail(localStorage.getItem('mail'))
      })
    if(!isLogged){
        return <Navigate to="/Login"/>;
    }
    else{
        return(
            <div className="Home">
                <h1>Mail id : {mail}</h1>
                <p>Verification Successfull</p>
            </div>
        )
    }
}

export default Home