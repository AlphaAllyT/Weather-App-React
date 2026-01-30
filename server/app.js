import express from "express";
import axios from "axios";
import cors from "cors";

const port = process.env.PORT || 5000;
const app = express();

//middle ware
app.use(express.json());
app.use(cors({
  origin: "https://weather-app-react-1-qkif.onrender.com" // <- frontend URL
}));

//API routes 

app.post("/submit", async (req, res)=> {

    const placeName = req.body.inputValue;

    const responseCor = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${placeName}&count=10&language=en&format=json`);

    const results = responseCor.data.results;

    if (!results || results.length === 0) {
        return res.status(404).json({error: "Place not found"})
    };

    const placeFound = results[0];

    //console.log(results);
    const latiTude = placeFound.latitude;
    const longiTude = placeFound.longitude;

    const responseWeather = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latiTude}&longitude=${longiTude}&daily=temperature_2m_max,wind_speed_10m_max,weather_code&hourly=temperature_2m,weather_code&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code`);

    //console.log(responseWeather.data);

    const weather = responseWeather.data;
    // console.log(weather);

    //current const
    const responseWeatherTime = weather.current.time;  
    //format time
    const date = new Date(responseWeatherTime);
    const formattedDate = new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
    }).format(date);

    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];  
    const arrayDays = weather.daily.time.map((days, index) => ({
        day : weekdays[new Date(days).getDay()],
        temp : Math.floor(weather.daily.wind_speed_10m_max[index])+"°",
        wind : Math.floor(weather.daily.temperature_2m_max[index])+"km",     
        icons : weather.daily.weather_code[index], 
    }));    

    res.json({
        place:{
            name: placeFound.name,
            country: placeFound.country, 
        },
        current : {
            dates: formattedDate,
            temperature: weather.current.temperature_2m,
            feelsLike: weather.current.apparent_temperature,
            wind: weather.current.wind_speed_10m,
            humidity: weather.current.relative_humidity_2m,
            units: weather.current_units,
            weather_code: weather.current.weather_code,
        },
        hourly: weather.hourly, 
        daily: arrayDays,
    });  
});

app.listen(port, ()=>{
    console.log(`Sever running on port ${port}`)
});