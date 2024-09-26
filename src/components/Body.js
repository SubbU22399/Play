import React from "react";
import Home from "./Home";
import SignIn from "./SignIn";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import SignUp from "./SignUp";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/login",
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
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
