import React from "react";
import { Github, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-600 py-4">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex justify-center mb-2">
          <a
            href="https://github.com/AdityaDwiNugroho"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-3 text-zinc-600 hover:text-zinc-800"
            title="Github"
          >
            <Github size={24} />
          </a>
          <a
            href="https://instagram.com/allen.adityadn"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-3 text-zinc-600 hover:text-zinc-800"
            title="Instagram"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://linkedin.com/in/aditya-dwi-nugroho-75057827a/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-3 text-zinc-600 hover:text-zinc-800"
            title="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
        </div>
        <div className="text-sm">© 2024 Adityaa. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
