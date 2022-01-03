import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const KEY="788bc86c016442afb5311217220301";
const Details = props => {
    const {Name}= useParams();
    const [location, SetLocation ]=useState(Name);
      const [weatherr,setWeatherr]=useState({
         name : location,
         icon :"//cdn.weatherapi.com/weather/64x64/night/113.png"
     
      });
   
        const newloc =() =>{
        
            return({});
        }
        const update= async () =>{
        
            const waitres= await fetch(`http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${location}&aqi=no`)
             const data= await waitres.json();
             const newweather= {
             
                 name : data.location.name ,
                 icon : data.current.condition.icon ,
                 tempreture : data.current.temp_c
                 
             }
             setWeatherr(newweather);
        }
        useEffect(update, [Location]);
       return(
    
    <div className='Detail-page'>
        <h1>WEATHER FORECAST</h1>
        <h4>{weatherr.name}</h4>
        <img src={weatherr.icon} alt='help'/>
        <h2>{weatherr.tempreture} C°</h2>
     
        </div>
        )
}
export default Details;