"use client";

const Testimonials = () => {
  return (
    <div className="bg-black py-12">
      <div className="container mx-auto text-center text-white">
        <h2 className="text-3xl font-bold mb-8">
          What our users are <span className="text-orange-500">saying</span>
        </h2>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Testimonial Card */}
          <div className="bg-gray-800 p-4 sm:p-6 rounded-lg relative">
            <div className="relative">
              <img
                src="/user.jpg"
                alt="User"
                className="w-16 h-16 mx-auto rounded-full mb-4 absolute top-[-40px] left-1/2 transform -translate-x-1/2"
              />
            </div>
            <div className="mt-8 text-center">
              <h3 className="text-lg sm:text-xl font-semibold">Erick.WT</h3>
              <p className="mt-4 text-sm text-left sm:text-base">
                Invaluable resources, user-friendly interface. Streamlines
                discovery, saving time, and enhancing knowledge. Highly
                recommended!
              </p>
              <span className="text-gray-400 mt-4 block text-sm text-left">
                2nd February 2023
              </span>
            </div>
          </div>

          {/* Repeat for each testimonial */}
          <div className="bg-gray-800 p-4 sm:p-6 rounded-lg relative">
            <div className="relative">
              <img
                src="/user.jpg"
                alt="User"
                className="w-16 h-16 mx-auto rounded-full mb-4 absolute top-[-40px] left-1/2 transform -translate-x-1/2"
              />
            </div>
            <div className="mt-8 text-center">
              <h3 className="text-lg sm:text-xl font-semibold">Erick.WT</h3>
              <p className="mt-4 text-sm text-left sm:text-base">
                Invaluable resources, user-friendly interface. Streamlines
                discovery, saving time, and enhancing knowledge. Highly
                recommended!
              </p>
              <span className="text-gray-400 mt-4 block text-sm text-left">
                2nd February 2023
              </span>
            </div>
          </div>

          <div className="bg-gray-800 p-4 sm:p-6 rounded-lg relative">
            <div className="relative">
              <img
                src="/user.jpg"
                alt="User"
                className="w-16 h-16 mx-auto rounded-full mb-4 absolute top-[-40px] left-1/2 transform -translate-x-1/2"
              />
            </div>
            <div className="mt-8 text-center">
              <h3 className="text-lg sm:text-xl font-semibold">Erick.WT</h3>
              <p className="mt-4 text-sm text-left sm:text-base">
                Invaluable resources, user-friendly interface. Streamlines
                discovery, saving time, and enhancing knowledge. Highly
                recommended!
              </p>
              <span className="text-gray-400 mt-4 block text-sm text-left">
                2nd February 2023
              </span>
            </div>
          </div>
        </div>

        {/* Membership section */}
        <div className="bg-orange-400 text-black py-12 mt-12 px-4">
          <h3 className="text-xl sm:text-2xl font-bold text-center">
            Join Membership And Get Our Monthly Updates
          </h3>
          <p className="mt-4 mb-6 text-sm sm:text-base text-center">
            Learn through our ready available recommended best outsourced
            resources
          </p>
          <div className="flex justify-center items-center space-x-2 sm:space-x-4">
            <input
              type="email"
              placeholder="Email e.g. you@gmail.com"
              className="px-4 py-2 rounded-l-md focus:outline-none w-full sm:w-auto"
            />
            <button className="bg-black text-white px-6 py-2 rounded-r-md w-auto">
              SEND
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
