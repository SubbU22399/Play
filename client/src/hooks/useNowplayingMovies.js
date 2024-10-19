import { useDispatch } from "react-redux";
import { Api_Options } from "../utils/constant";
import { addNowplayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      Api_Options
    );
    const response = await data.json();
    dispatch(addNowplayingMovies(response.results));
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
