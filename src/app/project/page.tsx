"use client";
import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [filter, setFilter] = useState('all');
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const handleFilterClick = (value:any) => {
    setFilter(value);
    setIsMenuOpen(false); 
  };

  const projectData = {
    html: ['Html1', 'Html2', 'Html3', 'Html4', 'Html5'],
    js: ['js1', 'js2', 'js3', 'js4'],
    ts: ['types1', 'types2'],
    react: ['React1'],
  };

  return (
    <div className="container mx-auto p-8">
      <section id="project" className="flex flex-col items-center my-12">
        <div className="w-full max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-800 leading-tight">
            My Portfolio
          </h1>
        </div>
        <div className="w-full max-w-4xl mx-auto flex justify-between items-center mb-6">
          <button
            className="md:hidden p-2 text-orange-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <div
          className={`absolute top-20 left-0 w-full h-screen z-20 bg-black bg-opacity-50 transition-all ${isMenuOpen ? 'block' : 'hidden'}`}
        >
          <div className="text-xl font-semibold uppercase bg-blue-800 text-white py-10 m-6 rounded-3xl border-4 border-orange-500"> {/* Orange border */}
            <ul className="flex flex-col items-center gap-10">
              <li>
                <a href="/" onClick={() => { setIsMenuOpen(false); }}>Home</a>
              </li>
              <li>
                <a href="/" onClick={() => { setIsMenuOpen(false); }}>About</a>
              </li>
              <li>
                <a href="/" onClick={() => { setIsMenuOpen(false); }}>Skill</a>
              </li>
              <li>
                <a href="/" onClick={() => { setIsMenuOpen(false); }}>Projects</a>
              </li>
              <li>
                <a href="/" onClick={() => { setIsMenuOpen(false); }}>Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <ul
          className={`md:flex md:space-x-4 space-y-4 md:space-y-0 ${isMenuOpen ? 'block' : 'hidden'} md:block`}
          onClick={() => setIsMenuOpen(false)}
        >
          {['all', 'html', 'js', 'ts', 'react'].map((category) => (
            <li
              key={category}
              className={`cursor-pointer py-2 px-6 text-sm font-medium transition duration-300 ${filter === category ? 'text-orange-500 bg-gray-200' : 'text-gray-500'}`}
              onClick={() => handleFilterClick(category)}
            >
              {category === 'all' ? 'All' : category.toUpperCase()}
            </li>
          ))}
        </ul>
        <div className="project-container flex flex-wrap justify-center gap-8 mt-16">
          {(filter === 'all' || filter === 'html') && projectData.html.map((img, index) => (
            <div key={index} className="project-box w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
              <a href="#" className="block rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105">
                <Image
                  src={`${img}.png`}
                  alt="HTML Project"
                  className="w-full h-full object-cover"
                />
              </a>
            </div>
          ))}
          {(filter === 'all' || filter === 'js') && projectData.js.map((img, index) => (
            <div key={index} className="project-box w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
              <a href="#" className="block rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105">
                <Image
                  src={`${img}.png`}
                  alt="JS Project"
                  className="w-full h-full object-cover"
                />
              </a>
            </div>
          ))}
          {(filter === 'all' || filter === 'ts') && projectData.ts.map((img, index) => (
            <div key={index} className="project-box w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
              <a href="#" className="block rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105">
                <Image
                  src={`${img}.jpeg`}
                  alt="TypeScript Project"
                  className="w-full h-full object-cover"
                />
              </a>
            </div>
          ))}
          {(filter === 'all' || filter === 'react') && projectData.react.map((img, index) => (
            <div key={index} className="project-box w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
              <a href="#" className="block rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105">
                <Image
                  src={`${img}.png`}
                  alt="React Project"
                  className="w-full h-full object-cover"
                />
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}