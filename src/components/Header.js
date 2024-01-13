import React from "react";
import  ReactDOM  from "react-dom/client";

const Header=()=>{
    return  (
        <div className="header">   
         <div className="logo-container">
            <img className="logo"src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/emlehbuwgsmryxhwzhvq" ></img>
         </div>
         <div className="nav-items">
           <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact Us</li>
              <li>Cart</li>
  
           </ul>
         </div>
        </div> 
      )
    }
export default Header;    