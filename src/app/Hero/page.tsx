import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-500 to-purple-700 text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative px-6 md:px-12 lg:px-24 py-16">
        <div className="flex flex-col justify-center relative z-10">
          <div className="text-center md:text-left space-y-6 lg:max-w-[500px]">
            <h1 className="text-5xl lg:text-6xl font-bold leading-relaxed font-Averia text-white">
              I am
              <br />
              Sumbal <span className="text-yellow-300">Naz!</span>
            </h1>
            <p className="text-2xl tracking-wide text-yellow-200">
              Welcome To My Portfolio
            </p>
            <p className="text-gray-300">
              Explore Sumbal Naz's Portfolio! Dive into my projects, skills, and coding journey. Join me as I turn ideas into reality through code.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="primary-btn flex items-center gap-2 bg-yellow-300 text-blue-950 px-6 py-3 rounded-full shadow-lg hover:bg-yellow-400 transition duration-300">
                <span>View Portfolio</span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/Home Pic.png"
            alt="Home Img"
            width={350}
            height={350}
            className="w-[350px] md:w-[550px] drop-shadow-lg rounded-full"
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-black opacity-40"></div>
    </section>
  );
};

export default Hero;
