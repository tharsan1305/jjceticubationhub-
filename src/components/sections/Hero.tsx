import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Sparkles, Rocket, Globe, ChevronDown } from "lucide-react";
import { PremiumButton } from "../common/UIComponents";
import { Link } from "react-router-dom";

export const Hero = () => {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    const dots = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      bottom: `-${Math.random() * 20}%`,
      delay: Math.random() * 10,
      duration: 15 + Math.random() * 10,
      size: 2 + Math.random() * 3
    }));
    setParticles(dots);
  }, []);

  const headingWords = ["Empowering", "The", "Next", "Generation", "of", "Innovators"];

  return (
    <section className="relative min-h-screen flex items-center bg-[#0a1628] overflow-hidden pt-20">
      {/* Background Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {particles.map((dot) => (
          <motion.div
            key={dot.id}
            initial={{ opacity: 0, y: 0 }}
            animate={{ 
              opacity: [0, 0.3, 0], 
              y: '-110vh' 
            }}
            transition={{ 
              duration: dot.duration, 
              repeat: Infinity, 
              delay: dot.delay,
              ease: "linear"
            }}
            style={{
              position: 'absolute',
              left: dot.left,
              bottom: dot.bottom,
              width: dot.size,
              height: dot.size,
              backgroundColor: 'white',
              borderRadius: '50%'
            }}
          />
        ))}
      </div>

      {/* Decorative Gradients */}
      <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-secondary/10 blur-[120px] rounded-full" />
      <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/10 blur-[120px] rounded-full" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="text-left">
            {/* a) Badge Pill (0.3s) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-6 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 mb-8"
            >
              <Sparkles className="w-4 h-4 text-[#C8581A]" />
              <span className="text-white text-[10px] sm:text-xs font-black uppercase tracking-[0.2em]">
                Innovation & Entrepreneurship Hub
              </span>
            </motion.div>

            {/* b) Heading (Staggered words) */}
            <h1 className="text-5xl sm:text-6xl lg:text-[5.5rem] font-black leading-[0.95] text-white tracking-tighter uppercase mb-10 overflow-hidden">
               {headingWords.map((word, i) => (
                 <motion.span
                   key={i}
                   initial={{ opacity: 0, x: -40 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ 
                     duration: 0.6, 
                     delay: 0.5 + (i * 0.15), 
                     ease: [0.16, 1, 0.3, 1] 
                   }}
                   className="inline-block mr-[0.2em]"
                 >
                   {word}
                 </motion.span>
               ))}
            </h1>

            {/* c) Subtitle (1.1s) */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
              className="text-lg sm:text-xl text-slate-400 font-medium leading-relaxed max-w-2xl mb-12"
            >
              JJ College of Engineering & Technology (JJCET) Incubation Hub is a premier ecosystem where ideas transform into impactful ventures. We provide the mentorship, resources, and network to build the leaders of tomorrow.
            </motion.p>

            {/* d) CTA Buttons (1.3s) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3, ease: "easeOut" }}
              className="flex flex-wrap gap-6"
            >
              <PremiumButton 
                variant="secondary" 
                icon={Rocket}
                className="hover:scale-105 hover:shadow-[0_0_20px_rgba(200,88,26,0.3)]"
                href="/apply"
              >
                Launch Your Startup
              </PremiumButton>
              <PremiumButton 
                variant="glass" 
                icon={Globe}
                className="hover:scale-105"
                href="/startups"
              >
                Our Ventures
              </PremiumButton>
            </motion.div>
          </div>

          {/* e) Hero Visual (0.8s) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.5)] border border-white/10 group">
               <img 
                 src="https://jjcet.ac.in/wp-content/uploads/2020/02/JJCET-logo.png" 
                 alt="Institutional Logo" 
                 className="w-full h-auto p-12 group-hover:scale-105 transition-all duration-700"
               />
               <div className="absolute inset-0 bg-linear-to-t from-[#0a1628] via-transparent to-transparent opacity-60" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-center"
      >
        <span className="text-[#C8581A] text-[9px] font-black uppercase tracking-[0.4em]">Scroll to Explore</span>
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-[#C8581A]" />
        </motion.div>
      </motion.div>
    </section>
  );
};
