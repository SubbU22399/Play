import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const HandleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-screen px-3 py-3 z-20 flex justify-between bg-gradient-to-b from-black">
      <img
        className="w-28 p-2"
        src="https://aniwatchtv.to/images/logo.png"
        alt="LOGO"
      ></img>
      {auth.currentUser && (
        <div className="flex">
          <img
            className="w-12 h-12"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4aqwoL7VUtABCU-Ue2Bv_q56l_sreWwmyD93AXMwILHNASxrMvOei2xL1MVvnslIxo28&usqp=CAU"
            alt="Prolife-logo"
          ></img>
          <button
            className="text-white text-bold cursor-pointer"
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
