import React from 'react';
import Card from './Card';

import style from './Cards.module.css';

export default function Cards({ cities, onClose, toMain }) {
 
  return (
  <div className={style.Cards}>
    {cities.map((city) =>( 
       <Card
       key={city.id} 
       max={city.max}
       min={city.min}
       name={city.name}
       img={city.img}
       onClose={() => onClose(city.id)}
       
       />
    ))}
  </div>
  );
};