import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="contact" className="min-h-screen px-10 md:px-20 py-24 bg-[#0b1120] text-white flex flex-col items-center border-t border-gray-800/50 relative overflow-hidden">
      
      {/* Dynamic Background elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none animate-float"></div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-violet-600/10 rounded-full blur-[150px] pointer-events-none animate-float" style={{animationDelay: '2s'}}></div>

      <div className="max-w-6xl w-full z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Get In <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(6,182,212,0.6)]">Touch</span>
          </h2>
          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">Have a project in mind or just want to chat? Send me a message, and I'll get back to you as soon as possible.</p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Panel - Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex-1 flex flex-col justify-center space-y-10"
          >
            <div className="space-y-4">
              <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Let's build something amazing.</h3>
            </div>
            
            <div className="space-y-8 text-gray-300">
              <a href="mailto:xyz@gmail.com" className="group flex items-center gap-6 p-4 rounded-2xl hover:bg-gray-800/40 border border-transparent hover:border-gray-700/50 transition-all duration-300 w-fit">
                <div className="w-16 h-16 bg-gray-900/80 rounded-2xl flex items-center justify-center border border-gray-700/50 group-hover:border-cyan-500 group-hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all duration-300 group-hover:-translate-y-1">
                  <span className="text-cyan-400 text-2xl font-bold">✉</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-semibold mb-1">Email Me</p>
                  <span className="text-xl font-bold group-hover:text-cyan-400 transition-colors">alisa.fansopkar@gmail.com</span>
                </div>
              </a>
              
              <a href="#" className="group flex items-center gap-6 p-4 rounded-2xl hover:bg-gray-800/40 border border-transparent hover:border-gray-700/50 transition-all duration-300 w-fit">
                <div className="w-16 h-16 bg-gray-900/80 rounded-2xl flex items-center justify-center border border-gray-700/50 group-hover:border-violet-500 group-hover:shadow-[0_0_25px_rgba(139,92,246,0.4)] transition-all duration-300 group-hover:-translate-y-1">
                  <span className="text-violet-400 text-2xl font-bold">☏</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-semibold mb-1">Call Me</p>
                  <span className="text-xl font-bold group-hover:text-violet-400 transition-colors">+91 942 323 0403</span>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Form Panel */}
          <motion.div 
            initial={{ opacity: 0, x: 50, rotateY: -10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex-1 perspective-1000"
          >
            <div className="bg-gray-900/40 backdrop-blur-2xl p-10 md:p-12 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-gray-700/50 relative overflow-hidden group hover:border-cyan-500/30 transition-all duration-700">
              
              {/* Form glowing top border */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-violet-500 opacity-40 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <form className="flex flex-col gap-8 relative z-10">
                <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{once:true}} className="flex flex-col gap-8">
                  
                  <motion.div variants={itemVariants} className="relative group/input">
                    <input type="text" id="name" required className="peer w-full bg-gray-950/50 border-b-2 border-gray-700 px-2 py-4 text-white focus:outline-none focus:border-cyan-500 transition-all duration-300 placeholder-transparent" placeholder="Name" />
                    <label htmlFor="name" className="absolute left-2 top-4 text-gray-500 font-medium text-lg transition-all duration-300 peer-placeholder-shown:text-lg peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-cyan-400 peer-valid:-top-3 peer-valid:text-sm peer-valid:text-cyan-400 pointer-events-none">
                      Your Name
                    </label>
                  </motion.div>

                  <motion.div variants={itemVariants} className="relative group/input">
                    <input type="email" id="email" required className="peer w-full bg-gray-950/50 border-b-2 border-gray-700 px-2 py-4 text-white focus:outline-none focus:border-violet-500 transition-all duration-300 placeholder-transparent" placeholder="Email" />
                    <label htmlFor="email" className="absolute left-2 top-4 text-gray-500 font-medium text-lg transition-all duration-300 peer-placeholder-shown:text-lg peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-violet-400 peer-valid:-top-3 peer-valid:text-sm peer-valid:text-violet-400 pointer-events-none">
                      Your Email
                    </label>
                  </motion.div>

                  <motion.div variants={itemVariants} className="relative group/input mt-4">
                    <textarea id="message" rows="4" required className="peer w-full bg-gray-950/50 border-2 border-gray-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-cyan-500 transition-all duration-300 placeholder-transparent resize-none" placeholder="Message"></textarea>
                    <label htmlFor="message" className="absolute left-4 top-4 text-gray-500 font-medium text-lg transition-all duration-300 peer-placeholder-shown:text-lg peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:bg-[#0d1425] peer-focus:px-2 peer-focus:text-sm peer-focus:text-cyan-400 peer-valid:-top-3 peer-valid:bg-[#0d1425] peer-valid:px-2 peer-valid:text-sm peer-valid:text-cyan-400 pointer-events-none">
                      Your Message
                    </label>
                  </motion.div>

                  <motion.button 
                    variants={itemVariants}
                    whileHover={{ scale: 1.03, boxShadow: "0 10px 30px -10px rgba(6,182,212,0.8)" }}
                    whileTap={{ scale: 0.98 }}
                    type="button" 
                    className="mt-6 bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white font-extrabold text-lg py-5 rounded-2xl shadow-xl transition-all duration-300 w-full overflow-hidden relative"
                  >
                    <span className="relative z-10">Send Message 🚀</span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                  </motion.button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


