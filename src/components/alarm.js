import React, { useState, useEffect } from 'react';
import PropsType from 'prop-types';
import './style.css';

const Alarm = (props) => {
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

  const hourDeg = (hour*30+minute*0.5)%360;
  const minuteDeg = (minute*6+second*0.1)%360;
  const secondDeg = (second * 6) % 360;
  return (
    <div className="loading" style={{
      width: `${props.width}px`
    }}>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" >
        <circle cx="50" cy="50" r="45" fill="none" stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="50" cy="50" r="1" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <polygon
          points="50,50 47,40 50,20 53,40"
          fill="#ff0303"
          stroke="#ff0303"
          strokeWidth={`${props.strokeWidth}`}
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            calcMode="spline"
            values={`${hourDeg} 50 50;${hourDeg} 50 50`}
            times="0;1"
            keySplines="0 1 0 1"
            repeatCount="indefinite"
            dur="1s"
          />
        </polygon>
        <polygon
          points="50,50 47,40 50,12 53,40"
          fill="#0b0f93"
          stroke="#0b0f93"
          strokeWidth={`${props.strokeWidth}`}
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            calcMode="spline"
            values={`${minuteDeg} 50 50;${minuteDeg} 50 50`}
            times="0;1"
            keySplines="0 1 0 1"
            repeatCount="indefinite"
            dur="1s"
          />
        </polygon>
        <polygon
          points="50,50 49,50 49,12 51,12 51,50"
          strokeWidth=".5"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            calcMode="spline"
            values={`${secondDeg} 50 50;${secondDeg} 50 50`}
            times="0;1"
            keySplines="0 1 0 1"
            repeatCount="indefinite"
            dur="1s"
          />
        </polygon>
        <circle cx="50" cy="10" r="1.5" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="54.181138530706136" cy="10.219124185269067" r="0.25" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="58.31646763271037" cy="10.874095970647772" r="0.25" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="62.3606797749979" cy="11.957739348193861" r="0.25" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="66.269465723032" cy="13.458181694295966" r="0.25" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="70" cy="15.35898384862245" r="1" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="73.51141009169893" cy="17.639320225002102" r="0.25" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="76.76522425435434" cy="20.274206980904232" r="0.25" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="79.72579301909576" cy="23.23477574564567" r="0.25" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="82.36067977499789" cy="26.488589908301073" r="0.25" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="84.64101615137754" cy="29.999999999999996" r="1" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="86.54181830570403" cy="33.73053427696799" r="0.25" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="88.04226065180615" cy="37.6393202250021" r="0.25" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="89.12590402935223" cy="41.68353236728962" r="0.25" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="89.78087581473093" cy="45.818861469293864" r="0.25" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="90" cy="50" r="1.5" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="89.78087581473093" cy="54.181138530706136" r="0.25" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="89.12590402935223" cy="58.31646763271036" r="0.25" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="88.04226065180615" cy="62.36067977499789" r="0.25" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="86.54181830570404" cy="66.269465723032" r="0.25" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="84.64101615137756" cy="70" r="1" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="82.36067977499789" cy="73.51141009169892" r="0.25" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="79.72579301909576" cy="76.76522425435434" r="0.25" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="76.76522425435434" cy="79.72579301909576" r="0.25" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="73.51141009169893" cy="82.36067977499789" r="0.25" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="70" cy="84.64101615137756" r="1" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="66.26946572303201" cy="86.54181830570403" r="0.25" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="62.3606797749979" cy="88.04226065180615" r="0.25" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="58.31646763271037" cy="89.12590402935223" r="0.25" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="54.18113853070615" cy="89.78087581473093" r="0.25" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="50.00000000000001" cy="90" r="1.5" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="45.81886146929388" cy="89.78087581473093" r="0.25" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="41.68353236728964" cy="89.12590402935223" r="0.25" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="37.639320225002095" cy="88.04226065180615" r="0.25" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="33.73053427696801" cy="86.54181830570404" r="0.25" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="29.999999999999996" cy="84.64101615137754" r="1" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="26.48858990830108" cy="82.36067977499789" r="0.25" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="23.23477574564567" cy="79.72579301909576" r="0.25" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="20.27420698090424" cy="76.76522425435434" r="0.25" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="17.63932022500211" cy="73.51141009169893" r="0.25" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="15.358983848622458" cy="70.00000000000001" r="1" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="13.45818169429596" cy="66.269465723032" r="0.25" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="11.957739348193861" cy="62.360679774997905" r="0.25" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="10.87409597064778" cy="58.31646763271039" r="0.25" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="10.219124185269067" cy="54.181138530706136" r="0.25" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="10" cy="50.00000000000001" r="1.5" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="10.219124185269067" cy="45.81886146929388" r="0.25" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="10.874095970647765" cy="41.68353236728966" r="0.25" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="11.957739348193854" cy="37.63932022500211" r="0.25" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="13.458181694295973" cy="33.73053427696798" r="0.25" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="15.358983848622458" cy="29.999999999999996" r="1" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="17.639320225002095" cy="26.488589908301083" r="0.25" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="20.274206980904218" cy="23.23477574564569" r="0.25" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="23.234775745645674" cy="20.274206980904232" r="0.25" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="26.488589908301066" cy="17.63932022500211" r="0.25" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="29.999999999999982" cy="15.358983848622465" r="1" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="33.730534276967994" cy="13.45818169429596" r="0.25" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="37.639320225002095" cy="11.957739348193861" r="0.25" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="41.6835323672896" cy="10.87409597064778" r="0.25" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="45.818861469293864" cy="10.219124185269067" r="0.25" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
        <circle cx="50" cy="50" r="2" fill="#000" stroke={props.color} strokeWidth={`${props.strokeWidth}`} />
      </svg>
      <div className="date-label">{date.toString()}</div>
    </div>
  );
}

Alarm.propsType = {
  width: PropsType.number.isRequired,
  strokeWidth: PropsType.number.isRequired,
  color: PropsType.string.isRequired,
};

Alarm.defaultProps = {
  width: 200,
  color: '#000',
  strokeWidth: 1,
};

export default Alarm;