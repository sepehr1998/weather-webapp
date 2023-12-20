// contexts/weather.context.js

import { createContext, useState, useEffect } from "react";
import { fetchWeatherData } from "../utils/weather-api.utils";

export const WeatherContext = createContext({
  weatherData: null,
  setWeatherData: () => null,
  fetchWeather: () => null,
});

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async () => {
    const data = await fetchWeatherData();
    setWeatherData(data);
  };

  const value = { weatherData, setWeatherData, fetchWeather };

  useEffect(() => {
    fetchWeather();
  }, []);

  return <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>;
};
