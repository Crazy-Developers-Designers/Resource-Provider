import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="flex flex-col mt-20 md:flex-row items-center justify-between  bg-gray-50">
      {/* Left Section with Questions */}
      <section className="w-full md:w-1/2 pr-4 pl-4 md:pl-10">
        {" "}
        {/* Added left padding */}
        <h1 className="text-3xl mt-4 text-black font-bold">Common Questions</h1>
        {/* Question List */}
        <div className="mt-4 space-y-6 text-lg lg:text-xl">
          {/* Question 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold text-purple-500">
              What is Artificial Intelligence?
            </h3>
            <p className="text-gray-600 mt-2">
              Refers to the simulation of human intelligence processes by
              machines, especially computer systems.
            </p>
          </div>

          {/* Question 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold text-purple-600">
              What is Machine Learning?
            </h3>
            <p className="text-gray-600 mt-2">
              Is a subset of AI that provides systems the ability to
              automatically learn and improve from experience without being
              explicitly programmed.
            </p>
          </div>

          {/* Question 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold text-purple-600">
              How can AI and ML benefit our business operations?
            </h3>
            <p className="text-gray-600 mt-2">
              AI and ML can benefit business operations by automating repetitive
              tasks, improving decision-making through data analysis, enhancing
              customer experiences, and optimizing processes for greater
              efficiency.
            </p>
          </div>

          {/* Question 4 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold text-purple-600">
              What ethical considerations are important in data analytics and
              AI?
            </h3>
            <p className="text-gray-600 mt-2">
              Ethical considerations include data privacy, bias in AI
              algorithms, transparency in decision-making, and accountability in
              the outcomes of automated systems.
            </p>
          </div>
        </div>
      </section>

      {/* Right Section with Illustration */}
      <div className="mt-12 md:mt-0 w-full md:w-1/2">
        <Image
          src="/FAQs.png" // Adjust path if needed
          alt="AI and ML illustration"
          layout="responsive" // Ensures image adapts to the parent container's width
          width={700}
          height={500}
          className="w-full h-auto rounded-lg object-cover transform transition-transform duration-500 ease-in-out hover:scale-105 animate-zoomInOut"
        />
      </div>
    </div>
  );
};

export default Testimonials;
