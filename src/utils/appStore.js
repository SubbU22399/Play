import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import trailerReducer from "./trailerSlice";

const appstore = configureStore({
  reducer: {
    user: useReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    trailer: trailerReducer,
  },
});
export default appstore;
