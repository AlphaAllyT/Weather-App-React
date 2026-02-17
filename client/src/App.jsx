import { useState } from 'react';

import CurrentView from "./components/Current_Weather/ViewCurrent";
import Input from "./components/Search_Place/Input";
import CurrentTemp from "./components/Current_Temp/CurrentTemp";
import DailyTemp from "./components/Daily_Temp/DailyTemp";
import AppHourly from "./components/Hourly_Forcast/AppHourly";
import NavbarControl from './components/NavBar/NavbarControl';

import { SendInputToServer } from './api';
import { getWeatherIcon } from '../src/utils/weatherIcons';

import "./styles/index.css";
import "./styles/fonts.css";
import "./styles/mediaQuery.css";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // console.log(weather.current);

  const formattedHourly = weather?.hourly?.time?.map((time, index) => ({
    time,
    hour: new Date(time).getHours(), 
    day: new Date(time).toLocaleDateString("en-US", {
      weekday: "long"
    }),
    temp: weather.hourly.temperature_2m[index],
    icons: getWeatherIcon(weather.hourly.weather_code[index])
  }));

  const handleSearch = async (inputValue) => {
    try {
      setLoading(true);
      setError(null);

      const data = await SendInputToServer(inputValue);
      setWeather(data);
    } catch (err) {
      setError("Failed to load weather");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className= "body">
      <NavbarControl />

      {/* Input triggers API call */}
      <Input onSearch={handleSearch} />

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {weather && (
        <div className="gridContainer">
            <div>
                <CurrentView     
                    placeName={weather.place.name}            
                    temp={Math.floor(weather.current.temperature)+"°"}   
                    date={weather.current.dates}  
                    icon={getWeatherIcon(weather.current.weather_code)}   
                            
                />

                <div className="currentTemp">

                    {[        
                        {title: "Feels like", number: Math.floor(weather.current.feelsLike)+"°"},
                        {title: "Humidity", number: Math.floor(weather.current.humidity)+"%"},
                        {title: "Wind", number: Math.floor(weather.current.wind)+"km/h"},
                        {title: "Precipitation", number: "0mm"},            
                    ].map(product => (
                        <CurrentTemp
                            title={product.title} 
                            number={product.number}            
                        /> 
                    ))}

                </div>

                <p style={{fontSize: "1.2rem"}}>Daily forecast</p>

                <div className= "dailyTemp">  
                    {weather.daily.map((dayOjt, index) => (
                        <DailyTemp
                            key = {index}
                            day = {dayOjt.day}   
                            temp = {dayOjt.temp} 
                            wind = {dayOjt.wind}      
                            icon = {getWeatherIcon(dayOjt.icons)}                                          
                        />   
                    ))}        
                      
                </div>
            </div > 
            <div className= "">                 
              <AppHourly weatherHourly={formattedHourly} />      
            </div>        
        </div>
            )}
    </div>
  );
}

export default App;
