import React from "react";
import  ReactDOM  from "react-dom/client";

const RestaurantCard=(props)=>{
  const {name,cuisines,costForTwo,deliveryTime}=restList?.data;
    return(
      <div className="res-card">
          <img className="res-logo"alt="res-logo"src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf"></img>
          <h3 >{name}</h3>
          <h4 >{cuisines.join(", ")}</h4>
          <h4 >{costForTwo/100} FOR TWO</h4>
          <h4 >{deliveryTime} minutes</h4>
      </div>
    )
  }
export default RestaurantCard;  