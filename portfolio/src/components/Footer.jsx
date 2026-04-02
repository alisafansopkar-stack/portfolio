import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="bg-gray-900 border-t border-gray-800 text-white"
    >
      <div className="max-w-6xl mx-auto px-10 md:px-20 py-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-500 text-sm font-medium">© 2026 Alisa Fansopkar. All rights reserved.</p>
        <div className="flex gap-8 mt-6 md:mt-0">
          <a href="#" className="text-gray-500 hover:text-indigo-400 text-sm font-semibold transition-colors">Privacy</a>
          <a href="#" className="text-gray-500 hover:text-indigo-400 text-sm font-semibold transition-colors">Terms</a>
          <a href="#contact" className="text-gray-500 hover:text-indigo-400 text-sm font-semibold transition-colors">Contact</a>
        </div>
      </div>
    </motion.footer>
  );
}

