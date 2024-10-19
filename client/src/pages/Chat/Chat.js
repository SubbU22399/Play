import React from "react";
import { useNavigate } from "react-router-dom";
import ContactsContainer from "./components/ContactsContainer";
import EmptyChatContainer from "./components/EmptyChatContainer";
import ChatContainer from "./components/ChatContainer";

const Chat = () => {
  const navigate = useNavigate();
  const HandleBacktoMovies = () => {
    navigate("/home");
  };
  return (
    <div className="flex h-[100vh] text-white overflow-hidden ">
      <button className="text-black bg-orange-600" onClick={HandleBacktoMovies}>
        Movie portal
      </button>
      <ContactsContainer />
      {/* <EmptyChatContainer /> */}
      <ChatContainer />
    </div>
  );
};

export default Chat;
