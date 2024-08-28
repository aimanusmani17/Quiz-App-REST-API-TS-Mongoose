import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuizStyles from "../styles/CreateQuiz.module.css";
import quizImage from "../assets/quizImg/quiz create.png";
import axios from "axios";

const CreateQuiz = () => {
  const navigate = useNavigate();
  // useEffect(() => {
  //   axios
  //   .get("https://localhost:3002/")
  //   .then((res) => console.log(res))
  //   .catch((err) => console.log(err));
   
  
  // }, [])
  
  

  const [values, setValues] = useState({
    name: "",
    category: "",
    level: "",
    privacy: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleInputChange = (event) => {
    
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
             
              {/* <input
                className={QuizStyles.formField}
                type="text"
                placeholder="Quiz category"
                name="category"
                value={values.category}
                onChange={handleInputChange}
              /> */}
              {submitted && !values.email && (
                <span id="name-error">Please enter quiz category</span>
              )}

              <label htmlFor="name">Level: </label>
              <select  value={values.level} onChange={handleInputChange}>
             
             <option  value="option1">Easy</option>
             <option  value="option2">Medium</option>
             <option  value="option3">Difficult</option>
         </select>
              {/* <input
                className={QuizStyles.formField}
                type="text"
                placeholder="Quiz category"
                name="level"
                value={values.level}
                onChange={handleInputChange}
              /> */}
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

         
        </div>
        <div className={QuizStyles.questionCard}>
            <form>
              <div className={QuizStyles.questionaire}>
                <div className={QuizStyles.inputField}>
                  <div>
                <label>Ques: 1</label>
                </div>
                {/* <input
                  className={QuizStyles.formField}
                  type="number"
                  placeholder="00"
                  name="number"
                  value={values.number}
                  onChange={handleInputChange}
                /> */}
                <div>
                 {/* <label>Question:</label> */}
                <input
                  className={QuizStyles.quesField}
                  type="text"
                  placeholder="Write your question here"
                  name="text"
                  value={values.name}
                  onChange={handleInputChange}
                />
                </div>
              

              </div>

              <div className={QuizStyles.optionRowOne}>
               
                <label>1.</label>
                <input
                  className={QuizStyles.formField}
                  type="text"
                  placeholder="option 1"
                  name="text"
                  value={values.name}
                  onChange={handleInputChange}
                />
                <label>2.</label>
                <input
                  className={QuizStyles.formField}
                  type="text"
                  placeholder="option 2"
                  name="text"
                  value={values.name}
                  onChange={handleInputChange}
                />
                </div>

                <div className={QuizStyles.optionRowOne}>
                <label>3.</label>
                <input
                  className={QuizStyles.formField}
                  type="text"
                  placeholder="option 3"
                  name="text"
                  value={values.name}
                  onChange={handleInputChange}
                />
                <label>4.</label>
                <input
                  className={QuizStyles.formField}
                  type="text"
                  placeholder="option 4"
                  name="text"
                  value={values.name}
                  onChange={handleInputChange}
                />
                </div>
              </div>
            </form>
          </div>

      </div>
    </>
  );
};

export default CreateQuiz;
