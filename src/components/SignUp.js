import React from "react";
import Header from "./Header";

const SignUp = () => {
  return (
    <div className="bg-black">
      <Header />
      <form className=" absolute w-3/12 my-56 mx-auto right-0 left-0 text-white bg-gradient-to-l from-black">
        <h1 className="text-2xl mb-5 text-center font-bold">Register</h1>
        <input
          type="text"
          placeholder="FIRST NAME"
          className="p-2 m-2 bg-gray-300 w-full"
        ></input>
        <input
          type="text"
          placeholder="MIDDLE NAME"
          className="p-2 m-2 bg-gray-300 w-full"
        ></input>
        <input
          type="text"
          placeholder="LAST NAME"
          className="p-2 m-2 bg-gray-300 w-full"
        ></input>
        <input
          type="text"
          placeholder="Email"
          className="p-2 m-2 w-full bg-gray-300 text-white"
        />
        <input
          type="text"
          placeholder="Mobile No"
          className="p-2 m-2 w-full bg-gray-300 text-white"
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="p-2 m-2 w-full bg-gray-300 text-white"
        />
        <input
          type="password"
          placeholder="Re-Enter Password"
          className="p-2 m-2 w-full bg-gray-300 text-white"
        />
        <button
          className="bg-red-700 hover:bg-blue-700  font-bold py-
    2 px-4 m-2 rounded w-full"
        >
          Sign Up
        </button>
      </form>
      <img
        src="https://images8.alphacoders.com/118/1185382.jpg"
        alt="Background"
      />
    </div>
  );
};

export default SignUp;
