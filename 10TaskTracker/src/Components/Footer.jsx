import React from 'react';
import { Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full fixed bottom-0 flex justify-center items-center space-x-2 py-2 bg-slate-800 hover:bg-slate-700  shadow-inner transition duration-500 ease-in-out">
      <p className="text-md text-white">
        Built with ❤️ by
      </p>
      <a 
        href="https://github.com/megh-bari" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center space-x-1 font-medium text-blue-600 hover:text-blue-400 transition-colors duration-200"
      >
        <span>Megh Bari</span>
        <Github size={16} />
      </a>
    </footer>
  );
};

export default Footer;
