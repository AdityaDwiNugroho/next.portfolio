import React from "react";
import Link from "next/link";
import mascot from "../assets/img/mascot1.png";
import Footer from "./Footer";
import LatestArticles from "./LatestArticel";

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col">
      <main className="container mx-auto px-4 py-8 flex-grow flex items-center">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <nav className="flex flex-col sm:flex-row items-start sm:items-center mb-10 space-y-4 sm:space-y-0">
              <Link
                href="/blogs"
                className="outline outline-1 outline-indigo-500 bg-blue-500 text-white px-8 py-3 hover:bg-blue-400 rounded-full text-lg sm:text-xl sm:mr-6 mb-2 sm:mb-0"
              >
                What's new
              </Link>
              <Link
                href="/blogs"
                className="text-blue-600 hover:text-blue-400 text-lg sm:text-xl flex items-center"
              >
                Blogs
                <span className="mdi mdi-chevron-right chevron-icon text-2xl ml-2"></span>
              </Link>
            </nav>
            <h1 className="text-5xl sm:text-6xl font-bold text-blue-600 mb-6">
              Adityaa<span className="text-purple-600">.me</span>
            </h1>
            <p className="text-gray-700 mb-8 max-w-[35rem] text-xl sm:text-2xl">
              We offer specialized website development services for web
              developers. With various categories, we also provide complete
              resources to develop your web projects.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0">
              <button className="bg-blue-500 text-white px-10 py-4 rounded-full hover:bg-blue-600 transition duration-300 text-lg sm:text-xl sm:mr-6 flex items-center">
                <span className="mdi mdi-rocket-outline transform rotate-45 mr-2"></span>
                Projects
              </button>
              <div className="relative w-full sm:w-auto">
                <input
                  type="text"
                  placeholder="Quick search..."
                  className="w-full sm:w-auto pl-6 pr-12 py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                />
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
                  CTRL + K
                </span>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
            <div
              className="bg-no-repeat bg-center rounded-lg"
              style={{
                backgroundImage: `url(${mascot.src})`,
                height: "1024px",
                width: "100%",
              }}
            />
          </div>
        </div>
      </main>
      <LatestArticles />
      <Footer />
    </div>
  );
};

export default Hero;
