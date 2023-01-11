import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="container mx-auto my-5 px-10 ">
      <nav className="border-b border-slate-800/20 py-2">
        <Link
          href="/"
          className="text-3xl font-semibold text-blue-800 hover:text-blue-400"
        >
          Podcaster
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
