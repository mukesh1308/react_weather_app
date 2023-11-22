import SearchBar from './componets/search_bar/SearchBar';
import WeatherCard from './componets/weather_card/WeatherCard';
import ForeCast from './componets/forecast/ForeCast';
import './App.css';
import { useState } from 'react';

const weatherAPI_key="4d0356a1af6e5bafd37d4cc08df2fe1d";

function App() {
    const[weatherData,setWeatherData]=useState(null);
    const[forecastData,setForecastData]=useState(null);
    const weather=async(lat,long,city)=>{
        try{
            let res=await (await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${weatherAPI_key}`)).json();
            let data={
                city:city,
                weather:res.weather[0].main,
                icon:`./icons/${res.weather[0].icon}.png`,
                temp:Math.round((res.main.temp-273)*100)/100, 
                feels_like:res.main.feels_like,
                wind:res.wind.speed,
                humidity:res.main.humidity, 
                pressure:res.main.pressure            
            }
            setWeatherData(data);
        }
        catch(err){
            console.log(err);
        }
    }
    const forecast=async(lat,long)=>{
        try{
            let res=await(await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${weatherAPI_key}`)).json();
            let delay=res.list.filter((ele)=>{
                return ele.dt_txt.includes("12:00:00");
            });
            let data=delay.map((ele)=>{
                return{
                    icon:`./icons/${ele.weather[0].icon}.png`,
                    description:ele.weather[0].description,
                    min_temp:Math.round((ele.main.temp_min-273)*100)/100,
                    max_temp:Math.round((ele.main.temp_max-273)*100)/100,
                    date:ele.dt_txt,
                    pressure:ele.main.pressure,
                    clouds:ele.clouds.all,
                    sea_level:ele.main.sea_level,
                    humidity:ele.main.humidity,
                    wind:ele.wind.speed,
                    feels_like:ele.main.feels_like
                }
            })
            console.log(data);
            setForecastData(data);
        }
        catch(err){
            console.log(err);
        }
    }
    const onSearch=(search)=>{
        // console.log(search);
        let[lat,long]=search.value.split(" ");
        weather(lat,long,search.label);
        forecast(lat,long);
    }
    return(
        <>
            <SearchBar onSearch={onSearch}/>
            <div className='cont'>
                {weatherData && <WeatherCard weatherData={weatherData}/>}
                {forecastData && <ForeCast forecastData={forecastData}/>}
            </div>
        </>
    )
}

export default App;
