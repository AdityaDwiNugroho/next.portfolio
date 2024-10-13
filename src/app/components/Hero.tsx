import React, { useState, useEffect } from "react";
import Link from "next/link";
import Footer from "./Footer";
import IntroSection from "./IntroSection";
import AboutMeSection from "./AboutMe";
import QuickSearch from "./QuickSearch";
import { FiSearch } from "react-icons/fi";
import LatestArticles from "./LatestArticel";
import Navbar from "./Navbar";
import EnhancedMascot from "./Mascot";

const Hero: React.FC = () => {
  const [isQuickSearchOpen, setIsQuickSearchOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key === "f") {
        event.preventDefault();
        setIsQuickSearchOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleQuickSearchOpen = () => {
    setIsQuickSearchOpen(true);
  };

  const handleQuickSearchClose = () => {
    setIsQuickSearchOpen(false);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white flex flex-col">
        <QuickSearch
          isOpen={isQuickSearchOpen}
          onClose={handleQuickSearchClose}
        />
        <main className="container mx-auto px-4 py-8 flex-grow flex items-center">
          <div className="flex flex-col lg:flex-row items-center justify-between w-full">
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
              <nav className="flex flex-col sm:flex-row items-start sm:items-center mb-10 space-y-4 sm:space-y-0">
                <Link
                  href="/blogs"
                  className="outline outline-1 outline-indigo-500 bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-lg sm:text-xl sm:mr-6 mb-2 sm:mb-0  transition duration-300 group"
                >
                  What{"'s"} new
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
                <Link href="/projects">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-4 rounded-full transition duration-300 group text-lg sm:text-xl sm:mr-6 flex items-center">
                    <span className="mdi mdi-rocket-outline transform rotate-45 mr-2"></span>
                    Projects
                  </button>
                </Link>
                <button
                  onClick={handleQuickSearchOpen}
                  className="flex w-full sm:w-auto bg-white text-left"
                >
                  <div className="flex items-center pl-4 pr-12 py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg">
                    <FiSearch className="text-gray-400 mr-2" />
                    <span className="text-gray-400 text-md mr-4">
                      Quick search...
                    </span>
                    <span className=" text-gray-400 text-sm">CTRL + F</span>
                  </div>
                </button>
              </div>
            </div>
            <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
              <EnhancedMascot />
            </div>
          </div>
        </main>
        <AboutMeSection />
        <IntroSection />
        <LatestArticles />
        <Footer />
      </div>
    </>
  );
};

export default Hero;
