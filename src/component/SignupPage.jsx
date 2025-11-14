import React, { useState } from "react";
import "./SignupPage.css";

const SignupPage = ({ setActivePage }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    password: "",
    terms: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  // ---------------------------
  // REAL-TIME VALIDATION RULES
  // ---------------------------
  const validateField = (name, value) => {
    let temp = { ...errors };

    switch (name) {
      case "fullName":
        temp.fullName = value.trim() ? "" : "Full name is required.";
        break;

      case "email":
        if (!value) temp.email = "Email is required.";
        else if (!/^\S+@\S+\.\S+$/.test(value))
          temp.email = "Enter a valid email.";
        else temp.email = "";
        break;

      case "phone":
        if (!value) temp.phone = "Phone number is required.";
        else if (value.length !== 10)
          temp.phone = "Phone number must be 10 digits.";
        else temp.phone = "";
        break;

      case "dob":
        temp.dob = value ? "" : "Date of birth is required.";
        break;

      case "password":
        if (!value) temp.password = "Password is required.";
        else if (value.length < 6)
          temp.password = "Password must be at least 6 characters.";
        else temp.password = "";
        break;

      case "terms":
        temp.terms = value ? "" : "You must agree to the terms.";
        break;

      default:
        break;
    }

    setErrors(temp);
  };

  // ---------------------------
  // HANDLE INPUT CHANGE
  // ---------------------------
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    const newValue = type === "checkbox" ? checked : value;

    setFormData({ ...formData, [name]: newValue });

    validateField(name, newValue); // Live validation
  };

  
  const validateOnSubmit = () => {
    let temp = {};

    if (!formData.fullName.trim()) temp.fullName = "Full name is required.";
    if (!formData.email) temp.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email))
      temp.email = "Enter a valid email.";

    if (!formData.phone) temp.phone = "Phone number is required.";
    else if (formData.phone.length !== 10)
      temp.phone = "Phone number must be 10 digits.";

    if (!formData.dob) temp.dob = "Date of birth is required.";
    if (!formData.gender) temp.gender = "Please select your gender.";

    if (!formData.password) temp.password = "Password is required.";
    else if (formData.password.length < 6)
      temp.password = "Password must be at least 6 characters.";

    if (!formData.terms) temp.terms = "You must agree to the terms.";

    setErrors(temp);

    return Object.keys(temp).length === 0;
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateOnSubmit()) {
      alert("Signup Successful!");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">

        {/* HEADER */}
        <div className="signup-header">
          <button className="back-btn" onClick={() => setActivePage("Hero")}>
            <img src="/assets/leftarrow.svg" alt="Leftarrow" />
          </button>
          <h1 className="signup-title">SIGNUP</h1>
        </div>

          <form className="form-section" onSubmit={handleSubmit}>
          <h3 className="section-title">BASIC DETAILS</h3>

<div className="form-group floating">
  <span className="form-icon">
    <i className="fa-regular fa-user"></i>
  </span>
  <label className="float-label">Full Name</label>

  <input
    name="fullName"
    type="text"
    placeholder="Your full name"
    value={formData.fullName}
    onChange={handleChange}
    className={errors.fullName ? "invalid" : ""}
  />

  {errors.fullName && <p className="error">{errors.fullName}</p>}
</div>

{/* EMAIL */}
<div className="form-group floating">
  <span className="form-icon">
    <i className="fa-regular fa-envelope"></i>
  </span>
  <label className="float-label">Email</label>

  <input
    name="email"
    type="email"
    placeholder="Your email"
    value={formData.email}
    onChange={handleChange}
    className={errors.email ? "invalid" : ""}
  />

  {errors.email && <p className="error">{errors.email}</p>}
</div>

{/* PHONE */}
<div className="form-group floating">
  <span className="form-icon">
    <i className="fa-solid fa-phone"></i>
  </span>
  <label className="float-label">Phone</label>

  <input
    name="phone"
    type="tel"
    maxLength={10}
    placeholder="Your phone number"
    value={formData.phone}
    onChange={handleChange}
    className={errors.phone ? "invalid" : ""}
  />

  {errors.phone && <p className="error">{errors.phone}</p>}
</div>


          {/* DOB */}
          <h3 className="section-title">BIRTHDATE</h3>
          <div className="form-group">
            <label></label>
            <input
              name="dob"
              type="date"
              value={formData.dob}
              onChange={handleChange}
              className={errors.dob ? "invalid" : ""}
            />
            {errors.dob && <p className="error">{errors.dob}</p>}
          </div>

          {/* GENDER */}
          <h3 className="section-title">GENDER</h3>
          <div className="gender-buttons">
            {["Male", "Female", "Other"].map((g) => (
              <button
                key={g}
                type="button"
                className={formData.gender === g ? "active-gender" : ""}
                onClick={() => {
                  setFormData({ ...formData, gender: g });
                  setErrors({ ...errors, gender: "" }); // remove error instantly
                }}
              >
                {g}
              </button>
            ))}
          </div>
          {errors.gender && <p className="error">{errors.gender}</p>}

          {/* PASSWORD */}
          <h3 className="section-title">PASSWORD</h3>
          <div className="form-group password-group">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Your password"
              value={formData.password}
              onChange={handleChange}
              className={errors.password ? "invalid" : ""}
            />
            <span
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>
          {errors.password && <p className="error">{errors.password}</p>}

          {/* TERMS */}
          <div className="terms">
            <input
              name="terms"
              type="checkbox"
              checked={formData.terms}
              onChange={handleChange}
              id="terms"
            />
            <label htmlFor="terms">
              I agree to the{" "}
              <a href="#" className="terms-link">Terms and Conditions.</a>
            </label>
          </div>
          {errors.terms && <p className="error">{errors.terms}</p>}

          {/* BUTTON */}
          <button className="signup-btn" type="submit">
            SIGNUP
          </button>

          <p className="signin-text">
            Already have an account?{" "}
            <a href="#" className="signin-link">Sign in!</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
