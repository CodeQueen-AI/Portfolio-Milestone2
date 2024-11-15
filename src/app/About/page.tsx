import React from 'react';
import Image from 'next/image';

function Banner() {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
        <div className="flex justify-center items-center">
          <Image
            src="/about Page Pic.png"
            alt="about"
            width={300}
            height={300}
            className="w-[300px] md:max-w[400px] h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
            <h1 className="text-3xl lg:text-6xl font-bold uppercase text-green-700">About Me!</h1>
            <p className="text-green-700">
              I am a Passionate Web Developer <br /> truning Ideas Into Reality
            </p>
            <p className="text-green-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus exercitationem temporibus labore ea aspernatur architecto, reprehenderit quia sequi voluptas accusamus assumenda dolorum eveniet molestias error ex, enim harum ipsa doloremque.
            </p>
            <button className="bg-green-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-700">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;

