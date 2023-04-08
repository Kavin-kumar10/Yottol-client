import React from "react";
import Img from '../../Assets/404.svg'
import './PageNotFound.scss'

const PageNotFound = () =>{
    return(
        <div className="PageNotFound">
            <img src={Img} alt="404" />
            <h1>PAGE NOT FOUND</h1>
            <p>Are you looking for <a href="https://kavin-kumar10.github.io/Yottol-client/#/">https://kavin-kumar10.github.io/Yottol-client/#/</a></p>
        </div>
    )
}


export default PageNotFound