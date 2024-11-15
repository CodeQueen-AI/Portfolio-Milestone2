import React from 'react';
import Link from 'next/link';
const ContactSection = () => {
  return (
    <section id="section-wrapper" className="w-full py-10">
      <div className="flex flex-col md:flex-row max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg">
        <div className="w-full md:w-1/3 p-5 bg-gradient-to-br from-pink-400 to-blue-400 text-white shadow-md">
          <h2 className="text-2xl font-bold text-white">Contact Information</h2>
          <h3 className="mt-3 text-lg font-light">Fill Up The Form📞</h3>
          <ul className="mt-8 space-y-4">
            <li className="flex items-center">
              <span>Phone: </span>
              <Link href="tel:+123456789" className="text-white">123456789</Link>
            </li>
            <li className="flex items-center">
              <span>Email: </span>
              <Link href="mailto:codeq209@gmail.com" className="text-white">codeq209@gmail.com</Link>
            </li>
            <li className="flex items-center">
              <span>Address: </span>
              <span>123 Street Name, City, Country</span>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-2/3 p-5 bg-gray-50 shadow-md">
          <form>
            <h2 className="text-2xl font-bold text-gray-800">Send a message</h2>
            <div className="mt-6">
              <div className="mb-4">
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="First Name"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="Last Name"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="Email"
                />
              </div>
              <div className="mb-4">
                <input
                  type="tel"
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="Phone"
                />
              </div>
              <div className="mb-4">
                <textarea
                  name="message"
                  placeholder="Write Your Message"
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-pink-500 h-32"
                />
              </div>
              <button
                type="submit"
                className="w-full p-3 bg-pink-500 text-white font-bold rounded-lg shadow-md hover:bg-pink-600 focus:ring-4 focus:ring-pink-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
