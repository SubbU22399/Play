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
          <MovieList title={"Now Playing "} movie={movies.nowplayingMovies} />
          <MovieList title={"Popular Movies"} movie={movies.popularMovies} />
          <MovieList title={"Comedy "} movie={movies.topRatedMovies} />
          {/* <MovieList title={"upcomming "} movie={movies.nowplayingMovies} />
          <MovieList title={"horrer "} movie={movies.nowplayingMovies} /> */}
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
