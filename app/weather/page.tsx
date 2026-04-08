"use client";

export default function WeatherPage() {
  return (
    <div className="h-110 flex flex-col items-center justify-start pt-20 px-4 bg-gray-50">
      {/* Page Heading */}
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Weather Checker</h1>

      {/* Input & Button */}
      <div className="flex gap-3 mb-8">
        <input
          type="text"
          placeholder="Enter city name"
          className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition">
          Get Weather
        </button>
      </div>

      {/* Weather Result Card */}
      <div className="bg-white p-8 rounded-lg shadow-md text-center w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-2">City Name</h2>
        <p className="text-lg mb-1">Temperature: 25°C</p>
        <p className="text-gray-600">Weather: Sunny</p>
      </div>
    </div>
  );
}
