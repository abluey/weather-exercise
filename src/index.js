import React from 'react';
import ReactDOM from 'react-dom';
import './styling/index.scss';
import Weather from './components/Weather';
import SearchBar from './components/Search';
// import CityButtons from './components/CityButtons';


ReactDOM.render(
  <React.StrictMode>
    <SearchBar />
    <Weather />
  </React.StrictMode>,
  document.getElementById('root')
);
