
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterStyles from "../styles/Register.module.css";
import quizImage from "../assets/quizImg/quiz.jpg";

const Register = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confrimPassword: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid =
      values.name &&
      values.email &&
      values.password &&
      values.confrimPassword &&
      values.password === values.confrimPassword;

    setValid(isValid);
    setSubmitted(true);

    if (isValid) {
      // Optional: Navigate if form is valid
      navigate("/otp");
    }
  };

  return (
    <>
      <div className={RegisterStyles.main}>
        <h1 className={RegisterStyles.heading}>Quiz App</h1>
        <div className={RegisterStyles.pageContent}>
          <div className={RegisterStyles.imageContainer}>
            <img src={quizImage} width={400} height={400} alt="Quiz" />
          </div>
          <div className={RegisterStyles.form}>
            <h1 className={RegisterStyles.headingTwo}>Register Here</h1>
            <form className={RegisterStyles.registerForm} onSubmit={handleSubmit}>
              {submitted && valid && (
                <div className={RegisterStyles.successMessage}>
                  <h3>Welcome {values.name}</h3>
                  <div>Your Registration is successful!</div>
                </div>
              )}
              <label htmlFor="name">Name: </label>
              <input
                className={RegisterStyles.formField}
                type="text"
                placeholder="Enter Name"
                name="name"
                value={values.name}
                onChange={handleInputChange}
              />
              {submitted && !values.name && (
                <span id="name-error">Please enter your name</span>
              )}
              <label htmlFor="email">Email:</label>
              <input
                className={RegisterStyles.formField}
                type="email"
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={handleInputChange}
              />
              {submitted && !values.email && (
                <span id="email-error">Please enter an email address</span>
              )}
              <label htmlFor="password">Password:</label>
              <input
                className={RegisterStyles.formField}
                type="password"
                placeholder="Password"
                name="password"
                value={values.password}
                onChange={handleInputChange}
              />
              <label htmlFor="confrimPassword">Confirm Password:</label>
              <input
                className={RegisterStyles.formField}
                type="password"
                placeholder="Confirm Password"
                name="confrimPassword"
                value={values.confrimPassword}
                onChange={handleInputChange}
              />
              {submitted && values.password !== values.confrimPassword && (
                <span id="password-error">Passwords do not match</span>
              )}
              <br />
              <div className={RegisterStyles.btnContainer}>
                <button
                  className={RegisterStyles.Regbutton}
                  type="submit"
                  onClick={() => navigate("/otp")}
                >
                  Submit
                </button>
                <br />
                <button
                  className={RegisterStyles.Regbutton}
                  type="button"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
              </div>
              <label>Already registered? Then Login</label>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
