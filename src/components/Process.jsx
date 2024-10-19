import Image from "next/image";

const Process = () => {
  return (
    <div className="flex flex-col mt-10 md:flex-row justify-between items-start p-8 bg-gray-50 w-full">
      {/* Left Section - Image */}
      <div className="md:w-1/2 flex flex-col items-center justify-start md:mb-0">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-600 pl-8">
          Development Process
        </h2>

        {/* Image */}
        <Image
          src="/F Process.PNG"
          alt="Development Process Diagram"
          width={1400}
          height={800}
          className="w-full max-w-3xl md:max-w-4xl rounded-lg shadow-lg mb-0"
        />
      </div>

      {/* Right Section - Process Steps */}
      <div className="md:w-1/2 flex-grow space-y-2 overflow-y-auto p-8 mb-10 h-auto max-h-[800px]">
        <p className="text-gray-600 text-lg lg:text-xl">
          We understand that embarking on a data-driven journey can seem
          daunting. That's why we employ the CRISP-DM methodology, a structured
          approach that guides us through each stage of the project lifecycle:
        </p>

        <div className="space-y-4">
          {/* Business Understanding */}
          <div className="bg-white p-4 rounded-lg shadow-lg mb-0">
            <h3 className="text-gray-600 font-bold flex items-center md:text-xl lg:text-2xl">
              <span className="mr-3">
                <Image
                  src="/Business.PNG"
                  width={60}
                  height={60}
                  className="w-12 h-12"
                />
              </span>
              Business Understanding
            </h3>
            <p className="text-gray-600 text-lg">
              We begin by collaborating with you to understand your specific
              needs and business goals.
            </p>
          </div>

          {/* Data Understanding */}
          <div className="bg-white p-4 rounded-lg shadow-lg mb-0">
            <h3 className="text-gray-600 font-bold flex items-center md:text-xl lg:text-2xl">
              <span className="mr-3">
                <Image
                  src="/Understanding.PNG"
                  width={60}
                  height={60}
                  className="w-12 h-12"
                />
              </span>
              Data Understanding
            </h3>
            <p className="text-gray-600 text-lg">
              We explore, clean, and prepare your data, ensuring its accuracy
              and readiness for analysis.
            </p>
          </div>

          {/* Data Preparation */}
          <div className="bg-white p-4 rounded-lg shadow-lg mb-0">
            <h3 className="text-gray-600 font-bold flex items-center md:text-xl lg:text-2xl">
              <span className="mr-3">
                <Image
                  src="/Preparation.PNG"
                  width={60}
                  height={60}
                  className="w-12 h-12"
                />
              </span>
              Data Preparation
            </h3>
            <p className="text-gray-600 text-lg">
              We transform the data into a format suitable for modeling and
              analysis.
            </p>
          </div>

          {/* Modeling */}
          <div className="bg-white p-4 rounded-lg shadow-lg mb-0">
            <h3 className="text-gray-600 font-bold flex items-center md:text-xl lg:text-2xl">
              <span className="mr-3">
                <Image
                  src="/Modeling.jpeg"
                  width={60}
                  height={60}
                  className="w-12 h-12"
                />
              </span>
              Modeling
            </h3>
            <p className="text-gray-600 text-lg">
              We choose and apply the most appropriate data mining techniques to
              uncover valuable insights.
            </p>
          </div>

          {/* Evaluation */}
          <div className="bg-white p-4 rounded-lg shadow-lg mb-0">
            <h3 className="text-gray-600 font-bold flex items-center md:text-xl lg:text-2xl">
              <span className="mr-3">
                <Image
                  src="/Evaluation.jpeg"
                  width={40}
                  height={40}
                  className="w-12 h-12"
                />
              </span>
              Evaluation
            </h3>
            <p className="text-gray-600 text-lg">
              We rigorously assess the model's performance and effectiveness.
            </p>
          </div>

          {/* Additional Content */}
          <div className="bg-white p-4 rounded-lg shadow-lg mb-0">
            <h3 className="text-gray-600 font-bold flex items-center md:text-xl lg:text-2xl">
              <span className="mr-3">
                <Image
                  src="/Deployment.jpeg"
                  width={40}
                  height={40}
                  className="w-12 h-12"
                />
              </span>
              Deployment
            </h3>
            <p className="text-gray-600 text-lg">
              We integrate the insights and solutions developed into your
              existing systems for immediate impact.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg mb-0">
            <h3 className="text-gray-600 font-bold flex items-center md:text-xl lg:text-2xl">
              <span className="mr-3">
                <Image
                  src="/Monitoring.jpeg"
                  width={60}
                  height={60}
                  className="w-12 h-12"
                />
              </span>
              Monitoring
            </h3>
            <p className="text-gray-600 text-lg">
              We continuously monitor and maintain the model ensuringits ongoing
              relevance and accuracy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
