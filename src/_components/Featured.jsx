// Featured.js

"use client";

import React from "react";

const Featured = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Navigation Bar */}
        <div className="">
          <h2 className="text-black text-center text-3xl font-bold mb-8">
            Featured resources
          </h2>
          <div className="flex flex-wrap justify-center mb-8 space-x-2 bg-white shadow-orange shadow-orange-500 p-4 rounded-md">
            <button className="px-4 py-2 text-orange-500 rounded-md">
              Design tools
            </button>
            <button className="px-4 py-2 text-gray-600 rounded-md">
              Coding IDE
            </button>
            <button className="px-4 py-2 text-gray-600 rounded-md">
              Frameworks
            </button>
            <button className="px-4 py-2 text-gray-600 rounded-md">CSS</button>
            <button className="px-4 py-2 text-gray-600 rounded-md">
              Patterns
            </button>
            <button className="px-4 py-2 text-gray-600 rounded-md">
              Fonts
            </button>
            <button className="px-4 py-2 text-gray-600 rounded-md">
              Icons
            </button>
            <button className="px-4 py-2 text-gray-600 rounded-md">
              Images
            </button>
          </div>
        </div>

        {/* Featured Resources */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 bg-white rounded-lg shadow-md">
            <img
              src="/figma.png"
              alt="Figma"
              className="w-24 h-24 mb-6 mx-auto"
            />
            <h3 className="text-xl font-semibold text-black text-left mb-2">
              Figma
            </h3>
            <p className="text-black text-left pr-4">
              Figma and FigJam are design and collaboration software used by
              professional designers, engineers, and makers of all kinds. Use
              them to ideate, create and share work—all free as a student or
              teacher.
            </p>
          </div>

          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <img
              src="/Adobe XD.png"
              alt="Adobe XD"
              className="w-26 h-24 mb-4 mx-auto"
            />
            <h3 className="text-xl font-semibold text-black text-left mb-2">
              Adobe XD
            </h3>
            <p className="text-left text-black pr-4">
              Adobe XD is a vector design tool for web and mobile applications,
              developed and published by Adobe Inc. It is available for macOS
              and Windows, and there are versions for iOS and Android to help
              preview the result of work directly on mobile applications.
            </p>
          </div>

          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <img
              src="/canva L.png"
              alt="Canva"
              className="w-24 h-24 mb-4 mx-auto"
            />
            <h3 className="text-xl font-semibold text-black text-left mb-2">
              Canva
            </h3>
            <p className="text-black text-left pr-4">
              Canva is a free, easy-to-use online graphic design tool. Use it to
              create social media posts, presentations, posters, videos, logos,
              and more.
            </p>
          </div>
        </div>

        {/* View all resources */}
        <div className="text-right mb-2 mt-6">
          <a href="#" className="text-orange-500 font-semibold">
            View all resources
          </a>
        </div>
        <hr className="font-bold bg-gray-500" />

        {/* Steps Section */}
        <div className="mt-12">
          <h3 className="text-black text-center text-2xl font-semibold mb-6">
            Get started with 4 easy steps
          </h3>
          <div className="text-black  grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Step 1 */}
            <div className="flex items-center space-x-4">
              <img src="/step1.png" alt="Step 1" className="w-30 h-28" />
              <div>
                <h3>Step 1</h3>
                <h4 className=" font-semibold pl-4">
                  Search for your favorite resource
                </h4>
                <p className="text-black pl-4 pr-2">
                  Search for resources through our comprehensive directory.
                </p>
              </div>
            </div>
            {/* Step 2 */}
            <div className="flex items-center space-x-4">
              <img src="/step2.png" alt="Step 2" className="w-30 h-28" />
              <div>
                <h4 className="font-semibold pl-4">
                  Click to view how to use resource
                </h4>
                <p className="pl-4 pr-2">
                  Get detailed guides on how to utilize the resources
                  effectively.
                </p>
              </div>
            </div>
            {/* Step 3 */}
            <div className="flex items-center space-x-4">
              <img src="/step3.png" alt="Step 3" className="w-30 h-28" />
              <div>
                <h4 className="font-semibold">Bookmark for later review</h4>
                <p>Bookmark your favorite resources to review later.</p>
              </div>
            </div>
            {/* Step 4 */}
            <div className="flex items-center space-x-4">
              <img src="/step4.png" alt="Step 4" className="w-30 h-28" />
              <div>
                <h4 className="font-semibold">Log in back to your account</h4>
                <p>Log in to access saved resources and continue learning.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
