import { RiCloseFill } from "react-icons/ri";
const ChatHeader = () => {
  return (
    <div className="flex w-full bg-gray-500 rounded-md h-[5vh] border-b-2 justify-center m-2">
      <div className="flex gap-5 items-center">
        <div className="flex gap-3 items-center justify-center"></div>
        <div className="flex items-center gap-5">
          <button className="text-neutral-100 focus:border-none focus:outline-none focus:text-white duration-300 transition-all justify-end">
            <RiCloseFill className="text-5lx" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
