import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-6">
      <div className="max-w-5xl mx-auto px-4 text-center space-y-3">
        {/* Title */}
        <h2 className="text-base sm:text-lg font-semibold text-white">
          Weather App
        </h2>

        {/* Description */}
        <p className="text-xs sm:text-sm leading-relaxed">
          Built using Weather API and GitHub Username API
        </p>

        {/* Link */}
        <Link
          href="https://github.com/mr-sherry"
          target="_blank"
          className="text-blue-400 hover:text-blue-300 text-xs sm:text-sm break-all"
        >
          GitHub: mr-sherry
        </Link>

        {/* Copyright */}
        <p className="text-[11px] sm:text-xs text-gray-500 pt-2">
          © {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  );
}
