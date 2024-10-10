import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { Logo_URL, Profile_Logo } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const SearchView = useSelector((store) => store.gpt.loading);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/home");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
      return () => unsubscribe();
    });
  }, [dispatch, navigate]);
  const HandleSignOut = () => {
    signOut(auth)
      .then(() => {
        // navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  const HandleGptSearchClick = () => {
    console.log("clicked");
    dispatch(toggleGptSearchView());
  };
  return (
    <div className="absolute w-screen p-6 z-20 flex justify-between bg-gradient-to-b from-black bg-black">
      <img className="w-28 p-2" src={Logo_URL} alt="LOGO"></img>
      {auth.currentUser && (
        <div className="flex justify-evenly">
          <button
            className="text-black text-bold cursor-pointer bg-slate-300 rounded-lg hover:bg-lime-600 m-2"
            onClick={HandleGptSearchClick}
          >
            {SearchView ? "HomePage" : "GPTSearch"}
          </button>
          <p className="text-red-700 text-lg font-bold justify-between m-3">
            {auth.currentUser.displayName}
          </p>
          <img
            className="w-12 h-12 rounded-full p-2"
            src={Profile_Logo}
            alt="Prolife-logo"
          ></img>
          <button
            className="text-white text-bold cursor-pointer bg-red-900 hover:text-black rounded-lg hover:bg-green-800 m-2"
            onClick={HandleSignOut}
          >
            signOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
