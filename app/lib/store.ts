import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "@/app/lib/weatherSlice";
import githubReducer from "@/app/lib/githubSlice";

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    github: githubReducer,
  },
});