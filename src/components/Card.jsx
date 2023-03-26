import React from 'react';
import Temp from './Temp';

import style from './Card.module.css';

export default function Card({max, min, name, img, onClose, main, toMain, state, clouds, country, description, feelsLike, humidity, latitud, longitud, pressure, temp, weather, wind }) { 

  return (
  <div className={[style.card, main  ? style.mainCard : ""].join(" ")}>
  
    <span className={style.name}>{name}</span>
    {/* <button onClick={onClose} className={style.cardBtn}>X</button> */}
    
    <section>

     { main ? <>
      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="icono"/>
      <Temp className={style.Temp} label="Temp" value={temp} />
    <Temp className={style.Temp} label="FeelsLike" value={feelsLike} />
    <Temp className={style.Temp} label="Weather" value={weather} />
    <Temp className={style.Temp} label="Min" value={min} />
    <Temp className={style.Temp} label="Max" value={max} />
    <Temp className={style.Temp} label="Description" value={description} />
     <Temp className={style.Temp} label="Clouds" value={clouds} />
    <Temp className={style.Temp} label="Humidity" value={humidity} />
    <Temp className={style.Temp} label="Pressure" value={pressure} />

    <Temp className={style.Temp} label="Wind" value={wind} />
    <Temp className={style.Temp} label="Country" value={country} />

    </>:<>
        <button onClick={onClose} className={style.cardBtn}>X</button>
        <Temp className={style.Temp} label="Min" value={min} />
        <Temp className={style.Temp} label="Max" value={max} />
         <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="icono"/>
         </> }
    </section>
    { !main ? <button  className={style.btnMain} onClick={toMain} > +Info </button> : ''} 
  </div>
  );
};