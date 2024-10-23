import React from "react";

const frameworks = [
  {
    id: 1,
    name: "React",
    description: "A JavaScript library for building user interfaces.",
    popularity: 160000,
    image: "/path/to/react-image.png",
    documentationLink: "https://reactjs.org/docs/getting-started.html",
    rating: 5,
  },
  {
    id: 2,
    name: "Vue.js",
    description: "A progressive framework for building user interfaces.",
    popularity: 120000,
    image: "/path/to/vue-image.png",
    documentationLink: "https://vuejs.org/guide/",
    rating: 4,
  },
  {
    id: 3,
    name: "Angular",
    description: "A platform for building mobile and desktop web applications.",
    popularity: 130000,
    image: "/path/to/angular-image.png",
    documentationLink: "https://angular.io/docs",
    rating: 3,
  },
  // Add more frameworks as needed
];

const FrameworkCard = ({ framework }) => {
  return (
    <div className=" bg-white shadow-lg rounded-lg overflow-hidden p-6 max-w-xs mx-auto min-h-screen">
      <img
        src={framework.image}
        alt={framework.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2 text-gray-600">
          {framework.name}
        </h2>
        <p className="text-gray-600">{framework.description}</p>

        {/* Popularity Section */}
        <div className="flex items-center mt-3">
          <div className="flex text-yellow-400 mr-2">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={`w-5 h-5 ${
                  index < framework.rating ? "fill-current" : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
          <span className="text-gray-600">{framework.popularity} Stars</span>
        </div>

        {/* Link to Documentation */}
        <a
          href={framework.documentationLink}
          className="text-purple-500 underline mt-4 inline-block"
        >
          Official Documentation
        </a>
      </div>
    </div>
  );
};

const FrameworkPage = () => {
  return (
    <div className="bg-gray-50 py-8">
      <h1 className="mt-20 text-3xl font-bold text-center mb-10 text-red-500">
        Popular Frameworks
      </h1>
      <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
        {frameworks.map((framework) => (
          <FrameworkCard key={framework.id} framework={framework} />
        ))}
      </div>
    </div>
  );
};

export default FrameworkPage;
