// src/App.jsx
import React, { useState, useEffect } from "react";
import Header from "./component/Header";
import Hero from "./component/Hero";
import StartPlaying from "./component/StartPlaying";
import WhyDink from "./component/WhyDink";
import Footer from "./component/Footer";
import Play from "./component/Play";
import Login from "./component/Login";
import "./App.css";

const App = () => {
  const [activePage, setActivePage] = useState("home"); // Default is home

  // 🌦 Weather API call
  useEffect(() => {
    const API_KEY = "04088fabe7007a2d88ed9e3a5570484c";
    const city = "Surat";

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    )
     .then((response) => response.json())
     .then((data) => {
      console.log("🌦 Weather API Response:");
      console.log("City:", data.name);
      console.log("Temperature:", data.main.temp, "°C");
      console.log("Feels Like:", data.main.feels_like, "°C");
      console.log("Weather:", data.weather[0].description);
      console.log("Humidity:", data.main.humidity, "%");
      console.log("Wind Speed:", data.wind.speed, "m/s");
      })
      .catch((error) => {
        console.error("❌ API Error:", error);
      });
  }, []);

  return (
    <>
      <Header setActivePage={setActivePage} /> {/* Pass down setter */}

      {activePage === "home" && (
        <>
          <Hero />
          <StartPlaying />
          <WhyDink />
        </>
      )}

      {activePage === "play" && <Play />}
      {activePage === "login" && <Login />}

      <Footer />
    </>
  );
};

export default App;

