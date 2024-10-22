"use client";
import Image from "next/image";
const Role = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 bg-gray-50">
      <div className="flex flex-col md:flex-row items-start justify-between w-full mb-12">
        {/* Left Header Section */}
        <h2 className="text-4xl text-black font-bold text-left mb-4 md:mb-0 md:pr-8">
          What we do!
        </h2>

        {/* Right Paragraph Section */}
        <p className="text-left text-lg text-gray-600 max-w-5xl lg:text-xl">
          In today's data-driven world, making informed decisions can be the
          difference between success and stagnation. With a comprehensive suite
          of services: Smart Inventory Management (SIM), Customer Insights and
          Personalization (SIP), Automated Marketing for Maximum Impact (AMMI),
          and AI-Powered Customer Support (AI-PCS).
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 max-w-10xl">
        {/* Card 1: Artificial Intelligence */}
        <div className="bg-white shadow-lg rounded-lg p-4 w-full text-center">
          <Image
            src="/Inventory-P.PNG"
            alt="Inventory"
            width={40}
            height={40}
            className="mb-2"
          />
          <h3 className="text-gray-600 font-bold text-lg mb-2">
            Smart Inventory Management
          </h3>
          <p className="text-gray-500">
            Our AI-powered inventory management system tracks stock levels in
            real-time, predicts demand, and automates reordering processes.
            Small businesses can prevent stockouts and overstocking while
            maximizing profits by always having the right amount of inventory on
            hand.
          </p>
        </div>

        {/* Card 2: Machine Learning */}
        <div className="bg-white shadow-lg rounded-lg p-4 w-full text-center">
          <Image
            src="/Insights.PNG"
            alt="Customer Support"
            width={40}
            height={40}
            className="mb-2"
          />
          <h3 className="text-gray-600 font-bold text-lg mb-2">
            Customer Insights and Personalization
          </h3>
          <p className="text-gray-500">
            Our AI analyzes customer behavior to deliver valuable insights. This
            allows businesses to tailor their offerings to individual customers,
            ensuring they see the products they want and promotions they’ll
            love. Personalized experiences lead to stronger customer
            relationships and increased sales.
          </p>
        </div>

        {/* Card 3: Business Intelligence */}
        <div className="bg-white shadow-lg rounded-lg p-4 w-full text-center">
          <Image
            src="/Automated-M.PNG"
            alt="Customer support"
            width={40}
            height={40}
            className="mb-2"
          />
          <h3 className="text-gray-600 font-bold text-lg mb-2">
            Automated Marketing for Maximum Impact
          </h3>
          <p className="text-gray-500">
            Our AI-driven marketing automation tools help businesses run
            personalized campaigns across various channels. From targeted email
            campaigns to social media ads, our system takes the guesswork out of
            marketing, ensuring that your promotions reach the right customers
            at the right time.
          </p>
        </div>

        {/* Card 4: Software Development */}
        <div className="bg-white shadow-lg rounded-lg p-4 w-full text-center">
          <Image
            src="/Support.PNG"
            alt="Customer support"
            width={40}
            height={40}
            className="mb-2"
          />
          <h3 className="text-gray-600 font-bold text-lg mb-2">
            AI-Powered Customer Support
          </h3>
          <p className="text-gray-500">
            Our AI-driven chatbots and virtual assistants offer round-the-clock
            customer support. These bots can handle common inquiries, recommend
            products, and even process orders, giving your business a
            competitive edge in customer service without needing to expand your
            support team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Role;
