import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./pages/Home";
import CreateQuiz from "./components/CreateQuiz";
import OtpVerify from "./components/OtpVerify";
import React, { useState, useEffect } from "react";
import QuizList from "./components/QuizList";
import Reports from "./components/Reports";
import Navbar from "./components/Navbar";


function App() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = "#2b71a4";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
  const handleLogin = () => {
    // Call this function when login is successful
    setShowNavbar(true);
  };
 

  const [token, setToken] = useState("");
  console.log(token);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/create-quiz",
      element: <CreateQuiz />,
    },
    {
      path: "/otp",
      element: <OtpVerify />,
    },
    {
      path: "/quiz-list",
      element: <QuizList />,
    },
    {
      path: "/reports",
      element: <Reports />,
    },
  ]);
  return (
    <>
     {/* <Navbar/> */}
    
      <RouterProvider
       router={router} />
     
      
    </>
  );
}

export default App;