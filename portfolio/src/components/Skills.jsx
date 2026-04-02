import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'ReactJS', level: 'Advanced', color: 'bg-cyan-500' },
  { name: 'Tailwind CSS', level: 'Advanced', color: 'bg-teal-400' },
  { name: 'JavaScript', level: 'Advanced', color: 'bg-yellow-400' },
  { name: 'HTML5', level: 'Advanced', color: 'bg-orange-500' },
  { name: 'CSS3', level: 'Advanced', color: 'bg-blue-600' },
  { name: 'Framer Motion', level: 'Intermediate', color: 'bg-violet-500' },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section id="skills" className="bg-gray-900 py-24 px-10 md:px-20 text-white border-t border-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-12"
        >
          My <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]">Tech Stack</span>
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.05 }}
              className="bg-gray-800/60 backdrop-blur-xl border border-gray-700/50 p-6 rounded-3xl flex flex-col items-center justify-center gap-4 shadow-lg hover:shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:border-cyan-500/50 transition-all duration-300 cursor-pointer relative overflow-hidden group"
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${skill.color}`}></div>
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`w-14 h-14 rounded-2xl ${skill.color} flex items-center justify-center text-gray-900 font-extrabold text-2xl shadow-lg relative z-10`}
              >
                {skill.name.charAt(0)}
              </motion.div>
              <div className="z-10">
                <h3 className="text-xl font-bold group-hover:text-cyan-300 transition-colors">{skill.name}</h3>
                <p className="text-sm text-gray-400 mt-1">{skill.level}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}