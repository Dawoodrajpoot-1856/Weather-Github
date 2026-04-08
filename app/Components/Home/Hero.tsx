import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-4xl mx-auto text-center px-6">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Weather App And Github App
        </h1>

        {/* Paragraph */}
        <p className="text-gray-600 mb-8">
          This weather app shows real-time weather information using a weather
          API. It is built with Next.js and styled using Tailwind CSS. The Git
          Username is also avaliable in this app.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <Link
            href="/weather"
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Weather
          </Link>

          <Link
            href="/gitub"
            className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
          >
            GitHub
          </Link>
        </div>
      </div>
    </section>
  );
}
