import React,{useState,useEffect} from 'react';
import './App.scss';
import Home from './Components/Home';
import Login from './Components/Login';
import OtpVerify from './Components/OtpVerify';
import {HashRouter as Router,Routes,Route} from 'react-router-dom'
import { Navigate } from 'react-router-dom';
import { ContextProvider } from './Context/context';

function App() {
  const [otp,setOtp] = useState();
  const [isLogged,setisLogged] = useState(false);
  return (
    <Router>
      <div className="App">
      <ContextProvider>
      <Routes>
        <Route path='/' element={(isLogged)?<Navigate to='/Home'/>:<Navigate to='/Login'/>}/>
        <Route path='/Login' element={<Login/>} />
        <Route path='/Home' element={<Home isLogged={isLogged}/>}/>
        <Route path='/Login/otpVerify' element={<OtpVerify setisLogged={setisLogged}/>}/>

      </Routes>
      </ContextProvider>
      </div>
    </Router>
  );
}

export default App;
