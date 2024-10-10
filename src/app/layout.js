// layout.tsx
"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // Ensure this path is correct
import Footer from "@/components/Footer"; // Ensure the correct path

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {/* Include Navbar at the top */}
        <Navbar />

        {/* Main content goes here */}
        <main>{children}</main>

        {/* Footer at the bottom */}
        <Footer />
      </body>
    </html>
  );
}
