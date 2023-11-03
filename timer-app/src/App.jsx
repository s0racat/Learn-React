import React, { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  function fmt(v) {
    if (v.toString().length === 1) {
      return "0" + v
    } else {
      return v
    }
  }
  
  const date = new Date();

  const [dateTime, setDateTime] = useState({
    hours: fmt(date.getHours()),
    minutes: fmt(date.getMinutes()),
    seconds: fmt(date.getSeconds())
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      setDateTime({
        hours: fmt(date.getHours()),
        minutes: fmt(date.getMinutes()),
        seconds: fmt(date.getSeconds())
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ fontSize: '50px' }}>
      {dateTime.hours}:{dateTime.minutes}:{dateTime.seconds}
    </div>
  );
}
