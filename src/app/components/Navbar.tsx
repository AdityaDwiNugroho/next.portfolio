"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FiSearch, FiMoon, FiSun, FiMenu } from "react-icons/fi";
import QuickSearch from "./QuickSearch";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isQuickSearchOpen, setIsQuickSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const openQuickSearch = () => {
    setIsQuickSearchOpen(true);
  };

  return (
    <>
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? isDarkMode
              ? "bg-gray-900/90 backdrop-blur-sm shadow-md"
              : "bg-white/90 backdrop-blur-sm shadow-md"
            : isDarkMode
            ? "bg-gray-900/70"
            : "bg-white/70"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <span
                  className={`mr-2 text-xl font-semibold ${
                    isDarkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  Adityaa.
                </span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link
                  href="/"
                  className={`${
                    isDarkMode ? "text-white" : "text-gray-900"
                  } inline-flex items-center px-1 pt-1 text-sm font-medium`}
                >
                  Home
                </Link>
                <Link
                  href="/projects"
                  className={`border-transparent ${
                    isDarkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-500 hover:text-gray-700"
                  } hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                >
                  Projects
                </Link>
                <Link
                  href="/blogs"
                  className={`border-transparent ${
                    isDarkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-500 hover:text-gray-700"
                  } hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                >
                  Blog
                </Link>
                <Link
                  href="/journal"
                  className={`border-transparent ${
                    isDarkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-500 hover:text-gray-700"
                  } hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                >
                  Journal
                </Link>
                {/* <Link
                  href="#"
                  className={`border-transparent ${
                    isDarkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-500 hover:text-gray-700"
                  } hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                >
                  Pages
                </Link> */}
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <button
                onClick={openQuickSearch}
                className={`p-1 rounded-full ${
                  isDarkMode
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-400 hover:text-gray-500"
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
              >
                <span className="sr-only">Search</span>
                <FiSearch className="h-6 w-6" />
              </button>
              <button
                onClick={toggleDarkMode}
                className={`ml-3 p-1 rounded-full ${
                  isDarkMode
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-400 hover:text-gray-500"
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
              >
                <span className="sr-only">Toggle dark mode</span>
                {isDarkMode ? (
                  <FiSun className="h-6 w-6" />
                ) : (
                  <FiMoon className="h-6 w-6" />
                )}
              </button>
              <button
                className={`ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md ${
                  isDarkMode
                    ? "text-gray-900 bg-white hover:bg-gray-100"
                    : "text-white bg-indigo-600 hover:bg-indigo-700"
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
              >
                Login
              </button>
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`inline-flex items-center justify-center p-2 rounded-md ${
                  isDarkMode
                    ? "text-gray-400 hover:text-white hover:bg-gray-700"
                    : "text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                } focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500`}
              >
                <span className="sr-only">Open main menu</span>
                <FiMenu className="block h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className={`${
                  isDarkMode
                    ? "bg-gray-900 text-white"
                    : "bg-indigo-50 text-indigo-700"
                } block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
              >
                Home
              </Link>
              <Link
                href="/projects"
                className={`border-transparent ${
                  isDarkMode
                    ? "text-gray-300 hover:bg-gray-700 hover:text-white"
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                } block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
              >
                Projects
              </Link>
              <Link
                href="/blogs"
                className={`border-transparent ${
                  isDarkMode
                    ? "text-gray-300 hover:bg-gray-700 hover:text-white"
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                } block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
              >
                Blog
              </Link>
              <Link
                href="/journal"
                className={`border-transparent ${
                  isDarkMode
                    ? "text-gray-300 hover:bg-gray-700 hover:text-white"
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                } block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
              >
                Journal
              </Link>
              {/* <Link
                href="/pages"
                className={`border-transparent ${
                  isDarkMode
                    ? "text-gray-300 hover:bg-gray-700 hover:text-white"
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                } block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
              >
                Pages
              </Link> */}
            </div>
            <div
              className={`pt-4 pb-3 border-t ${
                isDarkMode ? "border-gray-700" : "border-gray-200"
              }`}
            >
              <div className="flex items-center px-4">
                <button
                  onClick={openQuickSearch}
                  className={`flex-shrink-0 p-1 rounded-full ${
                    isDarkMode
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-400 hover:text-gray-500"
                  } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                >
                  <span className="sr-only">Search</span>
                  <FiSearch className="h-6 w-6" />
                </button>
                <button
                  onClick={toggleDarkMode}
                  className={`ml-3 flex-shrink-0 p-1 rounded-full ${
                    isDarkMode
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-400 hover:text-gray-500"
                  } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                >
                  <span className="sr-only">Toggle dark mode</span>
                  {isDarkMode ? (
                    <FiSun className="h-6 w-6" />
                  ) : (
                    <FiMoon className="h-6 w-6" />
                  )}
                </button>
              </div>
              <div className="mt-3 space-y-1">
                <button
                  className={`block w-full text-left px-4 py-2 text-base font-medium ${
                    isDarkMode
                      ? "text-gray-300 hover:text-white hover:bg-gray-700"
                      : "text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                  }`}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
      <QuickSearch
        isOpen={isQuickSearchOpen}
        onClose={() => setIsQuickSearchOpen(false)}
      />
    </>
  );
}

export default Navbar;
