import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gray-100 py-12 sm:py-20">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Weather App And Github App
        </h1>

        {/* Paragraph */}
        <p className="text-sm sm:text-base text-gray-600 mb-8 leading-relaxed">
          This weather app shows real-time weather information using a weather
          API. It is built with Next.js and styled using Tailwind CSS. The
          GitHub username feature is also available in this app.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <Link
            href="/weather"
            className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600 transition w-full sm:w-auto"
          >
            Weather
          </Link>

          <Link
            href="/gitub"
            className="bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800 transition w-full sm:w-auto"
          >
            GitHub
          </Link>
        </div>
      </div>
    </section>
  );
}
