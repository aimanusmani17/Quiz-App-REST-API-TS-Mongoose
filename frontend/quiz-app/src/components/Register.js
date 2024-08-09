import React from 'react'
import { useNavigate }from "react-router-dom"

const Register = () => {
  const navigate = useNavigate();
  return (
  <>
  <div className="main">Quiz App</div>
  <button onClick={() =>navigate("/")}>Submit</button>
  <button onClick={() =>navigate("/login")}>Login</button>
  
  
  </>
  )
}

export default Register