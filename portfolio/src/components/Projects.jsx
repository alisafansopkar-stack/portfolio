import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'E-Commerce Platform',
    desc: 'A full-featured responsive web application using ReactJS and Tailwind CSS with a modern UI.',
    tags: ['React', 'Tailwind', 'Redux']
  },
  {
    title: 'Interactive Landing Page',
    desc: 'A modern landing page with complex framer-motion animations and interactive elements.',
    tags: ['React', 'Framer Motion']
  },
  {
    title: 'Portfolio Design',
    desc: 'An aesthetically pleasing, fully responsive dark-mode portfolio to showcase skills.',
    tags: ['Vite', 'Tailwind']
  },
  {
    title: 'Dashboard UI',
    desc: 'A sleek admin dashboard featuring charting libraries, grid layouts, and clean typography.',
    tags: ['React', 'ChartJS']
  }
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="projects" className="bg-gray-800 py-24 px-10 md:px-20 text-white border-t border-gray-700/50">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]">Projects</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg">Some of the best work I've done so far.</p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-10"
        >
          {projects.map((proj, idx) => (
            <motion.div 
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gray-900 rounded-3xl p-8 border border-gray-700 hover:border-cyan-500/60 shadow-xl hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-bl-full group-hover:bg-cyan-500/30 group-hover:scale-110 transition-all duration-500"></div>
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors duration-300 z-10 relative">{proj.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed z-10 relative group-hover:text-gray-300 transition-colors">
                {proj.desc}
              </p>
              <div className="flex flex-wrap gap-3 z-10 relative">
                {proj.tags.map(tag => (
                  <span key={tag} className="bg-gray-800 text-cyan-300 text-xs font-bold px-4 py-1.5 rounded-full border border-gray-700 group-hover:border-cyan-500/40 group-hover:bg-cyan-900/40 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

