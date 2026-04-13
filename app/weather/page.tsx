"use client";

import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { setWeatherData } from "@/app/lib/weatherSlice";

export default function WeatherPage() {
  const [city, setCity] = useState("");
  const [searchCity, setSearchCity] = useState("");
  const dispatch = useDispatch();

  const fetchWeather = async () => {
    const geoRes = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${searchCity}`,
    );
    const geoData = await geoRes.json();

    const longitude = geoData.results[0].longitude;
    const latitude = geoData.results[0].latitude;
    const cityName = geoData.results[0].name;

    const weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,relative_humidity_2m_max,relative_humidity_2m_min,windspeed_10m_max&timezone=auto`,
    );
    const weatherData = await weatherRes.json();

    return {
      cityName,
      weather: weatherData.daily,
    };
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["weather", searchCity],
    queryFn: fetchWeather,
    enabled: !!searchCity,
  });

  useEffect(() => {
    if (data) {
      dispatch(setWeatherData(data));
    }
  }, [data, dispatch]);
  return (
    <div className="bg-gray-500">
      <div className="min-h-screen flex items-center justify-center bg-gray-400">
        <div className="bg-gray-200 w-[380px] rounded-xl shadow-md p-6">
          <h1 className="text-center text-2xl font-semibold mb-5">Weather</h1>

          <div className="flex gap-2 mb-6">
            <input
              type="text"
              placeholder="Search city..."
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="border rounded-md p-2 flex-1 outline-none focus:border-black"
            />

            <button
              onClick={() => setSearchCity(city)}
              className="bg-black text-white px-4 rounded-md"
            >
              Search
            </button>
          </div>

          {isLoading && <p className="text-center">Loading...</p>}
          {isError && <p className="text-center text-red-500">Error</p>}

          {data && (
            <div>
              <h2 className="text-center text-xl font-semibold">
                {data.cityName}
              </h2>

              <p className="text-center text-5xl font-bold my-4">
                {data.weather.apparent_temperature_max[0]}°
              </p>

              <p className="text-center text-gray-500 mb-6">
                {data.weather.time[0]}
              </p>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="border rounded-md p-2">
                  Feels: {data.weather.apparent_temperature_min[0]}°
                </div>

                <div className="border rounded-md p-2">
                  Humidity: {data.weather.relative_humidity_2m_min[0]}%
                </div>

                <div className="border rounded-md p-2">
                  Wind: {data.weather.windspeed_10m_max[0]} km/h
                </div>

                <div className="border rounded-md p-2">
                  Low: {data.weather.temperature_2m_min[0]}°
                </div>

                <div className="border rounded-md p-2 col-span-2">
                  High: {data.weather.temperature_2m_max[0]}°
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
