import React, { useEffect, useState } from 'react'
import './style.css'
import WeatherCard from './weatherCard';
const Temp = () => {

    const [searchValue,setSearchValue] = useState('Thrissur');
    const[tempInfo,setTempInfo] = useState("");
    const getWeatherInfo= async()=>{
            try {
let url='https://api.openweathermap.org/data/2.5/weather?q='+searchValue+'&units=metric&appid=e92422765ec40b3a0a050ee196dd4c2e';             
                                                 
                let res=await fetch(url);
                let data=await res.json();

                const {temp,humidity,pressure}=data.main;
                const {main:weathermood}= data.weather[0];
                const {name} = data;
                const {speed} = data.wind;
                const {country, sunset} = data.sys;

                const weatherInfo = {
                    temp,humidity,pressure,weathermood, name, speed, country, sunset
                
                };
                setTempInfo(weatherInfo);
                //console.log(temp,humidity,pressure);
            } catch (error) {
                console.log(error);
            }
    }
    useEffect(() => {getWeatherInfo();}, [])
    

  return (
  <>
   
    <div className='wrap'>
        
    <div className='search'>
            <input type='search'
            placeholder='search'
            autoFocus
            id='search'
            value={searchValue}
            onChange={(e)=> setSearchValue(e.target.value)}
            className='searchTerm'/>
            <button className='searchButton' onClick={getWeatherInfo} type='button'>
                Search 
            </button>
            
        </div>


    </div>
    <WeatherCard tempinfo={tempInfo}/>
   

  </>
  );
    
}

export default Temp