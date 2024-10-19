import React, { useRef, useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import Header from "./Header";
import { validateData } from "../utils/validate";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  // const Mobile = useRef(null);
  const handleClick = () => {
    console.log(email.current.value);
    console.log(password.current.value);
    const message = validateData(email.current.value, password.current.value);
    setErrorMessage(message);
    createUserWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        updateProfile(user, {
          displayName: name.current.value,
          photoURL: "https://example.com/jane-q-user/profile.jpg",
        })
          .then(() => {
            const { uid, displayName, email } = auth.currentUser;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
              })
            );
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage);
      });
  };
  const handleGoBackToSignIn = () => {
    navigate("/");
  };
  return (
    <div className="bg-black">
      {!handleClick && <Header />}
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" absolute w-3/12 my-56 mx-auto right-0 left-0  bg-gradient-to-l from-black"
      >
        <h1 className="text-2xl mb-5 text-center font-bold text-white">
          Register
        </h1>
        <input
          ref={name}
          type="text"
          placeholder="Full Name"
          className="p-2 m-2 bg-gray-300 w-full"
        ></input>

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
        <p className="text-red-500 text-xs m-2 text-center">{errorMessage}</p>

        <button
          className="bg-red-700 hover:bg-blue-700  font-bold py-
    2 px-4 m-2 rounded w-full"
          onClick={handleClick}
        >
          Sign Up
        </button>
        <div className="flex p-2">
          <p className="text-white text-center m-2">
            {"Already have an account? "}
          </p>
          <p
            className=" text-red-500 cursor-pointer hover:text-amber-600 m-2"
            onClick={handleGoBackToSignIn}
          >
            {"Sign In"}
          </p>
        </div>
      </form>
      <img
        src="https://images8.alphacoders.com/118/1185382.jpg"
        alt="Background"
      />
    </div>
  );
};

export default SignUp;
