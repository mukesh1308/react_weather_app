import "./weather_card.css";

const WeatherCard=({weatherData})=>{
    return(
        <div className="weather_card">
            <div className="city">
                <h2>{weatherData.city}</h2>
                <span>{weatherData.weather}</span>
            </div>
            <div className="icon">
                <img src={weatherData.icon} alt="weather icon"/>
            </div>
            <div className="temp">
                <h1>{weatherData.temp}<sup>o</sup>C</h1>
            </div>
            <div className="weather_data">
                <h4>weather details</h4>
                <table>
                    <tr>
                        <td>feels like</td>
                        <td>{weatherData.feels_like}</td>
                    </tr>
                    <tr>
                        <td>wind speed</td>
                        <td>{weatherData.wind}</td>
                    </tr>
                    <tr>
                        <td>humidity</td>
                        <td>{weatherData.humidity}</td>
                    </tr>
                    <tr>
                        <td>pressure</td>
                        <td>{weatherData.pressure}</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default WeatherCard;