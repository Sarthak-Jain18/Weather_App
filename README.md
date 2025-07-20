# 🌦️ Weather App

A simple and elegant React-based weather application that provides real-time weather information and a location map for any city in the world.
🔗 Live Demo: https://weather-app-rust-xi-92.vercel.app/
## Features
🔍 Search weather by city name  
📍 View city coordinates (latitude & longitude)  
🌡️ Display current temperature and weather condition  
💧 Show humidity percentage  
🗺️ Interactive map with location markers  
🌍 Real-time data fetched from OpenWeatherMap API
## Technologies Used
- React (React Hooks, React Leaflet) 
- OpenWeatherMap APIs (Geocoding, Weather, Map Tiles) 
- Lucide Icons, CSS
## API Endpoints
- Geocoding → `https://api.openweathermap.org/geo/1.0/direct?q={city}&limit=1&appid={API_KEY}`  
- Weather → `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API_KEY}&units=metric`
