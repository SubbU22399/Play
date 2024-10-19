import ChatHeader from "./ChatHeader";
import MessageBar from "./MesageBar";
import MessageContainer from "./MessageContainer";

const ChatContainer = () => {
  return (
    <div className="fixed top-0 h-[100vh] w-[100vw] bg-slate-900 flex flex-col md:static md:flex1">
      <ChatHeader className="p-2" />
      <MessageContainer />
      <MessageBar />
    </div>
  );
};

export default ChatContainer;
