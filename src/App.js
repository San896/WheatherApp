import React from 'react';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';

import style from './App.module.css';

const apiKey = process.env.REACT_APP_APIKEY;  

function App() {


  const [cities, setCities] = React.useState([]); 
  const [mainc, setMainc] = React.useState([]); 



  function onSearch(ciudad) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          console.log(recurso, 'recursoooooo')
          const ciudad = {
            min: Math.round(recurso.main.temp_min), 
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            feelsLike: Math.round(recurso.main.feels_like),
            humidity: recurso.main.humidity,
            pressure: recurso.main.pressure,
            name: recurso.name,
            country: recurso.sys.country,
            weather: recurso.weather[0].main,
            description: recurso.weather[0].description,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };

          const exist = cities.find((c) => c.id === ciudad.id) 
          if(!exist) {
            setMainc((oldCities) =>{ 
              return [ciudad]});
            setCities((oldCities) =>{ 
              return [...oldCities, ciudad]}); 
          }
        }
         else {
          alert("Ciudad no encontrada");
        }
      });
    }
    console.log('mainc', mainc)
    
    //

    function onClose(id) {
        setCities(oldCities => oldCities.filter((c) => c.id !== id));
    } 

    const toMain = (id) => {
      const find = cities.find( c => c.id === id)
      setMainc([find])
    }
    

    
  return (
    <div className={style.app}>
      <header className={style.header}>
        <SearchBar
          onSearch={(ciudad) => onSearch(ciudad)}
        /> 
      </header>
      
      <main className={style.main}>
  
      <section className={style.mainCity}>
       { cities.length ?    
        // (<Card
        //   max={cities[cities.length - 1].max} 
        //   min={cities[cities.length - 1].min}
        //   name={cities[cities.length - 1].name}
        //   img={cities[cities.length - 1].img}
        //   // main={true}
        //   />) : (<span> Vacio </span>) }
        (<Card
          max={mainc[0].max} 
          min={mainc[0].min}
          name={mainc[0].name}
          img={mainc[0].img}

          wind= {mainc[0].wind}
          temp= {mainc[0].temp}
          feelsLike= {mainc[0].feelsLike}
          humidity= {mainc[0].humidity}
          pressure= {mainc[0].pressure}
          country= {mainc[0].country}
          weather= {mainc[0].weather}
          description= {mainc[0].description}
          clouds= {mainc[0].clouds}
          latitud= {mainc[0].latitud}
          longitud= {mainc[0].longitud}


          state={mainc[0].name}
           main={true}
          />) : (<span> Search a City </span>) }
      </section>
      
      
      <section className={style.otherCities}>
        <Cards
          cities={cities}
          onClose={onClose}
          toMain={toMain}
          />
      </section>
     </main>
    </div>
  );
}

export default App;
