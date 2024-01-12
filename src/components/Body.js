import React from "react";
import  ReactDOM  from "react-dom/client";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/Data";
    
const Body=()=>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
             {resList.map((restaurant)=>{
               <RestaurantCard resData={restaurant}/>
             })}
              
            </div>
            
        </div>
    )
  }
export default Body  ;