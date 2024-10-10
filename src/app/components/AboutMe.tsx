import React from "react";
import Image from "next/image";
import mascot2 from "../assets/img/mascot2.png";

const AboutMeSection = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="w-full md:w-1/3">
          <Image
            src={mascot2.src}
            alt="Aditya Dwi Nugroho"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div className="w-full md:w-2/3">
          <h2 className="text-3xl font-bold mb-4">Who Am I?</h2>
          <p className="mb-4">
            I'm Aditya Dwi Nugroho – a web developer, problem-solver, and
            lifelong learner. My passion lies in turning ideas into functional,
            beautiful websites and applications. With experience in Vue.js,
            Nuxt.js, Vuetify, and Tailwind CSS, I focus on creating
            user-centered, responsive designs that deliver results.
          </p>
          <p className="mb-4">
            When I'm not coding, I'm usually diving into the latest tech trends,
            collaborating on exciting projects, or brainstorming my next big
            idea. I believe in the power of technology to make lives easier, and
            I'm always eager to bring innovative solutions to life.
          </p>

          <a
            href="/aditya-cv.pdf"
            download
            className="rounded-lg inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold mt-4 py-2 px-4 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
