import React from 'react';
import NavStyles from "../styles/Navbar.module.css";
import { useNavigate } from "react-router-dom";
import  LogoutImage  from "../assets/quizImg/logout-icon.png";

export const Navbar = () => {
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
    <div className={NavStyles.navbar}>
          <span  className={NavStyles.heading}>Quizzfy</span>


          <div className={NavStyles.navLinks}>
            <span onClick={() => handleNavigation('/')} className={NavStyles.navLink}>Home</span>
            <span onClick={() => handleNavigation('/create-quiz')} className={NavStyles.navLink}>Create Quiz</span>
            <span onClick={() => handleNavigation('/quiz-list')} className={NavStyles.navLink}>My Quizzes</span>
            <span onClick={() => handleNavigation('/reports')} className={NavStyles.navLink}>Quiz Report</span>
          </div>
          <img src={LogoutImage} alt="Logout" title="Logout"
          onClick={handleLogout} className={NavStyles.logoutBtn} />
        </div>

    </>
  )
};

export default Navbar;
