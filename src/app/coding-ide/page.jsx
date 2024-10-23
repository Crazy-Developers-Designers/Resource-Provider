import Image from "next/image";

const ides = [
  {
    name: "Visual Studio Code",
    image: "/Visual-studio.png", // replace with actual path
    description:
      "A powerful source-code editor made by Microsoft for Windows, Linux, and macOS. It supports debugging, embedded Git control, syntax highlighting, and code refactoring.",
    rating: 5,
    popularity: 140,
    downloadLink: "https://code.visualstudio.com/",
  },
  {
    name: "Sublime Text",
    image: "/sublime.png", // replace with actual path
    description:
      "A sophisticated text editor for code, markup, and prose. Sublime Text is fast, has excellent package support, and supports many languages.",
    rating: 5,
    popularity: 200,
    downloadLink: "https://www.sublimetext.com/",
  },
  {
    name: "Atom",
    image: "/atom.png", // replace with actual path
    description:
      "Atom is a hackable text editor for the 21st century. It’s free, open-source, and has a rich ecosystem of packages for customization.",
    downloadLink: "https://atom.io/",
  },
  {
    name: "JetBrains IntelliJ IDEA",
    image: "/intellij.png", // replace with actual path
    description:
      "IntelliJ IDEA is a Java-centric IDE but also supports a wide range of programming languages. It offers intelligent code completion and in-depth code analysis.",
    rating: 3.5,
    popularity: 135,
    downloadLink: "https://www.jetbrains.com/idea/",
  },
  {
    name: "Eclipse",
    image: "/eclipse.png", // replace with actual path
    description:
      "Eclipse is a widely used Java IDE, but it also supports many other languages. It’s open-source and has a large community with many plugins.",
    rating: 4.5,
    popularity: 165,
    downloadLink: "https://www.eclipse.org/",
  },
];

export default function IdeTools() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Top Coding IDEs
      </h1>
      <div className="container mx-auto grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 px-6">
        {ides.map((ide, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105"
          >
            {/* IDE Image */}
            <div className="flex justify-left">
              <Image
                src={ide.image}
                alt={ide.name}
                width={200}
                height={100}
                className="rounded-lg object-cover"
              />
            </div>

            {/* IDE Name */}
            <h2 className="text-2xl font-semibold text-gray-800 mt-4 text-left">
              {ide.name}
            </h2>

            {/* IDE Description */}
            <p className="text-gray-600 mt-4 text-left">{ide.description}</p>
            <div className="flex items-center mt-3">
              <div className="flex text-yellow-400 mr-2">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className={`w-5 h-5 ${
                      index < ide.rating ? "fill-current" : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-600">
                {ide.popularity ? `${ide.popularity}K Ratings` : "No Reviews"}
              </span>
            </div>

            {/* Download Button */}
            <div className="mt-6 flex justify-left">
              <a
                href={ide.downloadLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition"
              >
                Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
