import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    
    const formData = new FormData(e.target);

    // ✅ Add Web3Forms Access Key
    formData.append("access_key", "dae40daf-7ed2-442f-b98d-917d00b87e6e");
    formData.append("subject", "New Portfolio Contact Message");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const result = await response.json();

      if(result.success) {
        setStatus("Message Sent Successfully! 🎉");
        e.target.reset();
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Error sending message.");
    }

    setTimeout(() => setStatus(""), 5000);
  };

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
          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Send me a message, and I'll get back to you as soon as possible.
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-16">

{/* LEFT PANEL */}
<motion.div className="flex-1 flex flex-col justify-center space-y-10">
  <div className="space-y-4">
    <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
      Let's build something amazing.
    </h3>
  </div>

  <div className="space-y-8 text-gray-300">

    {/* Email Card */}
    <a 
      href="mailto:alisa.fansopkar@gmail.com" 
      className="group flex items-center gap-6 p-4 rounded-2xl hover:bg-gray-800/40 border border-transparent hover:border-gray-700/50 transition-all duration-300 w-fit"
    >
      <div className="w-16 h-16 bg-gray-900/80 rounded-2xl flex items-center justify-center border border-gray-700/50 group-hover:border-cyan-500 group-hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all duration-300 group-hover:-translate-y-1">
        <FaEnvelope className="text-cyan-400 text-2xl" />
      </div>
      <div>
        <p className="text-sm text-gray-500 font-semibold mb-1">Email Me</p>
        <span className="text-xl font-bold">alisa.fansopkar@gmail.com</span>
      </div>
    </a>

    {/* Mobile Card */}
    <a 
      href="tel:+919423230403" 
      className="group flex items-center gap-6 p-4 rounded-2xl hover:bg-gray-800/40 border border-transparent hover:border-gray-700/50 transition-all duration-300 w-fit"
    >
      <div className="w-16 h-16 bg-gray-900/80 rounded-2xl flex items-center justify-center border border-gray-700/50 group-hover:border-violet-500 group-hover:shadow-[0_0_25px_rgba(139,92,246,0.4)] transition-all duration-300 group-hover:-translate-y-1">
        <FaPhone className="text-violet-400 text-2xl" />
      </div>
      <div>
        <p className="text-sm text-gray-500 font-semibold mb-1">Call Me</p>
        <span className="text-xl font-bold">+91 9423230403</span>
      </div>
    </a>

  </div>
</motion.div>

          {/* FORM PANEL SAME UI */}
          <motion.div className="flex-1">
            <div className="bg-gray-900/40 backdrop-blur-2xl p-10 md:p-12 rounded-[2rem] border border-gray-700/50">
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">

                <input type="text" name="name" required className="w-full bg-gray-950/50 border-b-2 border-gray-700 px-2 py-4 text-white" placeholder="Your Name" />

                <input type="email" name="email" required className="w-full bg-gray-950/50 border-b-2 border-gray-700 px-2 py-4 text-white" placeholder="Your Email" />

                <textarea name="message" rows="4" required className="w-full bg-gray-950/50 border-2 border-gray-700 rounded-xl px-4 py-4 text-white" placeholder="Your Message"></textarea>

                <button type="submit" className="bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold py-4 rounded-xl">
                  Send Message 🚀
                </button>

                {status && (
                  <div className="text-center text-cyan-400 text-sm">
                    {status}
                  </div>
                )}
              </form>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}