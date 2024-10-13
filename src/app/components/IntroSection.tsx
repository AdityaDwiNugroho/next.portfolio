import React from "react";

const IntroSection = () => {
  return (
    <div className="text-center py-4 px-4">
      <h2 className="text-4xl font-bold mb-4">
        Showcase Your Creativity.
        <br /> Discover My Portfolio Today.
      </h2>
      <p className="text-gray-600 mb-8">
        I specialize in building modern, user-friendly web solutions that
        deliver results.
      </p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300 group">
        <span className="flex items-center">
          Explore my work
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2 transform transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default IntroSection;
