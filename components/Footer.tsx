import React from 'react';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-neutral-950 pt-40">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col mt-56">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-white relative">
          {/* Your Logo Here */}
          <span className="ml-3 text-xl">Cypher</span>
        </a>
        <p className="text-sm text-gray-400 sm:ml-10 sm:mt-0 mt-4">© 2024 Cypher —
          <a href="https://github.com/graphfied" className="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">@FahadGhouri</a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="text-gray-400">
            <FaFacebookF />
          </a>
          <a className="ml-3 text-gray-400">
            <FaTwitter />
          </a>
          <a className="ml-3 text-gray-400">
            <FaLinkedinIn />
          </a>
          <a className="ml-3 text-gray-400">
            <FaInstagram />
          </a>
        </span>
      </div>
      <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p className="text-gray-400 text-sm text-center sm:text-left">— Your Address Here —
          <a href="https://www.google.com/maps" className="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">1234 Street Name, City AA 99999</a>
        </p>
        <div className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center">
          <a className="text-gray-400">Privacy Policy</a>
          <span className="inline-block mx-3 text-gray-400">|</span>
          <a className="text-gray-400">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
