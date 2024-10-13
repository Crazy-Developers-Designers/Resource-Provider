// Navbar.jsx
"use client"; // This line allows the component to use hooks

import Link from "next/link";
import { useState } from "react";
// Add this import
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact us", path: "/contact" },
  { name: "Resources", path: "/resources" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  // Initialize router

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  const isActive = (path) => router.pathname === path;

  return (
    <nav className="fixed top-0 left-0 w-full bg-black py-6 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center mb-4">
        <div className="hidden md:flex flex space-x-6">
          {navLinks.map((link, index) => (
            <Link key={index} href={link.path}>
              <div className="text-white">{link.name}</div>
            </Link>
          ))}
        </div>
        <div className="hidden md:flex space-x-6">
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
        <div className="md:hidden ml-auto mr-4">
          <button
            className="w-10 h-8 flex flex-col justify-between z-50 relative"
            onClick={() => setOpen(!open)}
          >
            <motion.div
              variants={topVariants}
              animate={open ? "opened" : "closed"}
              className="w-10 h-1 bg-white rounded origin-left"
            ></motion.div>
            <motion.div
              variants={centerVariants}
              animate={open ? "opened" : "closed"}
              className="w-10 h-1 bg-white rounded"
            ></motion.div>
            <motion.div
              variants={bottomVariants}
              animate={open ? "opened" : "closed"}
              className="w-10 h-1 bg-white rounded origin-left"
            ></motion.div>
          </button>
          {open && (
            <motion.div
              variants={listVariants}
              initial="closed"
              animate="opened"
              className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
            >
              {navLinks.map((link) => (
                <motion.div
                  variants={listItemVariants}
                  className=""
                  key={link.name} // Fixed key and property names
                >
                  <Link href={link.path}>{link.name}</Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
      <hr className="border-1 border-gray-800" />
    </nav>
  );
}
