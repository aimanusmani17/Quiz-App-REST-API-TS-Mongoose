import React, { useState } from "react";
import OtpStyles from "../styles/Otp.module.css";
import { useNavigate } from "react-router-dom";

const OtpVerify = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    otp: "",
  });

  const [valid, setValid] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
    const isValid = values.otp;

    setValid(isValid);
    setSubmitted(true);

    if (isValid) {
      // Optional: Navigate if form is valid
      navigate("/login");
    }
  };

  return (
    <>
      <div className={OtpStyles.main}>
        <div className={OtpStyles.formDiv}>
          <form className={OtpStyles.form} onSubmit={handleSubmit}>
            {submitted && valid && (
              <div className={OtpStyles.successMessage}>
                <div>You entered correct Otp!</div>
              </div>
            )}
            <h1>Verify OTP </h1>
            <h6>Otp has been sent on your email</h6>
            <label htmlFor="otp">Enter Otp: </label>
            <input
              className={OtpStyles.formField}
              type="number"
              placeholder="Enter OTP"
              name="otp"
              value={values.otp}
              onChange={handleInputChange}
            />
            <br></br>
            <div className={OtpStyles.btn}>
              <button
                className={OtpStyles.btn}
                type="submit"
                onClick={() => navigate("")}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default OtpVerify;
