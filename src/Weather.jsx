import axios from 'axios';
import React, { useState } from 'react'

function Weather() {
    const [city , setCity] = useState("");
    const [weather ,setWeather]=useState();
    const handleCityChange=(event)=>{
        setCity(event.target.value)
   }
   const fetchWeather=async()=>{
    try{
 const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'5d30d0609006330b2f33c410ec372ab9'}`)
 setWeather(response);
    }catch(error){
      console.log("error featching weather data",error)

    }
   }

   console.log(weather)
   const handleClick=()=>{
    fetchWeather();
   }
  return (
    <div className='Weather_container'>
     <input type="text" placeholder='enter city' value={city} onChange={handleCityChange} />
     <button onClick={handleClick}>get weather</button>
   </div>

  
  )
}

export default Weather

