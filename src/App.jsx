// src/App.jsx
import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { useState } from "react";
import Header from "./component/Header";
import Hero from "./component/Hero";
import StartPlaying from "./component/StartPlaying";
import WhyDink from "./component/WhyDink";
import Footer from "./component/Footer";
import Play from "./component/Play";
import Login from "./component/Login";
import SignupPage from "./component/SignupPage";
import "./App.css";

const App = () => {
  const [activePage, setActivePage] = useState("home"); // Default is home

  return (
    <>
      <Header setActivePage={setActivePage} /> {/* Pass down setter */}

      {activePage === "home" && (
        <>
         <Hero setActivePage={setActivePage} /> 
          <StartPlaying />
          <WhyDink />
        </>
      )}

      {activePage === "play" && <Play />}
      {activePage === "login" && <Login />}
      {activePage === "signupPage" && <SignupPage setActivePage={setActivePage} />}

      <Footer />
    </>
  );
};

export default App;

