import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    cityName: "",
    weather: null,
  },
  reducers: {
    setWeatherData: (state, action) => {
      state.cityName = action.payload.cityName;
      state.weather = action.payload.weather;
    },
  },
});

export const { setWeatherData } = weatherSlice.actions;
export default weatherSlice.reducer;