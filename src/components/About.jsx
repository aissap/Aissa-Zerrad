import React, { useEffect, useState } from 'react';
import aboutImg from '../assets/about.jpg';
import { ABOUT_TEXT } from '../constants';
import { motion } from 'framer-motion';

const About = () => {
  const [isInView, setIsInView] = useState(false);

  const handleScroll = () => {
    const element = document.getElementById('about-section');
    const position = element.getBoundingClientRect();
    if (position.top >= 0 && position.top <= window.innerHeight * 0.5) {
      setIsInView(true);
    } else {
      setIsInView(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="about-section" className='border-b border-neutral-900 pb-4'>
      <h1 className='my-20 text-center text-4xl'>
        About
        <span className='text-neutral-500'> Me </span>
      </h1>

      <div className='flex flex-wrap items-center'>
        {/* Image Section with Animation */}
        <motion.div
          className='w-full lg:w-1/2 lg:p-8 flex justify-center'
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 200 }}
          transition={{
            opacity: { duration: 1.5, ease: "easeOut" },
            x: { duration: 1.5, ease: "easeOut" },
          }}
        >
          <img
            className='rounded-2xl w-80 h-80 object-cover shadow-lg'
            src={aboutImg}
            alt="about"
          />
        </motion.div>

        {/* Text Section with Animation */}
        <motion.div
          className='w-full lg:w-1/2 px-8'
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -200 }}
          transition={{
            opacity: { duration: 1.5, ease: "easeOut" },
            x: { duration: 1.5, ease: "easeOut" },
          }}
        >
          <p className='text-lg text-neutral-300 leading-relaxed whitespace-pre-line text-center lg:text-left'>
            {ABOUT_TEXT}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
