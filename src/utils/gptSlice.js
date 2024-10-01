import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    loading: false,
  },
  reducers: {
    GptSearchView: (state) => {
      state.loading = !state.loading;
    },
  },
});
export const { GptSearchView } = gptSlice.actions; // export the action
export default gptSlice.reducer; // export the reducer
