import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../styling/weather.scss';

const Weather = () => {

  const [weatherLondon, updateWeatherLon] = useState(null)
  const [weatherLonFive, updateWeatherLonFive] = useState(null)

  const [weatherButtonName, updateWeatherButtonName] = useState(null)

  const changeWeatherButtonName = (name) => {
    updateWeatherButtonName(name)
  }
  const [weatherButton, updateWeatherButton] = useState(null)

  //search bar
  const [weather, updateWeather] = useState(null)

  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');

  useEffect(() => {
    //search bar weather
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`).then(res => {
      updateWeather(res.data.weather[0].description)
    })

    //london weather
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=London&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`).then(res => {
      updateWeatherLon(res.data.weather[0].description)
    })

    //london 5day weather forecast
    // axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=London&appid=${process.env.REACT_APP_WEATHER_API_KEY}`).then(res => {
    //   updateWeatherLonFive("1. " +
    //     res.data.list[0].weather[0].description + ", 2. " +
    //     res.data.list[1].weather[0].description + ", 3. " +
    //     res.data.list[2].weather[0].description + ", 4. " +
    //     res.data.list[3].weather[0].description + ", 5. " +
    //     res.data.list[4].weather[0].description)
    // })
    
  }, [])

  useEffect(() => {
    //button weather
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${weatherButtonName}&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`).then(res => {
      updateWeatherButton(res.data.weather[0].description)
    })
  }, [weatherButtonName])


  if (weatherButtonName) {
    return (
      <div data-testid="weather" className="weather">
        <h1>{weatherButtonName}</h1>
        The current weather in {weatherButtonName} is: {weatherButton}
        <br />
        <br />
        <div className="city-buttons">
          <button onClick={() => changeWeatherButtonName("London")}>London</button>
          <button onClick={() => changeWeatherButtonName("Hong Kong")}>Hong Kong</button>
          <button onClick={() => changeWeatherButtonName("Sydney")}>Sydney</button>
        </div>
      </div>
    )
  }
  else if (query) {
    return (
      <div data-testid="weather" className="weather">
        <h1>{query}</h1>
        The current weather in {query} is: {weather}
        <br />
        <br />
        <div className="city-buttons">
          <button onClick={() => changeWeatherButtonName("London")}>London</button>
          <button onClick={() => changeWeatherButtonName("Hong Kong")}>Hong Kong</button>
          <button onClick={() => changeWeatherButtonName("Sydney")}>Sydney</button>
        </div>
      </div>
    );
  }
  else {
    return (
      <div data-testid="weather" className="weather">
        <h1>Weather</h1>
        The current weather in London is: {weatherLondon}
        <br />
        <br />
        {query ? "The current weather in " + query + " is: " + weather : "Search a city for the weather!"}
        <br />
        <br />
        {/* The 5-day forecast in London is: {weatherLonFive}
        */}
        <div className="city-buttons">
          <button onClick={() => changeWeatherButtonName("London")}>London</button>
          <button onClick={() => changeWeatherButtonName("Hong Kong")}>Hong Kong</button>
          <button onClick={() => changeWeatherButtonName("Sydney")}>Sydney</button>
        </div>
      </div>
    );
  }
}

export default Weather;
