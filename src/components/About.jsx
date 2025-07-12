import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import aboutImg from '../assets/about.jpg';
import { ABOUT_TEXT } from '../constants';

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end 0.2'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <div ref={ref} className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl font-semibold">
        About <span className="text-neutral-500">Me</span>
      </h1>

      <div className="flex flex-wrap items-center">
        <motion.div
          className="w-full lg:w-1/2 lg:p-8 flex justify-center"
          style={{ opacity, scale }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <img
            src={aboutImg}
            alt="About"
            className="rounded-full w-80 h-80 object-cover shadow-2xl"
          />
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 px-8"
          style={{ opacity, scale }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <p className="text-lg text-neutral-300 leading-relaxed whitespace-pre-line text-center lg:text-left">
            {ABOUT_TEXT}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
