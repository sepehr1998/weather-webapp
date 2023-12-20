import { WeatherContext } from "../../contexts/weather.context";
import "./sidebar.styles.scss";
import { useContext } from "react";

const SideBar = () => {
  const { weatherData } = useContext(WeatherContext);

  // Set weather details only if weatherData is available and not empty
  const weatherIcon = weatherData?.weather?.[0]?.icon || null;
  const currentTemperature = weatherData?.main?.temp ? Math.round(weatherData.main.temp) : null;
  const currentStatus = weatherData?.weather?.[0]?.description || null;
  const logoUrl = weatherIcon ? `http://openweathermap.org/img/wn/${weatherIcon}@4x.png` : null;

  return (
    <div className="side-bar-container">
      {logoUrl && <img src={logoUrl} className="weather-icon" alt="weather icon" />}
      {currentTemperature && <div className="current-temperature">{currentTemperature}°C</div>}
      {currentStatus && <div className="current-status">{currentStatus}</div>}
    </div>
  );
};

export default SideBar;
