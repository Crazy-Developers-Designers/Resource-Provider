"use client";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo Section */}
        <div className="mb-4 md:mb-0">
          <h1 className="text-white text-lg font-bold">Logo</h1>
          <p className="text-sm">All resources in one place</p>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-8 mb-4 md:mb-0">
          <a href="#" className="text-gray-400 hover:text-white">
            RESOURCES
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            ABOUT
          </a>
          <a href="#" className="text-orange-500 hover:text-white">
            CONTACT
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            ACCOUNT
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4">
          <Link href="#" className="text-orange-500 hover:text-white">
            <Image src="/github.png" alt="github" width={50} height={50} />
            <i className="fab fa-github"></i>
          </Link>
          <Link href="#" className="text-orange-500 hover:text-white">
            <Image src="/facebook.png" alt="facebook" width={24} height={24} />
            <i className="fab fa-github"></i>
          </Link>
          <Link href="#" className="text-orange-500 hover:text-white">
            <Image src="/github.png" alt="github" width={50} height={50} />
            <i className="fab fa-github"></i>
          </Link>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="container mx-auto text-center border-t border-gray-700 mt-8 pt-4">
        <p>©2024 resourcehub.com. All rights reserved</p>
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
