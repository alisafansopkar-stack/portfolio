import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaPaperPlane, FaTimes } from 'react-icons/fa';
import profilePhoto from '../assets/photo.jpeg';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    const url = `https://wa.me/919423230403?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setMessage('');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="mb-4 w-80 sm:w-80 bg-gray-900 border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden flex flex-col backdrop-blur-xl -translate-y-2 lg:transform-none"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-4 flex items-center justify-between shadow-md">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img src={profilePhoto} alt="Alisa" className="w-10 h-10 rounded-full object-cover border-2 border-green-400" />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-gray-900 rounded-full"></span>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">Alisa Fansopkar</h3>
                  <p className="text-green-100 text-xs flex items-center gap-1">
                    Typically replies within minutes
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-green-700 p-1.5 rounded-full transition-colors"
                aria-label="Close Chat"
              >
                <FaTimes size={16} />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-4 h-64 overflow-y-auto bg-[#0f172a] bg-opacity-95 flex flex-col gap-3 relative">
              <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
              
              <div className="self-start max-w-[85%] bg-gray-800 border border-gray-700/50 rounded-2xl rounded-tl-sm p-3 shadow-md relative z-10">
                <p className="text-gray-200 text-sm leading-relaxed">
                  Hi there! 👋 I'm available for work and opportunities. Drop a message and let's structure something awesome!
                </p>
                <span className="text-[10px] text-gray-400 absolute bottom-1 right-2 font-mono">Just now</span>
              </div>
            </div>

            {/* Chat Footer */}
            <div className="p-3 bg-gray-900 border-t border-gray-800 relative z-20">
              <form onSubmit={handleSend} className="flex gap-2 items-center">
                <input
                  type="text"
                  placeholder="Type your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="flex-1 bg-gray-800 text-gray-200 text-sm rounded-full px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-green-500 placeholder-gray-500 border border-gray-700 transition-shadow"
                />
                <button
                  type="submit"
                  disabled={!message.trim()}
                  className={`p-3 rounded-full flex items-center justify-center transition-all ${
                    message.trim() 
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:shadow-lg hover:shadow-green-500/30' 
                      : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                  }`}
                  aria-label="Send Message"
                >
                  <FaPaperPlane size={14} className="ml-0.5 -mr-0.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1, boxShadow: "0 0 25px rgba(34, 197, 94, 0.6)" }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="bg-green-500 hover:bg-green-400 text-white p-4 rounded-full shadow-[0_10px_25px_rgba(34,197,94,0.4)] flex items-center justify-center relative group z-50 border border-green-400/20"
            aria-label="Open WhatsApp Chat"
          >
            <FaWhatsapp size={32} />
            <span className="absolute w-full h-full rounded-full bg-green-400 opacity-20 group-hover:animate-ping -z-10"></span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
