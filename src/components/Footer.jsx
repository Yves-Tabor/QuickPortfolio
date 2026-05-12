import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-6 border-t border-white/10">
      <div className="container mx-auto text-center">
        <p className="text-gray-400">
          © {currentYear} Yves Tabor. Built with <span className="text-red-500">♥</span> using React & Tailwind CSS
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="GitHub Profile"
          >
            GitHub
          </a>
          <span className="text-gray-600">•</span>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="LinkedIn Profile"
          >
            LinkedIn
          </a>
          <span className="text-gray-600">•</span>
          <a 
            href="mailto:your.email@example.com"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Email Contact"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
