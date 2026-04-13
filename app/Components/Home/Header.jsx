"use client";

import Link from "next/link";
import { useSelector } from "react-redux";

export default function Header() {
  const { cityName, weather } = useSelector((state) => state.weather);
  const githubUser = useSelector((state) => state.github.user);

  return (
    <header className="bg-black text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
        {/* Weather */}
        <div className="text-sm text-center sm:text-left">
          <h1 className="font-bold">Weather:</h1>

          {weather ? (
            <p>
              {cityName} :{" "}
              <span className="font-bold">
                {weather.apparent_temperature_max[0]}°
              </span>
            </p>
          ) : (
            <p className="text-gray-400">No Weather</p>
          )}
        </div>

        {/* Navigation */}
        <ul className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm sm:text-lg font-semibold">
          <li>
            <Link href="/" className="hover:text-gray-400 transition">
              Home
            </Link>
          </li>

          <li>
            <Link href="/weather" className="hover:text-gray-400 transition">
              Weather
            </Link>
          </li>

          <li>
            <Link href="/gitub" className="hover:text-gray-400 transition">
              GitHub
            </Link>
          </li>
        </ul>

        {/* GitHub User */}
        <div className="text-center sm:text-right text-sm">
          <h1 className="font-bold">User Name:</h1>

          {githubUser ? (
            <div className="flex items-center justify-center sm:justify-end gap-2 mt-1">
              <img
                src={githubUser.avatar_url}
                alt="avatar"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border"
              />
              <p className="font-medium">{githubUser.login}</p>
            </div>
          ) : (
            <p className="text-gray-400 text-xs sm:text-sm">No User</p>
          )}
        </div>
      </div>
    </header>
  );
}
