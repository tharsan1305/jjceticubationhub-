import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const AnnouncementBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isClosed = sessionStorage.getItem("announcement_closed");
    if (!isClosed) {
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem("announcement_closed", "true");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          className="fixed top-0 left-0 right-0 z-[10001] h-10 bg-[#C8581A] text-white flex items-center justify-center px-6 overflow-hidden shadow-lg"
        >
          <div className="flex items-center gap-4">
             <div className="flex items-center gap-2">
                <Sparkles className="w-3 h-3 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap">
                   Applications Open for Batch 2026 — 
                </span>
             </div>
             <Link 
               to="/apply" 
               className="group flex items-center gap-1 text-[10px] font-black uppercase tracking-[0.2em] border-b border-white hover:border-transparent transition-all"
             >
               Apply Now
               <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
             </Link>
          </div>

          <button 
            onClick={handleClose}
            className="absolute right-4 p-2 text-white/50 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
