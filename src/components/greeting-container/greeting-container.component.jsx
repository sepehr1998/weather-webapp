import React from 'react';
import './greeting-container.styles.scss';
import CurrentDate from '../date container/date-container.component';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';

const Greetings = () => {
    const dropdownStyle = {
        m: 1,
        minWidth: 120,
        '& label': { color: 'white' },
        '& .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
        '& .MuiSelect-icon, & .MuiInputBase-input': { color: 'white' },
    };
  return (
    <div className="greeting-container">
      <div className="greeting-header">
        <h2>Good Morning</h2>
        <div className='city-selector'>
          <FormControl
            sx={dropdownStyle}
            variant="outlined"
          >
            <InputLabel id="demo-simple-select-helper-label">Choose a city</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={10}
              label="Choose a city"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className='time'>
        <CurrentDate />
      </div>
    </div>
  );
};

export default Greetings;
