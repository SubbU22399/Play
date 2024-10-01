import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";

const appstore = configureStore({
  reducer: {
    user: useReducer,
    movies: moviesReducer,
    gpt: gptReducer,
  },
});
export default appstore;
