import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="bg-gray-800 py-24 px-10 md:px-20 relative text-white border-t border-gray-700/50">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8">
          About <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">Me</span>
        </h2>
        <div className="bg-gray-900/60 backdrop-blur-xl p-8 md:p-12 rounded-3xl shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-gray-700 relative hover:border-cyan-500/50 transition-colors duration-500 group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-t-3xl opacity-80 group-hover:opacity-100 transition-opacity"></div>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light text-left">
            I am a <span className="text-cyan-300 font-semibold drop-shadow-md">Frontend Developer</span> with experience in building responsive and modern web applications. I love turning design ideas into functional websites using ReactJS and Tailwind CSS. My focus is on creating user-friendly, performant, and visually appealing interfaces.
          </p>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light mt-6 text-left">
            I am always eager to learn new technologies and improve my skills. My goal is to deliver high-quality projects that make an impact and provide excellent user experiences. Let's create something amazing together!
          </p>
        </div>
      </motion.div>
    </section>
  );
}

