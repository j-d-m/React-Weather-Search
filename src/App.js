import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import NotFound from "./components/NotFound";
import cold from "./Assets/cold-bg.jpg";
import warm from "./Assets/warm-bg1.jpg";

const App = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [city, setCity] = useState();
  // const [temp, setTemp] = useState();
  const inputRef = useRef();
  const [notFound, setNotFound] = useState(false);

  //delaying the setting of the city to allow the user to search longer named places.
  let searchTimeOut;
  const handleInput = () => {
    if (searchTimeOut !== undefined) clearTimeout(searchTimeOut);
    searchTimeOut = setTimeout(callServerScript, 1000);

    function callServerScript() {
      setCity(inputRef.current.value);
    }

    //calling the api and setting the weather data, and preventing the api being called after every key press
  };
  useEffect(() => {
    try {
      const fetchData = async (str) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${str}&appid=${process.env.REACT_APP_API_KEY}&units=metric`;
        const res = await fetch(url);
        const data = await res.json();
        if (data.cod === "404") {
          setNotFound(true);
        } else {
          console.log(data);

          setWeatherData([data]);
        }
      };
      if (city) {
        fetchData(city);
      }
    } catch (err) {
      console.error(err);
    }
  }, [city]);

  return (
    <div
      className="App"
      //SOLVING THE BACKGROUND Conditional
      style={{
        backgroundImage:
          weatherData.length > 0 && weatherData[0].main.temp > 15
            ? `url(${warm})`
            : `url(${cold})`,
      }}
    >
      {/*checking if the the notFound state is true or false*/}
      {notFound ? (
        <NotFound setNotFound={setNotFound} />
      ) : (
        <div>
          <h1 className="title">Find Your Weather</h1>

          <input
            className="input"
            type="text"
            placeholder="enter city.."
            onChange={handleInput}
            ref={inputRef}
          />
          {/*mapping through the weather data object */}
          {weatherData.map((eachWeather, index) => (
            <div key={index}>
              {eachWeather.name && (
                <div className="display-box">
                  <h1 className="cityName">
                    {`${eachWeather.name}, ${eachWeather.sys.country}`}
                  </h1>

                  <p className="current-temp">
                    Current Temperature: {eachWeather.main.temp}°C
                  </p>

                  <p
                  //double check this! for the background display
                  // className={`${
                  //   eachWeather.main.temp_min > 15 ? "container--warm" : "App"
                  // }`}
                  >
                    Minimum Temp: {eachWeather.main.temp_min}°C
                  </p>
                  <p>Max Temp: {eachWeather.main.temp_max}°C</p>
                  <p className="feels-like">
                    Feels like: {eachWeather.main.feels_like}°C
                  </p>
                  <p className="description">
                    {eachWeather.weather[0].description}
                  </p>

                  <img
                    src={`https://openweathermap.org/img/wn/${eachWeather.weather[0].icon}@2x.png `}
                    width="120"
                    height="120"
                    alt="img"
                    className="icon"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default App;

//TO DO!

// return the input to empty after search
