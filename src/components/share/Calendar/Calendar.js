import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import default styles
import "./DarkCalendar.css"; // Import custom dark theme styles

const DarkCalendar = () => {
  const [value, setValue] = useState(new Date());

  return (
    <div data-aos="zoom-in-up" className="calendar-container">
      <Calendar onChange={setValue} value={value} className="dark-calendar" />
    </div>
  );
};

export default DarkCalendar;
