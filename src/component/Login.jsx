// src/component/Login.jsx
import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-container">
      <div className="login-header">
      <button className="back-btn">
        <img src="https://dinkpickleball.in/static/media/leftArrow.31028de04d42f128becbd14961cbd42f.svg" />
      </button>
      <h2 className="login-title">LOGIN</h2>
      </div> 

      <div className="input-group">
        <label htmlFor="phone">PHONE</label>
        <div className="input-wrapper">
          <span className="icon">
            <img src="https://dinkpickleball.in/static/media/phone.4e0e38e7828ad7ee3e450f074f8d8804.svg" />
          </span>
          <input
            id="phone"
            type="tel"
            placeholder="Your phone number"
          />
        </div>
      </div>

      <div className="input-group">
        <label htmlFor="password">PASSWORD</label>
        <div className="input-wrapper">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Your password"
          />
          <span
            className="icon clickable"
            onClick={() => setShowPassword(!showPassword)}
          >
            <img src="https://dinkpickleball.in/static/media/eyeIcon.da54c989859d1f1232906be2af977a37.svg" />
          </span>
        </div>
      </div>

      <div className="options-row">
        <label className="remember custom-checkbox">
          <input type="checkbox" />
          <span className="checkmark"></span>
           REMEMBER ME
        </label>
        <a href="#" className="forgot">FORGOT PASSWORD?</a>
      </div>

      <button className="login-btn">LOGIN</button>

      <p className="signup-text">
        DON'T HAVE ACCOUNT? <a href="#" className="join-now">JOIN NOW</a>
      </p>
    </div>
  );
};

export default Login;
