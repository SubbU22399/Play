import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movie_id }) => {
  const trailerVideo = useSelector((state) => state.movies?.trailerVideo);
  useMovieTrailer(movie_id);
  return (
    <div className="">
      <iframe
        className="w-screen aspect-video "
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1&rel=0"
        }
        title="Trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
