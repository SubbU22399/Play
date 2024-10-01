import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  console.log(movies);
  return (
    movies.topRatedMovies && (
      <div className=" bg-black">
        <div className="-mt-40 relative z-20">
          <MovieList
            title={"Top Rated movies "}
            movie={movies.topRatedMovies}
          />
          <MovieList title={"Now Playing "} movie={movies.nowplayingMovies} />
          <MovieList title={"Popular Movies"} movie={movies.popularMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
