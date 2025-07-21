// src/App.jsx
import React, { useState } from "react";
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
