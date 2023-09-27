import React, { useState } from 'react'
import './WheatherApp.css'

import search_icon from "../assets/search.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import clear_icon from "../assets/clear.png";
import humidity_icon from "../assets/humidity.png";
import snow_icon from "../assets/snow.png";
import wind_icon from "../assets/wind.png";
import rain_icon from "../assets/rain.png";


 const WheatherApp = () => {

    let api_Key = 'f8f04c6e6262c13bd78ff559b98da5de';

    const [wicon,setWicon] = useState(cloud_icon);

    const search=async() =>{
        const element = document.getElementsByClassName("cityName")
        if(element[0].value===""){
          return 0
        }

        let url =`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${api_Key}`
        let response = await fetch(url);
        let data = await response.json();
          
        
        const humidity = document.getElementsByClassName("humidity-percent");
        const wind =  document.getElementsByClassName("wind-rate");
        const wheather_temp =document.getElementsByClassName("wheather-temp");
        const wheather_loca = document.getElementsByClassName("wheather-location");

        humidity[0].innerHTML = data.main.humidity +"%";
        wind[0].innerHTML = Math.floor(data.wind.speed)+ " km/h";
        wheather_temp[0].innerHTML =Math.floor(data.main.temp)+"°c";
        wheather_loca[0].innerHTML = data.name;
        

        if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n")
         {       
        setWicon(clear_icon);
         }
         else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n")
         {
          setWicon(cloud_icon);
         }
         else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n")
         {
          setWicon(drizzle_icon);
         }
         else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n")
         {
          setWicon(rain_icon);
         }
         else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n")
         {
          setWicon(rain_icon);
         }
         else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n")
         {
          setWicon(snow_icon);
         }
         else{
          setWicon(clear_icon);
         }
    }

    
  return (
    <div className='container'>
        <div className="topbar">
           <input type="text" className="cityName" placeholder="search"/>
           <div className="search">
             <img src={search_icon} onClick={()=>{search()}} />
           </div>
        </div>
        <div className="wheather-image">
          <img src={wicon} alt="" />
        </div>
        <div className="wheather-temp"> 24°c</div>
        <div className="wheather-location">London</div>
        <div className="data-container">

          <div className="element">
             <img src={humidity_icon} alt="" className="icon" />
             <div className="data">
              <div className="humidity-percent">64%</div>
              <div className="text">Humidity</div>
             </div>
          </div>

          <div className="element">
             <img src={wind_icon} alt="" className="icon" />
             <div className="data">
              <div className="wind-rate">18 km/h</div>
              <div className="text">Wind Speed</div>
             </div>
          </div>
        </div>
    </div>
  )
}

export default WheatherApp