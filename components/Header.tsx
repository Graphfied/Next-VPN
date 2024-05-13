import Link from 'next/link';
import { useRef } from 'react';

const Header = () => {
  return (
    <header 
  className="w-full h-full bg-gradient-to-r bg-neutral-950 text-white body-font shadow-md"
  style={{
    backgroundColor: "#000000",
    "--gap": "5em",
    "--line": "1px",
    "--color": "rgba(255, 255, 255, 0.2)",
    "backgroundImage": `linear-gradient(-90deg, transparent calc(var(--gap) - var(--line)), var(--color) calc(var(--gap) - var(--line) + 1px), var(--color) var(--gap)), linear-gradient(0deg, transparent calc(var(--gap) - var(--line)), var(--color) calc(var(--gap) - var(--line) + 1px), var(--color) var(--gap))`,
    "backgroundSize": "var(--gap) var(--gap)"
  } as React.CSSProperties}
>
      <div className="container mx-auto flex flex-wrap p-5 items-center justify-between md:flex-row">
        {/* Logo and home link */}
        <Link href="/">
          <span className="title-font font-medium items-center text-white mb-4 md:mb-0">
            {/* Place your logo here */}
            <span className="text-xl cursor-pointer">Cypher</span>
          </span>
        </Link>
        
        {/* Navigation Links */}
        <nav className="flex flex-wrap ml-24 items-center text-base text-center justify-center">
          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 bg-yellow-500 shadow-lg shadow-blue-500/50 text-white ml-16 pr-5 py-2 px-10 rounded-full">
            <Link href="/about">
              <span className="mr-5 hover:text-gray-300 cursor-pointer">About</span>
            </Link>
            <Link href="/features">
              <span className="mr-5 hover:text-gray-300 cursor-pointer">Features</span>
            </Link>
            <Link href="/pricing">
              <span className="mr-5 hover:text-gray-300 cursor-pointer">Pricing</span>
            </Link>
            <Link href="/blog">
              <span className="mr-5 hover:text-gray-300 cursor-pointer">Blog</span>
            </Link>
          </div>
        </nav>

        {/* Action Buttons */}
        <div>
          <Link href="/dashboard">
            <span className="mr-5 hover:text-gray-300 cursor-pointer">Dashboard</span>
          </Link>
          <Link href="/login">
            <span className="mr-5 hover:text-gray-300 cursor-pointer">Login</span>
          </Link>
          <Link href="/signup">
            <span className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 inline-flex items-center shadow-lg shadow-blue-500/50 bg-yellow-500 border-0 py-1 px-3 focus:outline-none rounded-full text-base mt-4 md:mt-0 cursor-pointer">Sign Up</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
