import React from 'react';
import Temp from './Temp';

import style from './Card.module.css';

export default function Card({max, min, name, img, onClose, main, toMain, state }) { 

  return (
  <div className={[style.card, main  ? style.mainCard : ""].join(" ")}>
  
    <span className={style.name}>{name}</span>
    <button onClick={onClose} className={style.cardBtn}>X</button>
    
    <section>
    <Temp className={style.Temp} label="Min" value={min} />
    <Temp className={style.Temp} label="Max" value={max} />
     <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="icono"/>
    </section>
    { !main ? <button  className={style.btnMain} onClick={toMain} > +Info </button> : ''} 
  </div>
  );
};