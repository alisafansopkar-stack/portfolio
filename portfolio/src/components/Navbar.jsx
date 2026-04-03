import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center pt-6 px-4 md:px-8 pointer-events-none">
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
        className="pointer-events-auto w-full max-w-6xl flex justify-between items-center px-6 py-3 bg-[#0b1120]/80 backdrop-blur-2xl border border-gray-700/50 text-white shadow-[0_10px_40px_rgba(0,0,0,0.5)] rounded-full"
      >
        <motion.h1 
          whileHover={{ scale: 1.05, textShadow: "0px 0px 12px rgba(6,182,212,0.8)" }}
          className="text-xl md:text-2xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent cursor-pointer transition-all ml-2"
        >
          Alisa Fansopkar
        </motion.h1>
        
        <div className="hidden lg:flex items-center gap-4 bg-gray-900/60 rounded-full px-3 py-1.5 border border-gray-700/50 shadow-inner">
          <ul className="flex items-center gap-1 text-sm font-semibold tracking-wide">
            {['Home', 'About', 'Education', 'Skills', 'Projects', 'Contact'].map((item) => (
              <motion.li key={item} whileHover={{ scale: 1.05 }}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="px-5 py-2 rounded-full text-gray-300 hover:text-cyan-300 hover:bg-gray-800 transition-all duration-300 block hover:shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Vertical Divider */}
          <div className="h-6 w-px bg-gray-700 mx-2 shadow-[0_0_5px_rgba(255,255,255,0.1)]"></div>

         {/* Social Icons wrapped in circular buttons */}
<div className="flex gap-3 items-center mr-1">

  {/* Instagram */}
  <motion.a 
    href="https://www.instagram.com/__alisa000123?igsh=MWMzdWtrMmFmaHpleg=="
    target="_blank" 
    rel="noopener noreferrer"
    whileHover={{ y: -3, scale: 1.15, backgroundColor: "rgba(217,70,239,0.1)", borderColor: "rgba(217,70,239,0.5)" }} 
    className="w-9 h-9 rounded-full border border-gray-700 bg-gray-800/80 flex items-center justify-center text-gray-400 hover:text-fuchsia-400 hover:shadow-[0_0_15px_rgba(217,70,239,0.4)] transition-all duration-300"
    aria-label="Instagram"
  >
    <FaInstagram size={18} />
  </motion.a>

  {/* Facebook */}
  <motion.a 
    href="https://www.facebook.com/your_username" 
    target="_blank" 
    rel="noopener noreferrer"
    whileHover={{ y: -3, scale: 1.15, backgroundColor: "rgba(59,130,246,0.1)", borderColor: "rgba(59,130,246,0.5)" }} 
    className="w-9 h-9 rounded-full border border-gray-700 bg-gray-800/80 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-300"
    aria-label="Facebook"
  >
    <FaFacebookF size={18} />
  </motion.a>

  {/* LinkedIn */}
  <motion.a 
    href="https://www.linkedin.com/in/alisa-fansopkar-92237937a/?trk=opento_sprofile_goalscard" 
    target="_blank" 
    rel="noopener noreferrer"
    whileHover={{ y: -3, scale: 1.15, backgroundColor: "rgba(14,165,233,0.1)", borderColor: "rgba(14,165,233,0.5)" }} 
    className="w-9 h-9 rounded-full border border-gray-700 bg-gray-800/80 flex items-center justify-center text-gray-400 hover:text-sky-400 hover:shadow-[0_0_15px_rgba(14,165,233,0.4)] transition-all duration-300"
    aria-label="LinkedIn"
  >
    <FaLinkedinIn size={18} />
  </motion.a>

</div>
        </div>
      </motion.nav>
    </div>
  );
}


