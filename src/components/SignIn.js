import React from "react";
import Header from "./Header";

const SignIn = () => {
  return (
    <div className="bg-black">
      <Header />
      <form className=" absolute w-3/12 my-56 mx-auto right-0 left-0 text-white bg-gradient-to-l from-black">
        <h1 className="text-2xl mb-5 text-center font-bold">Sign In</h1>
        <input
          type="text"
          placeholder="Email"
          className="p-2 m-2 w-full bg-gray-300 text-white"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 m-2 w-full bg-gray-300 text-white"
        />
        <button
          className="bg-red-700 hover:bg-blue-700  font-bold py-
        2 px-4 m-2 rounded w-full"
        >
          Sign In
        </button>
        <button
          className="bg-blue-700 hover:bg-red-700  font-bold py-
        2 px-4 m-2 rounded w-full"
        >
          forgot password
        </button>
        <p className="text-sm text-center">New to Play? Sign-up now </p>
        <button
          className="bg-gray-600 hover:bg-slate-800 font-bold p-2 m-2 w-full rounded-xl"
          onClick={() => (window.location.href = "/register")}
        >
          Register
        </button>
      </form>
      <img
        src="https://images8.alphacoders.com/118/1185382.jpg"
        alt="Background"
      />
    </div>
  );
};

export default SignIn;
