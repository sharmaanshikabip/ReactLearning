import React from "react";
import  ReactDOM  from "react-dom/client";
import RestaurantCard from "./RestaurantCard";
import {resList} from "../utils/DummyData"

const Body=()=>{
    console.log(resList,'resList1')
   
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
             {resList.map((rest)=>(
              
              <RestaurantCard key={rest.data.id}resData={rest.data}/>
             ))}
              
              
            
            </div>
            
        </div>
    )
  }
export default Body;