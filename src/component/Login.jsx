import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validateForm = () => {
    const newErrors = {};
    if (!phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = "Phone number must be 10 digits only.";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      localStorage.setItem("loginData", JSON.stringify({ phone, password }));
      setSuccessMessage("🎉 Login Successful!");
      setPhone("");
      setPassword("");
    }
  };

  const handlePhoneChange = (e) => {
    const input = e.target.value;
    if (/^\d*$/.test(input)) {
      setPhone(input);
    }
  };

  return (
    <div className="login-container">
      {/* ✅ Success Box at Top */}
      {successMessage && (
        <div className="top-success-box">
          <span>{successMessage}</span>
          <button className="close-btn" onClick={() => setSuccessMessage("")}>
            &times;
          </button>
        </div>
      )}
      
      <div className="login-header">
        <button className="back-btn">
          <img src="https://dinkpickleball.in/static/media/leftArrow.31028de04d42f128becbd14961cbd42f.svg" />
        </button>
        <h2 className="login-title">LOGIN</h2>
      </div>

      <form onSubmit={handleSubmit}>
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
              value={phone}
              onChange={handlePhoneChange}
              maxLength="10"
            />
          </div>
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>

        <div className="input-group">
          <label htmlFor="password">PASSWORD</label>
          <div className="input-wrapper">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="icon clickable"
              onClick={() => setShowPassword(!showPassword)}
            >
              <img src="https://dinkpickleball.in/static/media/eyeIcon.da54c989859d1f1232906be2af977a37.svg" />
            </span>
          </div>
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        <div className="options-row">
          <label className="remember custom-checkbox">
            <input type="checkbox" />
            <span className="checkmark"></span>
            REMEMBER ME
          </label>
          <a href="#" className="forgot">FORGOT PASSWORD?</a>
        </div>

        <button type="submit" className="login-btn">LOGIN</button>
      </form>

      <p className="signup-text">
        DON'T HAVE ACCOUNT? <a href="#" className="join-now">JOIN NOW</a>
      </p>
    </div>
  );
};

export default Login;
