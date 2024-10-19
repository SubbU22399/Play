import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowplayingMovies: null,
    trailerVideo: null,
    popularMovies: null,
    topRatedMovies: null,
  },
  reducers: {
    addNowplayingMovies: (state, action) => {
      state.nowplayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
  },
});
export const {
  addNowplayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addTopRatedMovies,
} = moviesSlice.actions;
export default moviesSlice.reducer;
