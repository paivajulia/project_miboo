import './App.css';
import Login from './pages/login';
import Register from './pages/register';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HeaderComp from './components/header';
import React from 'react';



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

};

export default App;