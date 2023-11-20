import './App.css';
import Login from './pages/login';
import Register from './pages/register';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
//import HeaderComp from './components/header';
import React from 'react';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


function App() {
// TODO code

  const router = createBrowserRouter([
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "register/",
        element: <Register />,
      },
    ]);
    
    ReactDOM.createRoot(document.getElementById("root")).render(
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
      
    );
  
    const firebaseConfig = {
      apiKey: "AIzaSyAPPk_Giih5S-nuuXUH5Tzp_q2Qv0Bsrz4",
      authDomain: "miboo-22ae3.firebaseapp.com",
      projectId: "miboo-22ae3",
      storageBucket: "miboo-22ae3.appspot.com",
      messagingSenderId: "89528995467",
      appId: "1:89528995467:web:77b6b3dcb3a563275d8e8e",
      measurementId: "G-BZBVVE3H2E"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    console.log(app);
    console.log(analytics);
};

export default App;