"use client";

import Link from "next/link";
import { useSelector } from "react-redux";

export default function Header() {
  const { cityName, weather } = useSelector((state) => state.weather);
  const githubUser = useSelector((state) => state.github.user);

  return (
    <header className="bg-black text-white shadow-md">
      <div className="max-w-6xl mx-auto h-24 flex items-center justify-between px-6">
        {/* Weather */}
        <div className="text-sm font-medium">
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
        <ul className="flex gap-8 text-lg font-semibold">
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
        <div>
          <h1 className="font-bold">User Name:</h1>
          {githubUser ? (
            <div className="flex items-center gap-3">
              <img
                src={githubUser.avatar_url}
                alt="avatar"
                className="w-9 h-9 rounded-full border"
              />
              <p className="font-medium">{githubUser.login}</p>
            </div>
          ) : (
            <p className="text-gray-400 text-sm">No User</p>
          )}
        </div>
      </div>
    </header>
  );
}
