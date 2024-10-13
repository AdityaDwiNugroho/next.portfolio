"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiExternalLink, FiGithub, FiImage } from "react-icons/fi";
import Navbar from "../components/Navbar";

const projects = [
  {
    id: 1,
    title: "Advanced Chatbot Framework",
    description:
      "A sophisticated chatbot framework built with natural language processing capabilities.",
    category: "JavaScript",
    image: "/api/placeholder/400/300",
    liveLink: "https://adityaa.me/chatbot",
    githubLink: "https://github.com/AdityaDwiNugroho/chatbot-framework",
  },
  {
    id: 2,
    title: "E-commerce Dashboard & Admin Panel",
    description:
      "A comprehensive dashboard for managing online stores with real-time analytics.",
    category: "React",
    image: "/api/placeholder/400/300",
    liveLink: "https://adityaa.me/ecommerce-dashboard",
    githubLink: "https://github.com/AdityaDwiNugroho/ecommerce-dashboard",
  },
  {
    id: 3,
    title: "Portfolio Website with Next.js",
    description:
      "A fast, SEO-friendly portfolio website built using Next.js and React.",
    category: "Next.js",
    image: "/api/placeholder/400/300",
    liveLink: "https://adityaa.me/portfolio",
    githubLink: "https://github.com/AdityaDwiNugroho/nextjs-portfolio",
  },
  {
    id: 4,
    title: "Blog Engine with Markdown Support",
    description:
      "A lightweight blog engine that supports Markdown and has a clean, minimalist design.",
    category: "Gatsby",
    image: "/api/placeholder/400/300",
    liveLink: "https://adityaa.me/blog-engine",
    githubLink: "https://github.com/AdityaDwiNugroho/markdown-blog-engine",
  },
  {
    id: 5,
    title: "Real-Time Collaboration App",
    description:
      "A real-time collaboration tool for remote teams with video chat and document sharing.",
    category: "Node.js",
    image: "/api/placeholder/400/300",
    liveLink: "https://adityaa.me/collab-app",
    githubLink: "https://github.com/AdityaDwiNugroho/realtime-collab",
  },
  {
    id: 6,
    title: "AI-Powered Image Recognition",
    description:
      "An image recognition system using machine learning algorithms for object detection.",
    category: "Python",
    image: "/api/placeholder/400/300",
    liveLink: "https://adityaa.me/image-recognition",
    githubLink: "https://github.com/AdityaDwiNugroho/ai-image-recognition",
  },
  {
    id: 7,
    title: "Cryptocurrency Trading Bot",
    description:
      "An automated trading bot for cryptocurrency markets with advanced trading strategies.",
    category: "JavaScript",
    image: "/api/placeholder/400/300",
    liveLink: "https://adityaa.me/crypto-bot",
    githubLink: "https://github.com/AdityaDwiNugroho/crypto-trading-bot",
  },
  {
    id: 8,
    title: "Augmented Reality Mobile App",
    description:
      "A mobile app that overlays digital information on the real world using AR technology.",
    category: "React Native",
    image: "/api/placeholder/400/300",
    liveLink: "https://adityaa.me/ar-app",
    githubLink: "https://github.com/AdityaDwiNugroho/ar-mobile-app",
  },
  {
    id: 9,
    title: "Serverless Microservices Architecture",
    description:
      "A collection of serverless microservices for scalable and efficient backend operations.",
    category: "AWS",
    image: "/api/placeholder/400/300",
    liveLink: "https://adityaa.me/serverless-architecture",
    githubLink: "https://github.com/AdityaDwiNugroho/serverless-microservices",
  },
  {
    id: 10,
    title: "IoT Home Automation System",
    description:
      "A smart home system that connects and controls various IoT devices for home automation.",
    category: "IoT",
    image: "/api/placeholder/400/300",
    liveLink: "https://adityaa.me/iot-home",
    githubLink: "https://github.com/AdityaDwiNugroho/iot-home-automation",
  },
];

const categories = [
  "All",
  "JavaScript",
  "React",
  "Next.js",
  "Gatsby",
  "Node.js",
  "Python",
  "React Native",
  "AWS",
  "IoT",
];

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  liveLink: string;
  githubLink: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative w-full h-48">
        {!imageError ? (
          <Image
            src={project.image}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <FiImage className="text-gray-400 text-4xl" />
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-blue-500">
            {project.category}
          </span>
          <div className="space-x-2">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500"
            >
              <FiExternalLink className="inline-block" />
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500"
            >
              <FiGithub className="inline-block" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectShowcase = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <motion.h1
          className="text-4xl font-bold mb-8 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h1>

        <motion.div
          className="flex space-x-2 mb-8 overflow-x-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                filter === category
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-800 hover:bg-gray-100"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
