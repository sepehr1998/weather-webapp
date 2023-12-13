import { useState, useEffect } from "react";
import "./sidebar.styles.scss";
import tokenText from "../utils/token.txt";

const SideBar = () => {
  const [weatherData, setWeatherData] = useState({});
  const [apiToken, setApiToken] = useState("");

  useEffect(() => {
    fetch(tokenText)
      .then((r) => r.text())
      .then((text) => {
        setApiToken(text);
        
        fetchWeatherData(text);
      });
  }, []);
  const fetchWeatherData = (token) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&units=metric&appid=${token}`
    )
      .then((res) => res.json())
      .then((json) => {
        setWeatherData(json);
      });
  };

  const weatherIcon = weatherData?.current
    ? weatherData.current.weather[0].icon
    : null;
  const currentTemperature = weatherData?.current
    ? Math.round(weatherData.current.temp)
    : null;
  const currentStatus = weatherData?.current
    ? weatherData.current.weather[0].description
    : null;
  const logoUrl = `http://openweathermap.org/img/wn/${weatherIcon}@4x.png`;

  return (
    <div className="side-bar-container">
      <img src={logoUrl} className="weather-icon" alt="weather icon" />
      <div className="current-temperature">{currentTemperature}°C</div>
      <div className="current-status">{currentStatus}</div>
    </div>
  );
};

export default SideBar;
