import React from "react";
import { useNavigate } from "react-router-dom";
import HomeStyles from "../styles/Home.module.scss";
import  LogoutImage  from "../assets/quizImg/logout-icon.png";
import HomeCard from "../components/home/HomeCard";

const Home = () => {
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
  };
  const handleLogout = () => {
    
    localStorage.removeItem('token'); 
    localStorage.removeItem('user'); 

  
    navigate('/login');
  };

  return (
    <>
      <div className={HomeStyles.main}>
        <div className={HomeStyles.navbar}>
          <span  className={HomeStyles.heading}>Quizzfy</span>


          <div className={HomeStyles.navLinks}>
            <span onClick={() => handleNavigation('/')} className={HomeStyles.navLink}>Home</span>
            <span onClick={() => handleNavigation('/create-quiz')} className={HomeStyles.navLink}>Create Quiz</span>
            <span onClick={() => handleNavigation('/quiz-list')} className={HomeStyles.navLink}>My Quizzes</span>
            <span onClick={() => handleNavigation('/reports')} className={HomeStyles.navLink}>Quiz Report</span>
          </div>
          <img src={LogoutImage} alt="Logout" title="Logout"
          onClick={handleLogout} className={HomeStyles.logoutBtn} />
        </div>

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
              onClick={() => navigate("quiz-list")}
            />
            <HomeCard
              title="Quiz Report"
              description="See your quiz report"
              btnTitle="Get Report"
              onClick={() => navigate("")}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;