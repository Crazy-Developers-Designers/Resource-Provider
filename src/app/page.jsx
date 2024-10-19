"use client";

import Testimonials from "@/components/Testimanials.jsx";
import Expectation from "../components/Expectation.jsx";
import Role from "../components/ourRole.jsx";
import Process from "../components/Process.jsx";
import AnimatedVideo from "@/components/AnimatedVideo.jsx";
import Image from "next/image";

const Home = () => {
  return (
    <div className="mt-20 flex flex-col items-center justify-between h-auto bg-gray-50 p-10 pt-4 relative">
      <div className="flex flex-col sm:flex-row w-full">
        {/* Left Text Section */}
        <section className="w-full sm:w-1/2 text-left p-8 flex flex-col justify-start sm:items-start items-center">
          <h1 className="text-3xl text-center sm:text-left text-black font-bold xl:text-7xl text-tracking-large">
            Unlock the Power of Data-Driven Decisions{" "}
            <span className="text-purple-600">
              Your AI & Machine Learning Hub.
            </span>
          </h1>
          <p className="mt-4 text-gray-600 text-lg text-center sm:text-left lg:text-3xl">
            At Greatint, we bridge the gap between raw data and actionable
            insights, empowering businesses with a comprehensive suite of
            services.
          </p>
          <button className="mt-10 bg-purple-600 text-white py-3 px-5 rounded-full shadow-lg hover:bg-blue-700 mx-auto">
            <span className="text-lg">Ask for a Demo</span>
          </button>
        </section>

        {/* Right Image Section (hidden on small screens) */}
        <div className="hidden sm:flex w-1/2 items-start justify-center mt-4">
          <Image
            src="/Capture-IA.png" // Adjust the path if necessary
            alt="AI illustration"
            width={600}
            height={200}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Ensure Role is below */}
    </div>
  );
};

export default Home;
