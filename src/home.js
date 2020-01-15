/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { findDOMNode } from "react-dom";

function home() {
  const [currentWeather, setWeather] = useState([]);
  //   const [location, setLocation] = useState({
  //     lat: "",
  //     lon: ""
  //   });

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getWeather);
      //userLocation.coords.latitude & userLocation.coords.longitude
    } else {
      console.error("not happening");
    }
  }

  const getWeather = async userLocation => {
    console.log(userLocation.coords);
    // setLocation(prevValue => {
    //   return {
    //     ...prevValue,

    //     lat: `${userLocation.coords.latitude}`,
    //     lon: `${userLocation.coords.latitude}`
    //   };
    // });
    // console.log(location);
    const fetchItems = await fetch(
      `http://api.openweathermap.org/data/2.5/find?lat=${userLocation.coords.latitude}&lon=${userLocation.coords.longitude}&cnt=1&APPID=3b55197b90c59c6985027f1db1eed531`
    );
    const weather = await fetchItems.json();
    console.log(weather.list[0]);
    setWeather(weather.list[0]);
    console.log(weather.list[0]);
  };
  console.log(currentWeather);
  return (
    <div>
      <h1>{currentWeather.name}</h1>
      <h1>{currentWeather.coord.lat}</h1>

      {/* <h2>{weather.main.temp}</h2> */}
      {/* <h3>{weather.list[0].main}</h3>  */}
      {/* <p>{currentWeather.weather[0].description}</p> */}
      {/* <p>{currentWeather.weather[0].icon}</p> */}
      <button onClick={getLocation}>weather or not</button>
    </div>
  );
}

export default home;
