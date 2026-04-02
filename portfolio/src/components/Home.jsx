import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import profilePhoto from '../assets/photo.jpeg';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-24 bg-gradient-to-b md:bg-gradient-to-br from-gray-900 via-[#111827] to-gray-900 text-white relative overflow-hidden pt-32">
      
      {/* Background glowing orb */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} 
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-600/30 rounded-full blur-[140px] pointer-events-none"
      ></motion.div>
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }} 
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/30 rounded-full blur-[140px] pointer-events-none"
      ></motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-xl z-10"
      >
        <motion.h2 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
          Welcome to <br/>
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]">My Portfolio</span>
        </motion.h2>
        <motion.p variants={itemVariants} className="mt-6 text-gray-300 text-xl font-light leading-relaxed">
          Hi, I'm Alisa Fansopkar 👋
          <br />
          <span className="font-semibold text-cyan-50">Frontend Developer</span> creating modern, highly interactive, and responsive web applications using React and Tailwind CSS.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-10 flex flex-wrap gap-6">
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(6, 182, 212, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold px-8 py-3 rounded-full transition-all"
          >
            View Projects
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "rgba(139, 92, 246, 0.1)", borderColor: "#8b5cf6", boxShadow: "0 0 25px rgba(139, 92, 246, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-gray-500 text-gray-200 px-8 py-3 rounded-full transition-all font-bold"
          >
            Contact Me
          </motion.button>
          <motion.a 
            href="https://wa.me/919423230403"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(34, 197, 94, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold px-8 py-3 rounded-full transition-all"
          >
            <FaWhatsapp size={22} />
            WhatsApp Me
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        className="mt-16 md:mt-0 z-10 relative group"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-violet-500 rounded-[2.5rem] blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
        <motion.img 
          whileHover={{ scale: 1.05, y: -10 }}
          transition={{ type: "spring", stiffness: 300 }}
          src={profilePhoto} 
          alt="profile illustration" 
          className="w-64 h-[350px] md:w-[340px] md:h-[440px] object-cover object-top rounded-[2.5rem] border-4 border-gray-800/80 relative z-10 bg-gray-900 shadow-2xl" 
        />
      </motion.div>
    </section>
  );
}

