// Navbar.jsx
"use client"; // This line allows the component to use hooks

import Link from "next/link";

export default function Navbar() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact us", path: "/contact" },
    { name: "Resources", path: "/resources" },
  ];

  const isActive = (path) => router.pathname === path;

  return (
    <nav className="fixed top-0 left-0 w-full bg-black py-6 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center mb-4">
        <div className="flex space-x-6">
          {navLinks.map((link, index) => (
            <Link key={index} href={link.path}>
              <div className="text-white">{link.name}</div>
            </Link>
          ))}
        </div>
        <div className="flex space-x-6">
          <Link href="/signup">
            <button className="px-3 py-2 bg-black ring-1 ring-white focus:outline-none text-white rounded-full hover:bg-gray-800">
              Signup
            </button>
          </Link>
          <Link href="/login">
            <div className="px-4 py-2 bg-orange-500 text-black rounded-full hover:bg-yellow-600">
              Login
            </div>
          </Link>
        </div>
      </div>

      <hr className="border-1 border-gray-800" />
    </nav>
  );
}
