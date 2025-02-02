import React from "react";
import { HERO_CONTENT } from "../constants";
<<<<<<< HEAD
import profilePic from "../assets/KevinRushProfile.PNG";
=======
import profilePic from "../assets/prof.PNG";
>>>>>>> 7e21e16d8de1426590f7269463f734430f52009b

function Hero() {
  return (
    <div className="mt-24 border-b border-neutral-800 pb-4">
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left px-6">
          <h1 className="pb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-transparent bg-gradient-to-r from-pink-400 via-purple-500 to-white bg-clip-text">
            Aissa Zerrad
          </h1>
          <span className="text-2xl sm:text-3xl md:text-4xl font-semibold text-transparent bg-gradient-to-r from-pink-400 via-slate-500 to-white bg-clip-text tracking-tight">
            Full Stack Developer
          </span>
          <p className="my-2 max-w-xl py-6 font-light tracking-tighter text-transparent bg-gradient-to-r from-pink-400 via-purple-500 to-white bg-clip-text">
            {HERO_CONTENT}
          </p>

          {/* Skills Section */}
          <div className="mt-6 flex gap-6 justify-center">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-transparent bg-gradient-to-r from-pink-400 via-purple-500 to-white bg-clip-text">
                Front-End
              </h3>
              <ul className="text-white">
                <li>React</li>
                <li>Next.js</li>
                <li>HTML5 / CSS3</li>
                <li>TailwindCSS</li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-transparent bg-gradient-to-r from-pink-400 via-purple-500 to-white bg-clip-text">
                Back-End
              </h3>
              <ul className="text-white">
                <li>Node.js</li>
                <li>Python (Flask/Django)</li>
                <li>MongoDB</li>
                <li>JWT Authentication</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Section (Profile Picture) */}
        <div className="w-full lg:w-1/2 flex justify-center lg:p-8 mt-8 lg:mt-0">
          <div className="relative max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px]">
<<<<<<< HEAD
            <svg className="relative w-40 sm:w-60 md:w-80 h-auto" viewBox="0 0 100 100">
              <defs>
                <clipPath id="hexagon">
                  <polygon points="50 0, 100 25, 100 75, 50 100, 0 75, 0 25" />
                </clipPath>
              </defs>
              <image
                xlinkHref={profilePic}
                width="100%"
                height="100%"
                clipPath="url(#hexagon)"
                className="object-cover rounded-full shadow-lg"
              />
            </svg>
=======
            <div className="w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 rounded-full overflow-hidden border-4 border-pink-500 shadow-lg">
              <img src={profilePic} alt="Aissa Zerrad" className="w-full h-full object-cover" />
            </div>
>>>>>>> 7e21e16d8de1426590f7269463f734430f52009b

            {/* Gradient Border Around Profile Picture */}
            <div className="absolute inset-0 border-4 border-gradient-to-b from-pink-500 via-purple-600 to-indigo-700 rounded-full shadow-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;