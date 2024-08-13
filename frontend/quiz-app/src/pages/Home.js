import React from "react";
import { useNavigate } from "react-router-dom";
import HomeStyles from "../styles/Home.module.css";
import HomeCard from "../components/home/HomeCard";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={HomeStyles.main}>
        <h1 className={HomeStyles.heading}>Quiz App</h1>
        <div className={HomeStyles.pageContent}>
         
        <HomeCard title="Create Quiz" description="Create your own quiz" btnTitle="Create Quiz" onClick={() => navigate("/create-quiz")}/>
        <HomeCard title="My Quizes" description="See quiz list" btnTitle="See Quiz" onClick={() => navigate("")}/>
        <HomeCard title="Quiz Report" description="See your quiz report" btnTitle="Get Report" onClick={() => navigate("")}/>
        

         
        </div>
      </div>
    </>
  );
};

export default Home;

