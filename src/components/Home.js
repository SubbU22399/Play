import useNowPlayingMovies from "../hooks/useNowplayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";

const Home = () => {
  const toggleGptSearchView = useSelector((store) => store.gpt.loading);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  return (
    <div>
      <Header />
      {toggleGptSearchView ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Home;
