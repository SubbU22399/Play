import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movie }) => {
  return (
    <div className="mt-9">
      <h1 className="title text-xl text-bold p-1 m-1 text-white">{title}</h1>
      <div className="flex overflow-auto">
        <div className="movie-list flex p-2">
          {movie.map((movie) => (
            <MovieCard
              key={movie.id}
              poster_path={movie.poster_path}
              name={movie.original_title}
              id={movie.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
