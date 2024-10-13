import React from "react";
import { CDN_URL } from "../utils/constant";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const MovieCard = ({ poster_path, name, id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const playtailer = () => {
    navigate("/videotrailer");
    dispatch(id);
  };
  return (
    <div className="w-28 pr-1 text-white">
      <img
        className="rounded"
        alt="movie_card"
        src={CDN_URL + poster_path}
        onClick={playtailer}
      ></img>
      <h4 className="text-sm text-wrap text-stone-500">{name}</h4>
    </div>
  );
};
export default MovieCard;
