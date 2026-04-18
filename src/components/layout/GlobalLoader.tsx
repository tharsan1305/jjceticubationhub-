import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export const GlobalLoader = ({ onComplete }: { onComplete: () => void }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2500; // 2.5 seconds total
    const interval = 20;
    const step = 100 / (duration / interval);

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return Math.min(prev + step, 100);
      });
    }, interval);

    const mainTimer = setTimeout(() => {
      setLoading(false);
      setTimeout(onComplete, 500); // Fade out duration
    }, duration);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(mainTimer);
    };
  }, [onComplete]);

  const jjcetText = "JJCET";

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center overflow-hidden"
        >
          <div className="flex flex-col items-center w-full max-w-lg relative">
            {/* Step 1: Logo (0-0.5s) */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mb-8"
            >
              <img 
                src="/logo.png" 
                alt="JJ College Logo" 
                className="w-[180px] h-auto object-contain"
              />
            </motion.div>

            {/* Step 2: JJCET Text (0.5-1s) */}
            <div className="flex mb-4">
              {jjcetText.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: 0.5 + (index * 0.05) 
                  }}
                  className="text-4xl md:text-6xl lg:text-[4rem] font-black text-white tracking-[0.3em]"
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Step 3: INCUBATION HUB (1-1.5s) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1, ease: "easeOut" }}
              className="text-[#C8581A] text-lg md:text-xl font-black uppercase tracking-[0.2em] mb-8"
            >
              INCUBATION HUB
            </motion.div>

            {/* Step 4: Divider Line (1.5-2s) */}
            <div className="relative flex items-center justify-center w-full h-px mb-8">
               <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: 120 }}
                 transition={{ duration: 0.5, delay: 1.5, ease: "linear" }}
                 className="absolute right-1/2 h-px bg-[#C8581A]"
               />
               <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: 120 }}
                 transition={{ duration: 0.5, delay: 1.5, ease: "linear" }}
                 className="absolute left-1/2 h-px bg-white"
               />
            </div>

            {/* Step 5: Tagline (2-2.5s) */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2 }}
              className="text-[#888] text-[0.85rem] font-medium uppercase tracking-[0.15em]"
            >
              Nurturing Tomorrow's Innovators
            </motion.p>
          </div>

          {/* Progress Bar (Bottom) */}
          <div className="fixed bottom-0 left-0 w-full h-[3px] bg-white/10">
             <motion.div 
               initial={{ width: 0 }}
               animate={{ width: `${progress}%` }}
               className="h-full bg-[#C8581A]"
             />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
