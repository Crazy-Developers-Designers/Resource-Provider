// layout.tsx
"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // Ensure this path is correct
import Footer from "@/components/Footer"; // Ensure the correct path

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      {" "}
      {/* Full height for html */}
      <body className="bg-gray-100 text-white flex flex-col min-h-screen">
        {/* Navbar stays at the top */}
        <Navbar />

        {/* Main content with flex-grow to fill available space */}
        <main className="flex-grow">{children}</main>

        {/* Footer stays at the bottom */}
        <Footer />
      </body>
    </html>
  );
}
