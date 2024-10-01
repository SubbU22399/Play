import React from "react";
import GptSearchBar from "./GptSearchBar";
import { BackGroundImage } from "../utils/constant";

const GPTSearch = () => {
  return (
    <div>
      <img
        src={BackGroundImage}
        alt="BackGroundImage"
        className="absolute blur"
      ></img>
      <GptSearchBar />
    </div>
  );
};

export default GPTSearch;
