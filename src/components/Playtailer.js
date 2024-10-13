import React from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const Playtailer = ({ id }) => {
  const trailerVideo = useSelector((state) => state.movies?.trailerVideo);
  useMovieTrailer(id);
  return (
    <div className="">
      <iframe
        className="w-screen aspect-video "
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&loop=1&mute=1&playlist=" +
          trailerVideo?.key +
          "&rel=0"
        }
        title="Trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
      ></iframe>
    </div>
  );
};

export default Playtailer;
