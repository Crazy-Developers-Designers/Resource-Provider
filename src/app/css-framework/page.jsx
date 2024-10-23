import React from "react";

const cssFrameworks = [
  {
    id: 1,
    name: "Bootstrap",
    description:
      "A popular front-end framework for developing responsive websites.",
    popularity: 150000,
    image: "/path/to/bootstrap-image.png",
    documentationLink: "https://getbootstrap.com/docs/",
    rating: 5,
  },
  {
    id: 2,
    name: "Tailwind CSS",
    description: "A utility-first CSS framework for rapid UI development.",
    popularity: 200000,
    image: "/path/to/tailwind-image.png",
    documentationLink: "https://tailwindcss.com/docs",
    rating: 5,
  },
  {
    id: 3,
    name: "Bulma",
    description: "A modern CSS framework based on Flexbox.",
    popularity: 100000,
    image: "/path/to/bulma-image.png",
    documentationLink: "https://bulma.io/documentation/",
    rating: 4,
  },
  {
    id: 4,
    name: "Foundation",
    description: "A responsive front-end framework by Zurb.",
    popularity: 80000,
    image: "/path/to/foundation-image.png",
    documentationLink: "https://get.foundation/sites/docs/",
    rating: 3,
  },
  {
    id: 5,
    name: "Materialize",
    description:
      "A modern responsive front-end framework based on Material Design.",
    popularity: 90000,
    image: "/path/to/materialize-image.png",
    documentationLink: "https://materializecss.com/getting-started.html",
    rating: 4,
  },
];

const FrameworkCard = ({ framework }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4 max-w-xs mx-auto">
      <img
        src={framework.image}
        alt={framework.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{framework.name}</h2>
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

const CSSFrameworkPage = () => {
  return (
    <div className="bg-gray-50 py-4">
      <h1 className="text-3xl font-bold text-center mb-10">
        Popular CSS Frameworks
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {cssFrameworks.map((framework) => (
          <FrameworkCard key={framework.id} framework={framework} />
        ))}
      </div>
    </div>
  );
};

export default CSSFrameworkPage;
