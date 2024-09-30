import React from "react";
import { CDN_URL } from "../utils/constant";

const MovieCard = ({ poster_path, name }) => {
  return (
    <div className="w-28 pr-1 mr-4 text-white">
      <img alt="movie_card" src={CDN_URL + poster_path}></img>
      <h4>{name}</h4>
    </div>
  );
};

export default MovieCard;
