import React,{useState, useEffect} from "react";
import HomeStyles from "../../styles/Home.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const HomeCard = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    axios
    .get("https://localhost:3002/")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
   
  
  }, [])


  return (
    <>
    <div className={HomeStyles.cards}>
      <h1 className={HomeStyles.headingTwo}>{props.title}</h1>
      <p>{props.description}</p>
      <button className={HomeStyles.btn} onClick={props.onClick}>
        {props.btnTitle}
      </button>
    </div>

   
    
    </>
  );
};

export default HomeCard;
