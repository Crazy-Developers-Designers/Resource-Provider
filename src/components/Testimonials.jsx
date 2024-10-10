"use client";

const Testimonials = () => {
  return (
    <div className="bg-black py-12">
      <div className="container mx-auto text-center text-white">
        <h2 className="text-3xl font-bold mb-8">
          What our users are <span className="text-orange-500">saying</span>
        </h2>

        <div className="mt-14 grid grid-cols-1  md:grid-cols-3 gap-8">
          {/* Testimonial Card */}
          <div className="bg-gray-800 p-2 rounded-lg relative">
            <div className="relative">
              <img
                src="/user.jpg"
                alt="User"
                className="w-16 h-16 mx-auto rounded-full mb-4 absolute top-[-50px] left-1/2 transform -translate-x-1/2"
              />
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold">Erick.WT</h3>
              <p className="mt-4">
                Invaluable resources, user-friendly interface. Streamlines
                discovery, saving time, and enhancing knowledge. Highly
                recommended!
              </p>
              <span className="text-gray-400 mt-4 block">
                2nd February 2023
              </span>
            </div>
          </div>

          {/* Repeat for each testimonial */}
          <div className="bg-gray-800 p-2 rounded-lg relative">
            <div className="relative">
              <img
                src="/user.jpg"
                alt="User"
                className="w-16 h-16 mx-auto rounded-full mb-4 absolute top-[-50px] left-1/2 transform -translate-x-1/2"
              />
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold">Erick.WT</h3>
              <p className="mt-4">
                Invaluable resources, user-friendly interface. Streamlines
                discovery, saving time, and enhancing knowledge. Highly
                recommended!
              </p>
              <span className="text-gray-400 mt-4 block">
                2nd February 2023
              </span>
            </div>
          </div>
          <div className="bg-gray-800 p-2 rounded-lg relative">
            <div className="relative">
              <img
                src="/user.jpg"
                alt="User"
                className="w-16 h-16 mx-auto rounded-full mb-4 absolute top-[-50px] left-1/2 transform -translate-x-1/2"
              />
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold">Erick.WT</h3>
              <p className="mt-4">
                Invaluable resources, user-friendly interface. Streamlines
                discovery, saving time, and enhancing knowledge. Highly
                recommended!
              </p>
              <span className="text-gray-400 mt-4 block">
                2nd February 2023
              </span>
            </div>
          </div>
        </div>
        {/* Membership section */}
        <div className="bg-orange-400 text-black py-12 mt-12">
          <h3 className="text-2xl font-bold">
            Join Membership And Get Our Monthly Updates
          </h3>
          <p className="mt-4 mb-6">
            Learn through our ready available recommended best out sourced
            resources
          </p>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Email eg you@gmail.com"
              className="px-4 py-2 rounded-l-md focus:outline-none"
            />
            <button className="bg-black text-white px-6 py-2 rounded-r-md">
              SEND
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
