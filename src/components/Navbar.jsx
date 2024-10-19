// Navbar.jsx
"use client"; // This line allows the component to use hooks

import Link from "next/link";
import { useState } from "react";
// Add this import for animations
import { motion } from "framer-motion";
import Image from "next/image"; // Import Image for the logo

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About us", path: "/about" },
  { name: "Our Processes", path: "/processes" },
  { name: "Why us", path: "/whyus" },
  { name: "Q & A", path: "/faqs" },
  { name: "Contact us", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: { rotate: 0 },
    opened: { rotate: 45, backgroundColor: "rgb(255,255,255)" },
  };
  const centerVariants = {
    closed: { opacity: 1 },
    opened: { opacity: 0 },
  };
  const bottomVariants = {
    closed: { rotate: 0 },
    opened: { rotate: -45, backgroundColor: "rgb(255,255,255)" },
  };
  const listVariants = {
    closed: { x: "100vw" },
    opened: {
      x: 0,
      transition: { when: "beforeChildren", staggerChildren: 0.2 },
    },
  };
  const listItemVariants = {
    closed: { x: -10, opacity: 0 },
    opened: { x: 0, opacity: 1 },
  };

  return (
    <nav className="fixed top-0 left-0  w-full bg-white py-2 shadow-md z-50 lg:pl-8 ">
      <div className="container mx-auto flex ml-2 items-center">
        {/* Logo on the left */}
        <Link href="/">
          <Image
            src="/Great-AI.png" // Path to your logo
            alt="Logo"
            width={140} // Adjust size as needed
            height={70}
            className="cursor-pointer"
          />
        </Link>

        {/* Desktop Navigation Links with space between logo and links */}
        <div className="hidden md:flex space-x-8 font-semi-bold ml-10">
          {navLinks.map((link, index) => (
            <Link key={index} href={link.path}>
              <div className="text-gray-600 text-lg">{link.name}</div>
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden ml-auto mr-4">
          <button
            className="w-10 h-8 flex flex-col justify-between z-50 relative"
            onClick={() => setOpen(!open)}
          >
            <motion.div
              variants={topVariants}
              animate={open ? "opened" : "closed"}
              className="w-10 h-1 bg-black rounded origin-left"
            ></motion.div>
            <motion.div
              variants={centerVariants}
              animate={open ? "opened" : "closed"}
              className="w-10 h-1 bg-black rounded"
            ></motion.div>
            <motion.div
              variants={bottomVariants}
              animate={open ? "opened" : "closed"}
              className="w-10 h-1 bg-black rounded origin-left"
            ></motion.div>
          </button>

          {/* Mobile Navigation Menu */}
          {open && (
            <motion.div
              variants={listVariants}
              initial="closed"
              animate="opened"
              className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
            >
              {navLinks.map((link) => (
                <motion.div variants={listItemVariants} key={link.name}>
                  <Link href={link.path} onClick={() => setOpen(false)}>
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
}
