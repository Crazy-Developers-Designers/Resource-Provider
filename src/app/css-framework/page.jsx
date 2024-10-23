import React from "react";
import Image from "next/image";
import Link from "next/link";

const cssFrameworks = [
  {
    id: 1,
    name: "Bootstrap",
    description:
      "Bootstrap is one of the most widely-used front-end frameworks, originally developed by Twitter. It offers a comprehensive set of CSS and JavaScript components for building responsive, mobile-first websites. Bootstrap simplifies design with a grid system, prebuilt components, and utilities, making it a go-to choice for developers seeking rapid development and consistent results across browsers.",
    popularity: 150,
    image: "/Bootstrap.png",
    documentation: "https://getbootstrap.com/docs/",
    availability: true,
    rating: 5,
  },
  {
    id: 2,
    name: "Tailwind CSS",
    description:
      "Tailwind CSS is a utility-first CSS framework that allows developers to style applications directly by applying predefined classes in the HTML. It offers a high level of flexibility and customization, enabling rapid development without writing custom CSS. Tailwind focuses on utility classes rather than predefined components, making it highly adaptable to various design needs while maintaining consistency.",
    popularity: 200,
    image: "/Tailwind.png",
    documentation: "https://tailwindcss.com/docs",
    availability: true,
    rating: 5,
  },
  {
    id: 3,
    name: "Bulma",
    description:
      "Bulma is a modern CSS framework built with Flexbox, which makes it particularly strong for responsive and flexible web layouts. It offers a range of CSS classes for layout, typography, forms, and components, and is designed to be simple and minimalistic. Bulma provides a modular architecture, allowing developers to include only the necessary features, making it lightweight.",
    popularity: 80,
    image: "/Bulma.png",
    documentation: "https://bulma.io/documentation/",
    rating: 4,
  },
  {
    id: 4,
    name: "Foundation",
    description:
      "Foundation is a robust and highly customizable front-end framework developed by ZURB. It is aimed at building responsive websites and apps with a focus on mobile-first design. Foundation provides a set of tools for layout, navigation, media queries, and UI components, allowing developers to create both simple and complex designs. It's known for its flexibility and adaptability across devices.",
    popularity: 48,
    image: "/Foundation.png",
    documentation: "https://get.foundation/sites/docs/",
    rating: 3,
  },
  {
    id: 5,
    name: "Materialize",
    description:
      "Materialize is a responsive front-end framework based on Google's Material Design principles. It provides a collection of components, animations, and styles to help developers create modern, mobile-first applications with a clean and consistent look. Materialize focuses on user experience and aesthetics, offering ready-made design elements like buttons, forms, modals, and more.",
    popularity: 95,
    image: "/Materialize.png",
    documentation: "https://materializecss.com/getting-started.html",
    availability: true,
    rating: 4,
  },
];

export default function Frameworks() {
  return (
    <div className="container mx-auto p-6 min-h-screen mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Top Frameworks</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
        {cssFrameworks.map((framework, index) => (
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
              <div className="flex items-center mb-2">
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
              <Link href="#" className="text-blue-500 hover:underline">
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
                className="text-blue-500 mb-4 hover:underline"
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
