import Image from "next/image";
import Link from "next/link";

const frameworks = [
  {
    name: "React",
    description:
      "React is a popular JavaScript library developed by Facebook, primarily used for building user interfaces, especially single-page applications (SPAs). It enables developers to create reusable UI components, making the development process more efficient. React uses a virtual DOM, which improves performance by updating only the necessary parts of the web page. Its component-based architecture promotes reusability and scalability.",
    rating: 5,
    image: "/React.png", // Add your own image path
    availability: true,
    popularity: 140,
    documentation: "https://reactjs.org",
  },
  {
    name: "Vue.js",
    description:
      "Vue.js is a progressive JavaScript framework created by Evan You, designed for building user interfaces and single-page applications. It is known for its simplicity, flexibility, and ease of integration with other projects. Vue provides a two-way data binding feature and a reactive data model, making it easier to manage dynamic content in applications. Its learning curve is relatively easy compared to other frameworks, making it popular among both beginner and experienced developers.",
    rating: 3,
    image: "/Vue.png", // Add your own image path
    popularity: 165,
    documentation: "https://vuejs.org",
  },
  {
    name: "Angular",
    description:
      "Angular is a TypeScript-based framework developed and maintained by Google. It is a full-fledged framework for building large-scale, robust web applications. Angular uses a two-way data binding mechanism, a powerful CLI, and an extensive set of tools for routing, state management, and testing. Its modular structure allows developers to create maintainable, scalable applications with rich features and complex logic.",
    rating: 4,
    image: "/Angular.png", // Add your own image path
    popularity: 20,
    documentation: "https://angular.io",
  },
  // Add more frameworks as needed
];

export default function Frameworks() {
  return (
    <div className="container mx-auto p-6 min-h-screen mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Top Frameworks</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {frameworks.map((framework, index) => (
          <div key={index} className="flex flex-col sm:flex-row items-start">
            {/* Image and Title Section */}
            <div className="sm:w-1/2 flex flex-col justify-center items-center">
              <h2 className="text-xl font-semibold mb-4 text-black text-center">
                {framework.name}
              </h2>
              <Image
                src={framework.image}
                alt={framework.name}
                width={100}
                height={50}
                className="rounded-lg"
              />
            </div>

            {/* Description, Rating, and Documentation Section */}
            <div className="sm:w-1/2 sm:pr-2 mb-4 sm:mb-0 self-start">
              <p className="mb-2 text-black">{framework.description}</p>
              <div className="flex items-center mb-4">
                <div className="flex items-center mt-3">
                  <div className="flex text-yellow-400 mr-2">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        className={`w-5 h-5 ${
                          index < framework.rating
                            ? "fill-current"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-600">
                    {framework.popularity
                      ? `${framework.popularity}K from GitHub`
                      : "No reviews"}
                  </span>
                </div>
              </div>
              <Link href="#" className="text-blue-500">
                Learning resources:{" "}
                <span
                  className={
                    framework.availability
                      ? "text-green-500"
                      : "text-orange-500"
                  }
                >
                  {framework.availability ? "available" : "not available"}
                </span>
              </Link>
              <br />
              <Link
                href={framework.documentation}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Documentation
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
