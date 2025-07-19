import React, { useState } from "react";

const Weather = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const apiKey = "8884ce3c0eb5464cad0101832251904";

  const fetchWeather = async () => {
    if (!city.trim()) {
      alert("Please enter a city name.");
      return;
    }

    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
      );

      if (!response.ok) throw new Error("City not found");

      const result = await response.json();
      setData(result);
      setError("");
    } catch (err) {
      setData(null);
      setError("City not found or error fetching data.");
    }
  };

  return (
    <>
      <div className="row justify-content-center mb-4">
        <div className="col-md-6">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter city name"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <button className="btn btn-primary" onClick={fetchWeather}>
              Search
            </button>
          </div>
        </div>
      </div>

      {error && (
        <div className="text-center text-danger mb-3">
          <strong>{error}</strong>
        </div>
      )}

      {data && (
        <div id="weatherResult" className="text-center d-block">
          <h3>
            {data.location.name}, {data.location.country}
          </h3>
          <p>
            <strong>Temperature:</strong> {data.current.temp_c} °C
          </p>
          <p>
            <strong>Condition:</strong> {data.current.condition.text}
          </p>
          <p>
            <strong>Humidity:</strong> {data.current.humidity}%
          </p>
          <p>
            <strong>Wind Speed:</strong> {data.current.wind_kph} km/h
          </p>
          <img src={`https:${data.current.condition.icon}`} alt="Weather Icon" />
        </div>
      )}
    </>
  );
};

export default Weather;
