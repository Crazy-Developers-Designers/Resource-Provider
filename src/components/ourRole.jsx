"use client";

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
          of services: Artificial Intelligence (AI), Data Analytics, Business
          Intelligence (BI), and Software Development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 max-w-10xl">
        {/* Card 1: Artificial Intelligence */}
        <div className="bg-white shadow-lg rounded-lg p-4 w-full h-72 text-center">
          <div className="mb-2 text-blue-600 text-4xl">🤖</div>
          <h3 className="text-gray-600 font-bold text-lg mb-2">
            Artificial Intelligence
          </h3>
          <p className="text-gray-500">
            Unleash the power of personalized AI solutions tailored to your
            business needs. Our intelligent models automate tasks, predict
            customer behavior, optimize operations, and perform semantic
            analysis and demand prediction precisely for your business with
            unparalleled precision.
          </p>
        </div>

        {/* Card 2: Machine Learning */}
        <div className="bg-white shadow-lg rounded-lg p-4 w-full h-72 text-center">
          <div className="mb-2 text-blue-600 text-4xl">⚙️</div>
          <h3 className="text-gray-600 font-bold text-lg mb-2">
            Machine Learning
          </h3>
          <p className="text-gray-500">
            Stay ahead of the curve with our machine learning expertise. We
            develop intelligent models that learn and adapt, empowering your
            business with automation, predictive analytics, and unparalleled
            efficiency.
          </p>
        </div>

        {/* Card 3: Business Intelligence */}
        <div className="bg-white shadow-lg rounded-lg p-4 w-full h-72 text-center">
          <div className="mb-2 text-blue-600 text-4xl">📊</div>
          <h3 className="text-gray-600 font-bold text-lg mb-2">
            Business Intelligence
          </h3>
          <p className="text-gray-500">
            Business Intelligence (BI) takes data analysis to the next level,
            providing real-time insights and interactive dashboards that offer a
            comprehensive view of your business performance.
          </p>
        </div>

        {/* Card 4: Software Development */}
        <div className="bg-white shadow-lg rounded-lg p-4 w-full h-72 text-center">
          <div className="mb-2 text-blue-600 text-4xl">💻</div>
          <h3 className="text-gray-600 font-bold text-lg mb-2">
            Software Development
          </h3>
          <p className="text-gray-500">
            Our Software Development team translates your vision into reality.
            We leverage modern technologies and agile methodologies to deliver
            custom software solutions that meet your specific needs and
            timelines.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Role;
