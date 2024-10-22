import { Inter } from "next/font/google";
import Head from "next/head"; // Import Head component
import "./globals.css";
import Navbar from "@/components/Navbar"; // Ensure this path is correct
import Footer from "@/components/Footer"; // Ensure the correct path

export const metadata = {
  title: "Greatint AI",
  description: "The best animated portfolio page",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <Head></Head>
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
