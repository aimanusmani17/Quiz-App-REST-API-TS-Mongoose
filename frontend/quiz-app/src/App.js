import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import CreateQuiz from './components/CreateQuiz';
import OtpVerify from './components/OtpVerify';

function App() {

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
  return <RouterProvider router={router} />
    
  
}

export default App;
