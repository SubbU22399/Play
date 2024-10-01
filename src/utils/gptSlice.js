import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    loading: false,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.loading = !state.loading;
    },
  },
});
export const { toggleGptSearchView } = gptSlice.actions;
export default gptSlice.reducer;
