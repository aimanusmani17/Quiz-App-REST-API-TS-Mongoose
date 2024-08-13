import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizStyles from "../styles/CreateQuiz.module.css";
import quizImage from "../assets/quizImg/quiz create.png";

const CreateQuiz = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    category: "",
    level: "",
    privacy: "",
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
    const isValid = values.email && values.password && setValid(isValid);
    setSubmitted(true);

    if (isValid) {
      // Optional: Navigate if form is valid
      navigate("/create-quiz");
    }
  };

  return (
    <>
      <div className={QuizStyles.main}>
        <h1 className={QuizStyles.heading}>Create Quiz</h1>

        <div className={QuizStyles.pageContent}>
          <div className={QuizStyles.imageContainer}>
            <img src={quizImage} width={400} height={400} alt="Quiz" />
          </div>
          <div className={QuizStyles.formCard}>
            <form className={QuizStyles.quizForm} onSubmit={handleSubmit}>
              <label htmlFor="name">Quiz Name: </label>
              <input
                className={QuizStyles.formField}
                type="text"
                placeholder="Enter quiz name"
                name="name"
                value={values.name}
                onChange={handleInputChange}
              />
              {submitted && !values.email && (
                <span id="name-error">Please enter quiz name</span>
              )}

              <label htmlFor="name">Category: </label>
              <input
                className={QuizStyles.formField}
                type="text"
                placeholder="Quiz category"
                name="category"
                value={values.category}
                onChange={handleInputChange}
              />
              {submitted && !values.email && (
                <span id="name-error">Please enter quiz category</span>
              )}

              <label htmlFor="name">Level: </label>
              <input
                className={QuizStyles.formField}
                type="text"
                placeholder="Quiz category"
                name="level"
                value={values.level}
                onChange={handleInputChange}
              />
              {submitted && !values.email && (
                <span id="name-error">Enter quiz level:</span>
              )}

              <label htmlFor="name">Privacy: </label>
              <input
                className={QuizStyles.formField}
                type="text"
                placeholder="Quiz category"
                name="privacy"
                value={values.privacy}
                onChange={handleInputChange}
              />
              {submitted && !values.email && (
                <span id="name-error">Enter quiz privacy:</span>
              )}
              <button className={QuizStyles.btn}>Create</button>
            </form>
          </div>

          <div className={QuizStyles.questionCard}>
            <form>
              
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateQuiz;
