import React,{useState,useEffect} from 'react';
import './App.scss';
import Home from './Components/Home';
import Login from './Components/Login';
import OtpVerify from './Components/OtpVerify';
import {HashRouter as Router,Routes,Route} from 'react-router-dom'
import { Navigate } from 'react-router-dom';
import PageNotFound from './Components/PageNotFound';
import { ContextProvider } from './Context/context';

function App() {
  const [isLogged,setisLogged] = useState(false);
  return (
    <Router>
      <div className="App">
      <ContextProvider>
      <Routes>
        <Route exact path='/' element={(isLogged)?<Navigate to='/Home'/>:<Navigate to='/Login'/>}/>
        <Route exact path='/Login' element={<Login/>} />
        <Route exact path='/Home' element={<Home isLogged={isLogged}/>}/>
        <Route exact path='/Login/otpVerify' element={<OtpVerify setisLogged={setisLogged}/>}/>
        <Route exact path='/*' element={<PageNotFound/>}/>
      </Routes>
      </ContextProvider>
      </div>
    </Router>
  );
}

export default App;
