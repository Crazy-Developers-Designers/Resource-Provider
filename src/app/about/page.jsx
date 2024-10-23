import React from "react";
import Image from "next/image";

export const metadata = {
  title: "About Developer Resources",
};

const About = () => {
  return (
    <div className="bg-black py-12 mt-12">
      <div className="container mx-auto px-4">
        {/* Our Vision Section */}
        <section className="flex flex-col md:flex-row items-center justify-between mb-16  w-full">
          <div className="md:w-[60%] mb-8 md-12 p-6 md:mb-0">
            <h2 className="text-4xl font-bold mb-6 text-white">Our Vision</h2>
            <p className="leading-loose text-gray-300 text-xl tracking-wide">
              ResourceHub is a dynamic online resource platform. Our vision is
              to create a centralized hub where users can efficiently discover,
              share, and collaborate on research and educational projects. We
              strive to empower users by providing an engaging space for
              potential growth and seamless access to knowledge and tools.
            </p>
          </div>

          <div className="md:w-[35%] hidden md:block">
            <Image
              src="/vision.png"
              alt="Vision"
              width={400}
              height={300}
              className="w-auto h-auto mx-auto rounded-[50%]"
            />
          </div>
        </section>

        {/* Our Approach Section */}
        <section className=" flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="md:w-[35%] hidden md:block">
            <Image
              src="/our_approach.png"
              alt="Approach"
              width={400}
              height={300}
              className="w-auto h-auto mx-auto"
            />
          </div>
          <div className="md:w-[60%] mb-8 md:mb-0">
            <h2 className="text-4xl font-semibold mb-4">Our Approach</h2>
            <p className="leading-loose text-gray-300 text-xl tracking-wide">
              Our approach prioritizes innovation, inclusivity, and
              sustainability. We are committed to providing users with
              cutting-edge solutions for their research or educational goals. By
              fostering a supportive and engaged community, we aim to create
              seamless collaboration between users, partners, and various
              stakeholders.
            </p>
          </div>
        </section>

        {/* Our Process section */}
        <section className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="md:w-[60%] mb-8 md:mb-0">
            <h2 className="text-4xl font-semibold mb-4">Our Process</h2>
            <p className="leading-loose text-gray-300 text-xl tracking-wide">
              Our process is a meticulous journey from idea inception to
              delivery of complete resources, following a user-centered
              approach. By working closely with users, we ensure that every
              project has a clear direction, tangible solutions, and impactful
              results.
            </p>
          </div>
          <div className="md:w-[35%] hidden md:block">
            <Image
              src="/our_process.png"
              alt="Process"
              width={400}
              height={300}
              className="w-auto h-auto mx-auto"
            />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">FAQs</h2>
          <div className="space-y-4">
            <FAQItem
              question="What kind of resources can I find on this platform?"
              answer="Our platform includes a wide range of resources, from academic papers to tools and software designed for researchers."
            />
            <FAQItem
              question="Are the resources free to access?"
              answer="Yes, many resources are available for free to registered users."
            />
            <FAQItem
              question="How frequently are new resources added?"
              answer="We continuously add new resources and updates to ensure our platform remains a valuable tool for users."
            />
          </div>
        </section>
      </div>
    </div>
  );
};

const FAQItem = ({ question, answer }) => {
  return (
    <div className="border-b border-gray-600 pb-4">
      <h3 className="text-lg font-semibold text-gray-200 mb-2 cursor-pointer">
        {question}
      </h3>
      <p className="text-gray-400">{answer}</p>
    </div>
  );
};

export default About;
