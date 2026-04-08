import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-black text-white">
      <div className="max-w-6xl h-20 mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold">Weather App</h1>

        <ul className="flex gap-6 text-xl">
          <li>
            <Link href="/" className="hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="/weather" className="hover:text-gray-400">
              Weather
            </Link>
          </li>
          <li>
            <Link href="gitub" className="hover:text-gray-400">
              GitHub
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
