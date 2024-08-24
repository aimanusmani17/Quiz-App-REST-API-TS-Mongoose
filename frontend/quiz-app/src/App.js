import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Register from './components/Register';
import Login from './components/Login';
import Home from './pages/Home';
import CreateQuiz from './components/CreateQuiz';
import OtpVerify from './components/OtpVerify';
import React, { useState, useEffect } from "react";


function App() {

  const [token,setToken] = useState("");
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
    }
  ]);
  return (
  <>
  <RouterProvider router={router} />
  <button onClick={ () => setToken("AIman")}>Add</button>
  </>
)

    
  
}

export default App;
