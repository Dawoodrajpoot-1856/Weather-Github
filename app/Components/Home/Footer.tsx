import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-6">
      <div className="max-w-5xl mx-auto px-4 text-center space-y-2">
        <h2 className="text-lg font-semibold text-white">Weather App</h2>

        <p className="text-sm">
          Built using Weather API and Gitub Username API
        </p>

        <Link
          href="https://github.com/mr-sherry"
          target="_blank"
          className="text-blue-400 hover:text-blue-300 text-sm"
        >
          GitHub: mr-sherry
        </Link>

        <p className="text-xs text-gray-500 pt-2">
          © {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  );
}
