import React from 'react';
import { motion } from 'framer-motion';
import kaveriImage from '../assets/kaveri.webp';

export default function Education() {
  return (
    <section id="education" className="bg-[#0b1120] py-24 px-10 md:px-20 relative text-white border-t border-gray-700/50">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center">
          My <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">Education</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Degree Card */}
          <div className="bg-gray-900/60 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-gray-700 relative hover:border-cyan-500/50 transition-colors duration-500 group">
            <div className="absolute top-0 right-0 w-1/2 h-1 bg-gradient-to-l from-cyan-400 to-transparent opacity-80 group-hover:opacity-100 transition-opacity rounded-tr-3xl z-10"></div>
            
            <div className="mb-6 overflow-hidden rounded-2xl relative w-full h-48 border border-gray-700/50">
              <img src={kaveriImage} alt="Kaveri College of Arts, Science, & Commerce" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent pointer-events-none"></div>
            </div>
            
            <div className="flex flex-col gap-2 relative z-10">
              <span className="text-cyan-400 font-semibold tracking-wider text-sm md:text-base border border-cyan-400/30 bg-cyan-400/10 py-1 px-3 rounded-full w-fit mb-2">2023 - 2026</span>
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Bachelors of Science in Computer Science</h3>
              <p className="text-xl text-gray-300 font-medium mt-2">Kaveri College of Arts, Science, & Commerce</p>
              <p className="text-md text-gray-400 italic">Savitribai Phule Pune University</p>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-700/50">
              <p className="text-gray-300 leading-relaxed font-light">
                Pursuing a comprehensive curriculum in computer science, focusing on programming, algorithms, database management, and modern software development practices.
              </p>
            </div>
          </div>

          {/* Courses Card */}
          <div className="bg-gray-900/60 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-gray-700 relative hover:border-violet-500/50 transition-colors duration-500 group">
            <div className="absolute top-0 left-0 w-1/2 h-1 bg-gradient-to-r from-violet-500 to-transparent opacity-80 group-hover:opacity-100 transition-opacity rounded-tl-3xl"></div>
            
            <div className="flex flex-col gap-2 h-full">
              <span className="text-violet-400 font-semibold tracking-wider text-sm md:text-base border border-violet-400/30 bg-violet-400/10 py-1 px-3 rounded-full w-fit mb-2">Courses & Certifications</span>
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Full Stack Developer</h3>
              <p className="text-xl text-gray-300 font-medium mt-2">Specialization: Python</p>
              
              <div className="mt-6 pt-6 border-t border-gray-700/50 flex-grow">
                <p className="text-gray-300 leading-relaxed font-light">
                  Completed specialized training in Full Stack Development using Python. Mastered both frontend and backend technologies to build end-to-end dynamic web applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
