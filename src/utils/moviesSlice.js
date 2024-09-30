import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowplayingMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addNowplayingMovies: (state, action) => {
      state.nowplayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});
export const { addNowplayingMovies, addTrailerVideo } = moviesSlice.actions;
export default moviesSlice.reducer;
