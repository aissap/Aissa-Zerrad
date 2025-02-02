import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Projects from './components/Projects';

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
<<<<<<< HEAD
      {/* Background Gradient */}
=======
      
>>>>>>> 7e21e16d8de1426590f7269463f734430f52009b
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

<<<<<<< HEAD
      {/* Main Container (Fixed Typo: 'container') */}
=======
      
>>>>>>> 7e21e16d8de1426590f7269463f734430f52009b
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
      </div>
    </div>
  );
};

export default App;
