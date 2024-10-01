import React from "react";
import { CDN_URL } from "../utils/constant";

const MovieCard = ({ poster_path, name }) => {
  return (
    <div className="w-28 pr-1 text-white">
      <img
        className="rounded"
        alt="movie_card"
        src={CDN_URL + poster_path}
      ></img>
      <h4 className="text-sm text-wrap text-stone-500">{name}</h4>
    </div>
  );
};

export default MovieCard;
