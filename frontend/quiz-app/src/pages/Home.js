import React from "react";
import { useNavigate } from "react-router-dom";
import HomeStyles from "../styles/Home.module.scss";
import Navbar from "../components/Navbar";

import HomeCard from "../components/home/HomeCard";

const Home = () => {
  const navigate = useNavigate();
  // const handleNavigation = (path) => {
  //   navigate(path);
  // };

  
    <Navbar />
 
 

  return (
    <>
    <Navbar />
      <div className={HomeStyles.main}>
        
        <div className={HomeStyles.pageHeader}>
          <div className={HomeStyles.pageContent}>
            <HomeCard
              title="Create Quiz"
              description="Create your own quiz"
              btnTitle="Create Quiz"
              onClick={() => navigate("/create-quiz")}
            />
            <HomeCard
              title="My Quizes"
              description="See quiz list"
              btnTitle="See Quiz"
              onClick={() => navigate("../quiz-list")}
            />
            <HomeCard
              title="Quiz Report"
              description="See your quiz report"
              btnTitle="Get Report"
              onClick={() => navigate("../reports")}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;