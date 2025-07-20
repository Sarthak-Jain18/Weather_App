import { useEffect, useState } from "react"
import Map from './Map.jsx'
import { Droplets, Thermometer, MapPin } from 'lucide-react'

export default function Content({ location }) {

    const [coordinates, setCoordinates] = useState(null);
    const [weather, setWeather] = useState(null);
    const API_KEY = import.meta.env.VITE_API_KEY;

    useEffect(() => {
        const fetchCoordinates = async () => {
            try {
                const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=${1}&appid=${API_KEY}`);
                const data = await response.json();
                if (data.length > 0) {
                    setCoordinates({ lat: data[0].lat, lon: data[0].lon });
                }
                else {
                    console.log(`Data for ${location} not found!`);
                }
            }
            catch (err) {
                console.log(`GEOCODING API ERROR : ${err}`);
            }
        };
        fetchCoordinates();
    }, [location]);

    useEffect(() => {
        const fetchWeather = async () => {
            if (!coordinates) return; // wait until real coordinates are set
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${API_KEY}&units=metric`);
                const data = await response.json();
                if (data && data.weather) {
                    setWeather(data);
                } else {
                    console.log("Weather data missing or malformed");
                }
            }
            catch (err) {
                console.log(`WEATHER API ERROR : ${err}`);
            }
        };
        fetchWeather();
    }, [coordinates]);

    return (
        <div className="Content">

            {weather ? (

                <div className="Card">

                    <div className="mapCard">
                        <div className="ContentHead"><MapPin /> Location Map</div>
                        <div className="map">{coordinates && (<Map coordinates={coordinates} API_KEY={API_KEY} />)}</div>
                        <div className="mapCor">Coordinates {coordinates?.lat}, {coordinates?.lon}</div>
                    </div>

                    <div className="contentCard">

                        <div className="locCard">
                            <div className="ContentHead"><MapPin /> Location</div>
                            <div className="loc">{location}</div>
                            <div className="lat-long">Lat: {coordinates?.lat}, Long: {coordinates?.lon}</div>
                        </div>

                        <div className="temperatureCard">
                            <div className="ContentHead"><Thermometer /> Temperature</div>
                            <div className="tempContent">
                                <div className="tempDeg">{weather.main.temp}&deg;C</div>
                                <div className="desc">
                                    <div className="descImg"><img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather icon" /></div>
                                    <div className="descContent">{weather.weather[0].description}</div>
                                </div>
                            </div>

                        </div>

                        <div className="humidityCard">
                            <div className="ContentHead"><Droplets /> Humidity</div>
                            <div className="humPer">{weather.main.humidity}%</div>
                        </div>
                    </div>

                </div>
            ) : (
                <p>Loading weather...</p>
            )}

        </div>
    )
}
