import React, { useState, useEffect } from 'react';
import './date-container.styles.scss'

const CurrentDate = () => {
    const [currentDateTime, setCurrentDateTime] = useState('');
    useEffect(() => {
        const updateDateTime = () => {
          const now = new Date();
          const hours = now.getHours();
          const minutes = now.getMinutes();
          const ampm = hours >= 12 ? 'PM' : 'AM';
          const formattedHours = hours % 12 || 12;
          const formattedTime = `${formattedHours}:${minutes.toString().padStart(2, '0')} ${ampm}`;
    
          const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
          const dayOfWeek = daysOfWeek[now.getDay()];
          const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
          const month = months[now.getMonth()];
          const date = now.getDate();
    
          const formattedDate = `${dayOfWeek}, ${month} ${date}`;
    
          setCurrentDateTime({ formattedTime, formattedDate });
        };
    
        // Update the date and time initially and set up an interval to update it every minute
        updateDateTime();
        const intervalId = setInterval(updateDateTime, 60000);
    
        // Clear the interval when the component is unmounted
        return () => clearInterval(intervalId);
      }, []);

      return (
        <div>
            <div className=''>
                <h1>
                    {currentDateTime.formattedTime}
                </h1>
            </div>
        <div className="date">
            <p>{currentDateTime.formattedDate}</p>
        </div>
        </div>
      )
}

export default CurrentDate