import React from "react";
import HomeStyles from "../../styles/Home.module.css";
import { useNavigate } from "react-router-dom";

const HomeCard = (props) => {
    const navigate = useNavigate();
  return (
    <div className={HomeStyles.cards}>
      <h1 className={HomeStyles.headingTwo}>{props.title}</h1>
      <p>{props.description}</p>
      <button
        className={HomeStyles.btn}
        onClick={props.onClick}
      >{props.btnTitle}
        
      </button>
    </div>
  );
};

export default HomeCard;
