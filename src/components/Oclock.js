import React, { useState, useEffect } from 'react';
import './style.css';

function Oclock() {
  const [date, setDate] = useState(new Date());
  const [second, setSecond] = useState(new Date().getSeconds());
  const [minute, setMinute] = useState(new Date().getMinutes());
  const [hour, setHour] = useState(new Date().getHours());

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
      setSecond(new Date().getSeconds());
      setMinute(new Date().getMinutes());
      setHour(new Date().getHours());
    }, 100);
  }, []);


  return (<div className="oclock">
    <div className="circle">
      <div style={{
        transform: `rotate(${(hour*30+minute*0.5)%360}deg)`,
      }} className="bar hour-bar" />
      <div style={{
        transform: `rotate(${(minute*6+second*0.1)%360}deg)`,
      }} className="bar minute-bar" />
      <div style={{
        transform: `rotate(${(second*6)%360}deg)`,
      }} className="bar second-bar" />
      <div className="center" />
      <div className="hour-number number-1" />
      <div className="hour-number number-2" />
      <div className="hour-number number-3">3</div>
      <div className="hour-number number-4" />
      <div className="hour-number number-5" />
      <div className="hour-number number-6">6</div>
      <div className="hour-number number-7" />
      <div className="hour-number number-8" />
      <div className="hour-number number-9">9</div>
      <div className="hour-number number-10" />
      <div className="hour-number number-11" />
      <div className="hour-number number-12">12</div>
    </div>
    <div className="date-label">{date.toString()}</div>
  </div>);
};

export default Oclock;