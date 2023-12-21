import React, { useState, useEffect, useContext } from 'react';
import './greeting-container.styles.scss';
import CurrentDate from '../date container/date-container.component';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import cityCollection from '../../utils/world-cities_json.json'
import { FixedSizeList } from 'react-window';
import { WeatherContext } from '../../contexts/weather.context';

const Greetings = () => {
  const [cityNames, setCityNames] = useState([]);
  const [cityValue, setCityValue] = useState('');
  const { weatherData } = useContext(WeatherContext);

  useEffect(() => {
    const namesArray = cityCollection.map((city) => city.name);
    const sortedNames = namesArray.sort(); // Sort the names alphabetically
    setCityNames(sortedNames);
  }, []);
  const getCurrentGreeting = () => {
    const currentTime = new Date().getHours();
    if (currentTime >= 5 && currentTime < 12) {
      return 'Good Morning';
    } else if (currentTime >= 12 && currentTime < 17) {
      return 'Good Afternoon';
    } else {
      return 'Good Evening';
    }
  };

  const Row = ({ index, style }) => (
    <MenuItem style={style} value={index}>
      {cityNames[index]}
    </MenuItem>
  );

  const weatherIcon = weatherData?.weather?.[0]?.icon || null;
  const currentStatus = weatherData?.weather?.[0]?.description || null;
  const logoUrl = weatherIcon ? `http://openweathermap.org/img/wn/${weatherIcon}@4x.png` : null;

  const dropdownStyle = {
    m: 1,
    minWidth: 120,
    '& label': { color: 'white' },
    '& .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
    '& .MuiSelect-icon, & .MuiInputBase-input': { color: 'white' },
  };

  const handleChange = (event) => {
    console.log(event);
    setCityValue(event.target.value);
  }

  return (
    <div className="greeting-container">
      <div className="greeting-header">
        <h2>{getCurrentGreeting()}</h2>
        <div className='city-selector'>
          <FormControl
            sx={dropdownStyle}
            variant="outlined"
          >
            <InputLabel id="demo-simple-select-helper-label">Choose a city</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={cityValue}
              label="Choose a city"
              onChange={handleChange}
            >
            <FixedSizeList
              height={200} // Set a fixed height or adjust as needed
              itemCount={cityNames.length}
              itemSize={40} // Set a fixed item size or adjust as needed
            >
              {Row}
            </FixedSizeList>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className='time'>
        <CurrentDate />
      </div>
      <div className='greeting-weather-forecast-container'>
        <div className='weather-status' >
        <p>Weather Forecast</p>
        {currentStatus && <div className="greeting-current-status">
            <h2>
              {currentStatus}
            </h2>
            </div>}
        </div>
          {logoUrl && <img src={logoUrl} className="greeting-weather-icon" alt="weather icon" />}
      </div>
      <div>
      </div>
    </div>
  );
};

export default Greetings;
