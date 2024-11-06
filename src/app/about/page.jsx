"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-indigo-950 to-black py-12 mt-12 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Our Vision Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between mb-16 w-full"
        >
          <div className="md:w-[60%] mb-8 md-12 p-6 md:mb-0">
            <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Our Vision
            </h2>
            <motion.p 
              whileHover={{ scale: 1.02 }}
              className="leading-loose text-gray-300 text-xl tracking-wide hover:text-purple-200 transition-colors duration-300"
            >
              ResourceHub is a dynamic online resource platform. Our vision is
              to create a centralized hub where users can efficiently discover,
              share, and collaborate on research and educational projects. We
              strive to empower users by providing an engaging space for
              potential growth and seamless access to knowledge and tools.
            </motion.p>
          </div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="md:w-[35%] hidden md:block"
          >
            <img
              src="/illustration-flowing-conversation.svg"
              alt="Vision"
              width={400}
              height={300}
              className="w-auto h-auto mx-auto rounded-[50%] shadow-lg shadow-purple-500/20"
            />
          </motion.div>
        </motion.section>

        {/* Our Approach Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between mb-12"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="md:w-[35%] hidden md:block"
          >
            <img
              src="/illustration-mockups.svg"
              alt="Approach"
              width={400}
              height={300}
              className="w-auto h-auto mx-auto shadow-lg shadow-blue-500/20"
            />
          </motion.div>
          <div className="md:w-[60%] mb-8 md:mb-0">
            <h2 className="text-4xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Our Approach
            </h2>
            <motion.p 
              whileHover={{ scale: 1.02 }}
              className="leading-loose text-gray-300 text-xl tracking-wide hover:text-blue-200 transition-colors duration-300"
            >
              Our approach prioritizes innovation, inclusivity, and
              sustainability. We are committed to providing users with
              cutting-edge solutions for their research or educational goals. By
              fostering a supportive and engaged community, we aim to create
              seamless collaboration between users, partners, and various
              stakeholders.
            </motion.p>
          </div>
        </motion.section>

        {/* Our Process section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between mb-12"
        >
          <div className="md:w-[60%] mb-8 md:mb-0">
            <h2 className="text-4xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
              Our Process
            </h2>
            <motion.p 
              whileHover={{ scale: 1.02 }}
              className="leading-loose text-gray-300 text-xl tracking-wide hover:text-teal-200 transition-colors duration-300"
            >
              Our process is a meticulous journey from idea inception to
              delivery of complete resources, following a user-centered
              approach. By working closely with users, we ensure that every
              project has a clear direction, tangible solutions, and impactful
              results.
            </motion.p>
          </div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="md:w-[35%] hidden md:block"
          >
            <img
              src="/illustration-grow-together.svg"
              alt="Process"
              width={400}
              height={300}
              className="w-auto h-auto mx-auto shadow-lg shadow-emerald-500/20"
            />
          </motion.div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400">
            Frequently Asked Questions
          </h2>
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
            <FAQItem
              question="How do I register an account?"
              answer="To register an account, click on the 'Sign Up' button at the top right and fill in the required information."
            />
            <FAQItem
              question="Can I contribute my own resources?"
              answer="Yes, registered users can submit their own resources to be reviewed and added to the platform."
            />
            <FAQItem
              question="Is there a way to save resources for later?"
              answer="Yes, you can bookmark resources to easily find them again in your personal dashboard."
            />
            <FAQItem
              question="What if I encounter an issue with a resource?"
              answer="If you find an issue with a resource, please contact support or use the report function available on each resource page."
            />
            <FAQItem
              question="Can I collaborate with others on projects?"
              answer="Yes, our platform supports collaborative features where users can join project groups and share resources."
            />
            <FAQItem
              question="How do I delete my account?"
              answer="To delete your account, go to account settings, and under the privacy section, you'll find the delete account option."
            />
          </div>
        </motion.section>
      </div>
    </div>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="border-b border-gray-700 pb-4 hover:border-gray-500 transition-colors duration-300"
    >
      <motion.div
        className="flex justify-between items-center cursor-pointer text-lg font-semibold text-gray-200 mb-2 hover:text-purple-300 transition-colors duration-300"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.01 }}
      >
        <h3>{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-xl"
        >
          {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="text-gray-400 mt-2 hover:text-gray-300 transition-colors duration-300">
          {answer}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default About;