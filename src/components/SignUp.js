import React, { useRef, useState } from "react";
import Header from "./Header";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const SignUp = () => {
  const [errorMessage1, setErrorMessage] = useState(null);
  // const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  // const Mobile = useRef(null);
  const handleClick = () => {
    createUserWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage);
      });
  };
  return (
    <div className="bg-black">
      <Header />
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" absolute w-3/12 my-56 mx-auto right-0 left-0  bg-gradient-to-l from-black"
      >
        <h1 className="text-2xl mb-5 text-center font-bold">Register</h1>
        {/* <input
          ref={name}
          type="text"
          placeholder="Full Name"
          className="p-2 m-2 bg-gray-300 w-full"
        ></input> */}

        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-2 m-2 w-full bg-gray-300 "
        />

        {/* <input
          ref={Mobile}
          type="text"
          placeholder="Mobile No"
          className="p-2 m-2 w-full bg-gray-300 "
        ></input> */}

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 m-2 w-full bg-gray-300 text-white"
        />
        {/* <p className="text-red-500 text-xs m-2 text-center">{errorMessage}</p> */}

        <button
          className="bg-red-700 hover:bg-blue-700  font-bold py-
    2 px-4 m-2 rounded w-full"
          onClick={handleClick}
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
