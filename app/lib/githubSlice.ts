import { createSlice } from "@reduxjs/toolkit";

const githubSlice = createSlice({
  name: "github",
  initialState: {
    user: null,
  },
  reducers: {
    setGithubUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setGithubUser } = githubSlice.actions;
export default githubSlice.reducer;