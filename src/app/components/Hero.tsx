import React from "react";
import Link from "next/link";
import mascot from "../assets/img/mascot1.png";
import Footer from "./Footer";

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex">
      <main className="container mx-auto px-4 content-center">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <nav className="justify-between items-center mb-8">
              <div className="text-md">
                <Link
                  href="/blogs"
                  className="outline outline-1 outline-indigo-500 bg-blue-500 text-white px-6 py-2 hover:bg-blue-400 mr-4 rounded-full items-center"
                >
                  What&apo;s new
                </Link>
                <Link
                  href="/blogs"
                  className="text-blue-600 hover:text-blue-400"
                >
                  Blogs
                  <span className="mdi mdi-chevron-right chevron-icon text-2xl ml-2"></span>
                </Link>
              </div>
            </nav>
            <h1 className="text-4xl font-bold text-blue-600 mb-4">
              Adityaa<span className="text-purple-600">.me</span>
            </h1>
            <p className="text-gray-700 mb-6 max-w-[30rem] text-lg">
              We offer specialized website development services for web
              developers. With various categories, we also provide complete
              resources to develop your web projects.
            </p>
            <div className="flex items-center">
              <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300 mr-4 flex items-center">
                <span className="mdi mdi-rocket-outline transform rotate-45"></span>
                Projects
              </button>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Quick search..."
                  className="pl-4 pr-10 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {/* <span className="absolute right-3 top-2 text-gray-400 text-sm">
                  CTRL + K
                </span> */}
              </div>
            </div>
          </div>
          <div
            className="md:w-1/2 mt-10 md:mt-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${mascot.src})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: "1024px",
              width: "500px",
            }}
          >
            {/* <Image
              src="/mascot1.png"
              alt="mascot 1"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            /> */}
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Hero;
