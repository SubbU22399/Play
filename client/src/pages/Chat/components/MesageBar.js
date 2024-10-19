import { useState } from "react";
import { GrAttachment, GrCamera } from "react-icons/gr";
import { IoSend } from "react-icons/io5";
import { Button } from "@mui/material";
import { RiEmojiStickerLine } from "react-icons/ri";
const MessageBar = () => {
  const [message, setMessage] = useState("");
  const HandleSend = () => {};
  return (
    <div className="flex h-[8vh] bg-gray-400 justify-centern items-center mb-3 px-4 gap-6 rounded-md m-2">
      <div className="flex-1 flex bg-slate-700 rounded-md items-center gap-5 pr-5">
        <input
          type="text"
          placeholder="Type your Mesag here"
          className="flex-1 p-2 rounded-md bg-transparent focus:border-none focus:outline-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="text-neutral-100 focus:border-none focus:outline-none focus:text-white duration-300 transition-all justify-end">
          <GrAttachment />
        </button>
        <div>
          <button className="text-neutral-100 focus:border-none focus:outline-none focus:text-white duration-300 transition-all justify-end">
            <GrCamera />
          </button>
        </div>
        <div>
          <button className="text-neutral-100 focus:border-none focus:outline-none focus:text-white duration-300 transition-all justify-end">
            <RiEmojiStickerLine />
          </button>
        </div>
      </div>
      <Button
        variant="contained"
        onClick={HandleSend}
        className="hover:bg-green-600 focus:border-none focus:outline-none focus:text-white duration-300 transition-all justify-end"
      >
        <IoSend className="text-black text-xl" />
      </Button>
    </div>
  );
};

export default MessageBar;
