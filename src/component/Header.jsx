import React, { useState } from 'react';
import './Header.css';

const Header = ({ setActivePage }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handlePlayClick = () => {
    setActivePage("play");
    setMenuOpen(false);
  };

  // const handleLoginClick = () => {
  //   setActivePage("login"); // Optional: handle login page too
  //   setMenuOpen(false);
  // };

  return (
    <header className="header">
      <div className="logo">
        <img src="/assets/dink.logo.png" alt="Logo" className="logo-img" />
      </div>

      {!menuOpen && (
        <button className="menu-btn" onClick={toggleMenu}>
          <span className="menu-icon">☰</span> Menu
        </button>
      )}

      {menuOpen && (
        <button className="close-btn" onClick={toggleMenu}>
          ✕
        </button>
      )}

      <nav className={`nav ${menuOpen ? 'show' : ''}`}>
        <a href="#play" onClick={handlePlayClick}>
          <span className="icon">
            <img src="/assets/play-icon.svg" alt="Play Icon" />
          </span>
          PLAY
        </a>
        <div className="divider" />
        <a href="#login" onClick={() => setActivePage("login")}>
          <span className="icon">
            <img src="/assets/login-icon.svg" alt="Login Icon" />
          </span>
          LOGIN
        </a>
      </nav>
    </header>
  );
};

export default Header;
