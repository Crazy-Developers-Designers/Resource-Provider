"use client";

import Featured from "../components/Featured";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <div className="bg-black text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-center mb-2 tracking-wider">
          THE FASTEST WAY TO GET DEVELOPER RESOURCES
        </h1>
        <h1 className="text-4xl font-bold p-4">
          Welcome to your one-stop shop for equipping
          <br />{" "}
          <span className="tracking-wider">
            web developers with essential resources!
          </span>
        </h1>
        <p className="pr-80 pl-80 mt-4 text-center mb-10">
          Empower your web development journey with our curated resources.{" "}
          <br />
          From tutorials to cutting edge tools,our one-stop shop is tailored for
          all skill level. <br />
          Elevate your coding expertise and stay ahead inthe dynamic digital
          landscape.
        </p>
        <button class="bg-gradient-to-r from-orange-400 to-yellow-100 text-black font-semibold py-2 mb-10 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
          Get started
        </button>
      </div>

      <Featured />
      <Testimonials />
    </div>
  );
}
