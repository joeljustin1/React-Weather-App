import React from 'react'
import './style.css'
const WeatherCard = ({tempinfo}) => {

    const  {
        temp,humidity,pressure,weathermood, name, speed, country, sunset
    
    } = tempinfo;

    let sec=sunset;
    let date =new Date(sec*1000);
    let timeStr=`${date.getHours()}:${date.getMinutes()} PM`;

    var weatherState="wi wi-day-sunny";
    if(weathermood==="Clouds")  weatherState="wi-day-cloudy";
    if(weathermood==="Haze")  weatherState="wi-fog";
    if(weathermood==="Mist")  weatherState="wi-dust";

  return (
    <>
     {/*our temp card*/}
     <article className='widget'>
        <div className='weatherIcon'>
            <i className={weatherState}/>

        </div>
        <div className='weatherInfo'>
            <div className='temperature'>
                <span>{temp}&deg;</span>
            </div>
            <div className='description'>
            <div className='weatherCondition'>{weathermood}</div>
            <div className='place'>{name},{country}</div>
            </div>
        </div>
        <div className='date'> {new Date().toLocaleString()}</div>
            {/*Our Four Column Section*/}
            <div className='extra-temp'>
                <div className='temp-info-minmax'>
                    <div className='two-sided-section'>
                        <p><i className={'wi wi-sunset'}></i></p>
                        <p className='extra-info-leftside'>{timeStr} <br/>Sunset</p>
                    </div>
                    <div className='two-sided-section'>
                        <p><i className={'wi wi-humidity'}></i></p>
                        <p className='extra-info-leftside'>{humidity} <br/>Humidity</p>
                    </div>
                    

                    
                </div>
                <div className='weather-extra-info'>
                <div className='two-sided-section'>
                        <p><i className={'wi wi-rain'}></i></p>
                        <p className='extra-info-leftside'>{pressure} <br/>Pressure</p>
                    </div>
                    <div className='two-sided-section'>
                        <p><i className={'wi wi-strong-wind'}></i></p>
                        <p className='extra-info-leftside'>{speed} <br/>Speed</p>
                    </div>
                </div>
            </div>

            

            
            
    </article>
    </>
  );
}

export default WeatherCard