"use client";

export default function gitub() {
  return (
    <div className="h-100 flex flex-col items-center justify-center bg-gray-50 px-4">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        ENTER YOUR GITHUB USERNAME
      </h1>

      {/* Input + Button */}
      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Enter Your Github Username"
          className="w-64 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition">
          Search
        </button>
      </div>
    </div>
  );
}
