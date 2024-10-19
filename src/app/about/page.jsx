"use client";
import Image from "next/image";
import Role from "@/components/ourRole";

const AboutUsPage = () => {
  return (
    <div className="bg-gray-50 text-white font-sans">
      {/* Container for the whole section */}
      <div className="container mx-auto p-6">
        {/* About Us Section */}
        <section className="text-center">
          <h1 className="text-4xl text-gray-800 font-bold mb-4">About Us</h1>
        </section>

        {/* Our Vision, Our Approach, and Our Process */}
        <div className="w-full flex flex-col  bg-red-600">
          {/* Reduced margin-bottom here */}
          <Role />
        </div>

        {/* Our Team Section */}
        <section className="bg-white ">
          {" "}
          {/* Reduced margin-top here */}
          <h2 className="text-4xl font-semibold text-center text-purple-600 mb-8">
            CEO & Founder
          </h2>
          <div className="flex justify-center items-center">
            {/* Single Team Member Centered */}
            <div className="text-center">
              <div className="mb-4">
                <div className="h-24 w-24 rounded-full bg-gray-300 inline-block">
                  {/* Image of the CEO & Founder */}
                  <Image
                    src="/user.png" // Replace with the actual image path
                    alt="Rodgers.O"
                    width={96}
                    height={96}
                    className="rounded-full bg-gray-300"
                  />
                </div>
                <p className="text-lg text-purple-600 mt-4">Rodgers.O</p>
                <p className="text-sm text-gray-600">CEO & Founder</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;
