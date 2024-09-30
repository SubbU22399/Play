import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute pt-[35%] px-20 bg-gradient-to-tr from-black w-screen aspect-video">
      <h2 className="text-bold text-4xl text-pretty text-white">{title}</h2>
      <p className="text-gray-500 text-sm w-1/4">{overview}</p>
      <div className=" m-2 p-2">
        <button className="p-2 m-2 bg-white text-black text-sm rounded hover:bg-opacity-65">
          ▶︎ Play
        </button>
        <button className="p-2 m-2  text-sm rounded bg-opacity-50 bg-gray-200 hover:bg-opacity-80">
          More Info !
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
