import React from "react";
import  ReactDOM  from "react-dom/client";
import { LOGO_URL } from "../utils/constants";

const RestaurantCard=(props)=>{
    const {resData}=props
    // const {name}=resData?.data
    // console.log(name,'resData')
      return(
        <div className="res-card">
            <img className="res-logo"alt="res-logo"src={LOGO_URL}></img>
            <h3 >{resData.name}</h3>
            <h4 >{resData.cuisines.join(", ")}</h4>
            {/* <h3 >{name}</h3>
            <h4 >{cuisines.join(", ")}</h4>
            <h4 >{costForTwo/100} FOR TWO</h4>
            <h4 >{deliveryTime} minutes</h4> */}
        </div>
      )
    }
export default  RestaurantCard;