import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/profile.jpg"; 

function Hero() {
  return (
    <div className="mt-24 border-b border-neutral-800 pb-4">
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left px-6">
          <h1 className="pb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-transparent bg-gradient-to-r from-purple-400 via-purple-600 to-white bg-clip-text">
            Aissa Zerrad
          </h1>
          <span className="text-2xl sm:text-3xl md:text-4xl font-semibold text-transparent bg-gradient-to-r from-purple-400 via-purple-600 to-white bg-clip-text tracking-tight">
            Full Stack Developer
          </span>
          <p className="my-2 max-w-xl py-6 font-light tracking-tighter text-transparent bg-gradient-to-r from-purple-400 via-purple-600 to-white bg-clip-text">
            {HERO_CONTENT}
          </p>

          {/* Skills Section */}
          <div className="mt-6 flex gap-6 justify-center">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-transparent bg-gradient-to-r from-purple-400 via-purple-600 to-white bg-clip-text">
                Front-End
              </h3>
              {/* Applied gradient classes to the ul and li elements */}
              <ul className="text-transparent bg-gradient-to-r from-purple-400 via-purple-600 to-white bg-clip-text">
                <li>React</li>
                <li>Next.js</li>
                <li>HTML5 / CSS3</li>
                <li>TailwindCSS</li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-transparent bg-gradient-to-r from-purple-400 via-purple-600 to-white bg-clip-text">
                Back-End
              </h3>
              {/* Applied gradient classes to the ul and li elements */}
              <ul className="text-transparent bg-gradient-to-r from-purple-400 via-purple-600 to-white bg-clip-text">
                <li>Node.js</li>
                <li>Python (Flask/Django)</li>
                <li>MongoDB</li>
                <li>JWT Authentication</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Section (Profile Picture) */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-8">
          {/* Gradient Circle Border */}
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-pink-500 via-purple-600 to-indigo-700 p-[3px]">
            
            {/* Inner white circle with padding to fit image */}
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
              <img
                src={profilePic}
                alt="Aissa Zerrad"
                className="w-full h-full object-cover rounded-full object-top" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;