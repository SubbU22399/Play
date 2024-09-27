import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateData } from "../utils/validate";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const handleButtonclick = () => {
    console.log(email.current.value);
    console.log(password.current.value);
    validateData(email.current.value, password.current.value);
    //Sign IN Login and auth
    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        updateProfile(auth.currentUser, {
          displayName: user,
          photoURL: "https://example.com/jane-q-user/profile.jpg",
        })
          .then(() => {
            dispatch(
              addUser({
                uid: auth.uid,
                email: auth.email,
                displayName: auth.displayName,
              })
            );

            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
        navigate("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage);
      });
  };
  const handleRegister = () => {
    navigate("/register");
  };
  return (
    <div className="bg-black">
      <Header />
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" absolute w-3/12 my-56 mx-auto right-0 left-0 text-white bg-gradient-to-l from-black"
      >
        <h1 className="text-2xl mb-5 text-center font-bold text-white">
          Sign In
        </h1>
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-2 m-2 w-full bg-gray-300 text-black"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 m-2 w-full bg-gray-300 text-black"
        />
        <p className="text-red-600 text-xs text-center "> {errorMessage}</p>
        <button
          className="bg-red-700 hover:bg-blue-700  font-bold py-
        2 px-4 m-2 rounded w-full "
          onClick={handleButtonclick}
        >
          Sign In
        </button>
        <button
          className="bg-blue-700 hover:bg-red-700  font-bold py-
        2 px-4 m-2 rounded w-full"
        >
          forgot password
        </button>
        <p className="text-sm text-center">New to Play? Sign-up now</p>
        <button
          className="bg-gray-600 hover:bg-slate-800 font-bold p-2 m-2 w-full rounded-xl"
          onClick={handleRegister}
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
