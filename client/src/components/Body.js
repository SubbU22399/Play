import React from "react";
import Home from "./Home";
import SignIn from "./SignIn";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import SignUp from "./SignUp";
import Playtailer from "./Playtailer";
import Chat from "../pages/Chat/Chat";
import Profile from "../pages/Profile";
const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <SignIn />,
    },
    {
      path: "/register",
      element: <SignUp />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/videotrailer",
      element: <Playtailer />,
    },
    {
      path: "/chat",
      element: <Chat />,
    },
    {
      path: "/profle",
      element: <Profile />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
