import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizStyles from "../styles/CreateQuiz.module.css";
import Navbar from "../components/Navbar"

const CreateQuiz = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    category: "",
    level: "",
    privacy: "",
    allowedUser: "",
    passPercent: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const [quesList, setQuesList] = useState([{ question: "", options: [{ option: "" }] }]);

  const handleAddQues = () => {
    setQuesList([...quesList, { question: "", options: [{ option: "" }] }]);
  };

  const handleRemoveQues = (index) => {
    const qList = [...quesList];
    qList.splice(index, 1);
    setQuesList(qList);
  };

  const handleOptionChange = (e, qIndex, oIndex) => {
    const { value } = e.target;
    const updatedQuesList = [...quesList];
    updatedQuesList[qIndex].options[oIndex].option = value;
    setQuesList(updatedQuesList);
  };

  const handleAddOption = (qIndex) => {
    const updatedQuesList = [...quesList];
    if (updatedQuesList[qIndex].options.length < 4) {
      updatedQuesList[qIndex].options.push({ option: "" });
      setQuesList(updatedQuesList);
    }
  };

  const handleRemoveOption = (qIndex, oIndex) => {
    const updatedQuesList = [...quesList];
    updatedQuesList[qIndex].options.splice(oIndex, 1);
    setQuesList(updatedQuesList);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleQuestionChange = (e, index) => {
    const { value } = e.target;
    const updatedQuesList = [...quesList];
    updatedQuesList[index].question = value;
    setQuesList(updatedQuesList);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Validate form fields
    if (
      values.name &&
      values.category &&
      values.level &&
      values.privacy &&
      values.allowedUser &&
      values.passPercent
    ) {
      setValid(true);
     
      // navigate("/create-quiz"); // Optional navigation
    } else {
      setValid(false);
    }
  };

  return (
    <>
    <Navbar />
      <div className={QuizStyles.main}>
        <h1 className={QuizStyles.heading}>Create Quiz</h1>

        <div className={QuizStyles.pageContent}>
          <div className={QuizStyles.pageHeader}>
            <div className={QuizStyles.formCard}>
              <form className={QuizStyles.quizForm} onSubmit={handleSubmit}>
                <label htmlFor="name">Quiz Name: </label>
                <input
                  className={QuizStyles.formField}
                  type="text"
                  placeholder="Enter quiz name"
                  name="name"
                  required
                  value={values.name}
                  onChange={handleInputChange}
                />
                {submitted && !values.name && (
                  <span id="name-error">Please enter quiz name</span>
                )}

                <label htmlFor="category">Category: </label>
                <select
                  name="category"
                  value={values.category}
                  onChange={handleInputChange}
                >
                  <option value="">Choose Option</option>
                  <option value="option1">Exam</option>
                  <option value="option2">Test</option>
                  <option value="option3">Difficult</option>
                </select>
                {submitted && !values.category && (
                  <span id="category-error">Please enter quiz category</span>
                )}

                <label htmlFor="level">Level: </label>
                <select
                  name="level"
                  value={values.level}
                  onChange={handleInputChange}
                >
                  <option value="">Choose Option</option>
                  <option value="option1">Easy</option>
                  <option value="option2">Medium</option>
                  <option value="option3">Difficult</option>
                </select>
                {submitted && !values.level && (
                  <span id="level-error">Enter quiz level:</span>
                )}

                <label htmlFor="privacy">Privacy: </label>
                <select
                  name="privacy"
                  value={values.privacy}
                  onChange={handleInputChange}
                >
                  <option value="">Choose Option</option>
                  <option value="private">Private</option>
                  <option value="public">Public</option>
                </select>
                {submitted && !values.privacy && (
                  <span id="privacy-error">Enter quiz privacy:</span>
                )}

                <label htmlFor="passPercent">Passing Percentage: </label>
                <input
                  className={QuizStyles.formField}
                  type="text"
                  placeholder="Enter your passing percentage"
                  name="passPercent"
                  required
                  value={values.passPercent}
                  onChange={handleInputChange}
                />
                {submitted && !values.passPercent && (
                  <span id="passPercent-error">
                    Enter the passing percentage:
                  </span>
                )}

                <label htmlFor="allowedUser">Number of Allowed Users: </label>
                <input
                  className={QuizStyles.formField}
                  type="text"
                  placeholder="Enter number of allowed users"
                  name="allowedUser"
                  required
                  value={values.allowedUser}
                  onChange={handleInputChange}
                />
                {submitted && !values.allowedUser && (
                  <span id="allowedUser-error">
                    Enter the number of allowed users:
                  </span>
                )}

                <button type="submit" className={QuizStyles.btn}>
                  Create
                </button>
              </form>
            </div>

            {/* Render quesList only if form is valid */}
            {valid &&
              quesList.map((q, index) => (
                <div key={index} className={QuizStyles.questionCard}>
                  <form>
                    <div className={QuizStyles.questionaire}>
                      <div className={QuizStyles.inputField}>
                        <div>
                          <label>Question. {index + 1}</label>
                        </div>

                        <div>
                          <input
                            type="text"
                            className={QuizStyles.quesField}
                            placeholder="Write your question here"
                            name="question"
                            required
                            value={q.question}
                            onChange={(e) => handleQuestionChange(e, index)}
                          />
                        </div>
                      </div>
                      {/* Render Options */}
                      {q.options.map((opt, oIndex) => (
                        <div key={oIndex} className={QuizStyles.options}>
                          <input
                            className={QuizStyles.options}
                            type="text"
                            placeholder={`Option ${oIndex + 1}`}
                            name="option"
                            value={opt.option}
                            onChange={(e) => handleOptionChange(e, index, oIndex)}
                          />
                          {q.options.length !== 1 && (
                            <button
                              type="button"
                              className={QuizStyles.rmvBtn}
                              onClick={() => handleRemoveOption(index, oIndex)}
                            >
                              Remove
                            </button>
                          )}
                        </div>
                      ))}
                      {q.options.length < 4 && (
                        <button
                          type="button"
                          className={QuizStyles.addBtn}
                          onClick={() => handleAddOption(index)}
                        >
                          Add Option
                        </button>
                      )}
                    </div>
                  </form>

                  <button
                    type="button"
                    className={QuizStyles.rmvQuesBtn}
                    onClick={() => handleRemoveQues(index)}
                  >
                    Delete
                  </button>
                </div>
              ))}
              <div className={QuizStyles.addQdiv}>
            {quesList.length < 10 && (
              <button type="button"
              className={QuizStyles.addQue} onClick={handleAddQues}>
                Add Question
              </button>
            )}
            </div>
            <button type="button" className={QuizStyles.btnCreate}>Create Quiz</button>
          </div>
          
        </div>
       
      </div>
    </>
  );
};

export default CreateQuiz;
