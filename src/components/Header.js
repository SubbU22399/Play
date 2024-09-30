import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { Logo_URL, Profile_Logo } from "../utils/constant";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
  return (
    <div className="absolute w-screen p-8 z-20 flex justify-between bg-gradient-to-b from-black bg-black">
      <img className="w-28 p-2" src={Logo_URL} alt="LOGO"></img>
      {auth.currentUser && (
        <div className="flex">
          <p className="text-red-700 text-lg font-bold justify-between m-3">
            {auth.currentUser.displayName}
          </p>
          <img
            className="w-12 h-12 rounded-full"
            src={Profile_Logo}
            alt="Prolife-logo"
          ></img>
          <button
            className="text-white text-bold cursor-pointer hover:bg-red-900 hover:text-black rounded-lg"
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
