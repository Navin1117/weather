import React from "react";
import Weather from "./Weather";
import "./style.css";

const App = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">🌤️ Weather App</h2>
      <Weather />
    </div>
  );
};

export default App;
