import { useDispatch } from "react-redux";
import { Api_Options } from "../utils/constant";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movie_id) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movie_id +
        "/videos?language=en-US",
      Api_Options
    );
    const data = await response.json();

    const filterData = data.results.filter((video) => (video.type = "Trailer"));
    const Trailer = filterData.length ? filterData[0] : data.results[0];
    dispatch(addTrailerVideo(Trailer));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
