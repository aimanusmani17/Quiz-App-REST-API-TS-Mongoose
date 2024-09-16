import React from 'react';
import QuizListStyle from "../styles/QuizList.module.css";
import Navbar from "../components/Navbar"

const QuizList = () => {
  return (
    <>
    <Navbar />
    <div className={QuizListStyle.main}>QuizList</div>
    </>
  )
}

export default QuizList