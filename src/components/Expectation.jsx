import Image from "next/image";

const Expectation = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gray-50 mt-14 lg:mt-20">
      {/* Left Text Section */}
      <section className="overflow-y-onscroll text-center md:text-left w-full md:w-1/2 pr-4 pl-10 lg:pl-16">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-2">
          What to expect from us!
        </h1>

        <p className="mt-2 text-lg lg:text-xl text-gray-600">
          With our very able team, we are dedicated in delivering your project
          to your standards. Our value isn’t limited to building teams but is
          equally distributed across the project lifecycle. We are basically a
          custom tech development company.
        </p>

        {/* Expectation Points */}
        <ul className="mt-6 text-left space-y-3">
          <li className="text-purple-600 font-semibold lg:text-xl mt-8">
            1. Expertise
          </li>
          <p className="text-gray-600 lg:text-lg">
            Our team consists of experienced professionals with diverse skill
            sets, ensuring that we have the expertise needed to tackle any
            technical challenge.
          </p>

          <li className="text-purple-600 font-semibold lg:text-xl">
            2. Tailored Solutions
          </li>
          <p className="text-gray-600 lg:text-lg">
            We understand that every project is unique, which is why we take a
            tailored approach to development.
          </p>

          <li className="text-purple-600 font-semibold lg:text-xl">
            3. Quality Assurance
          </li>
          <p className="text-gray-600 lg:text-lg">
            We have rigorous quality assurance processes in place to ensure that
            our deliverables meet the highest standards.
          </p>

          <li className="text-purple-600 font-semibold lg:text-xl">
            4. Collaborative Partnership
          </li>
          <p className="text-gray-600 lg:text-lg">
            We value their input and feedback and strive to create a
            collaborative working environment.
          </p>
        </ul>
      </section>

      {/* Right Image Section */}
      <div className="mt-8 md:mt-0 w-full md:w-1/2">
        <Image
          src="/Expect.png" // Adjust path if needed
          alt="Laptop illustration"
          width={800}
          height={800}
          className="w-full h-auto rounded-lg object-cover animate-pulse transform transition-transform ease-in-out hover:scale-120 hover:rotate-3"
        />
      </div>
    </div>
  );
};

export default Expectation;
