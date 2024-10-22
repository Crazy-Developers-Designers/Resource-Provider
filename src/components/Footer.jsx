"use client";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-purple-600 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo Section */}
        <div className="mb-4 md:mb-0">
          <h1 className="text-white text-lg font-bold">Greatint AI</h1>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-8 mb-4 md:mb-0">
          <Link href="/" className="text-white hover:text-white">
            HOME
          </Link>
          <Link href="/about" className="text-white hover:text-white">
            ABOUT
          </Link>
          <Link href="/contact" className="text-white hover:text-white">
            CONTACT
          </Link>
          <Link href="#" className="text-white hover:text-white">
            DEMO
          </Link>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4">
          <Link
            href="https://web.facebook.com/profile.php?id=61566477825060"
            target="_blank"
            rel="noopener norefferer"
            className="text-orange-500 hover:text-white"
          >
            <Image src="/facebook.png" alt="facebook" width={40} height={40} />
            <i className="fab fa-github"></i>
          </Link>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="container mx-auto text-center border-t border-gray-700 mt-8 pt-4">
        <p>©{currentYear} Developed and Maintained by Greatint AI</p>
      </div>

      {/* Scroll to Top Button */}
      <div className="fixed bottom-4 right-4 bg-gray-100 text-black rounded-full p-2 shadow-md hover:bg-gray-300">
        <a href="#top" className="font-bold">
          TOP
        </a>
      </div>
    </footer>
  );
};

export default Footer;
