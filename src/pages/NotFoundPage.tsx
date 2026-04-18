import React from "react";
import { motion } from "motion/react";
import { ArrowLeft, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-[#0a1628] flex items-center justify-center p-6 relative overflow-hidden">
       {/* Background Elements */}
       <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 blur-[150px] rounded-full animate-pulse" />
       <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 blur-[150px] rounded-full animate-pulse [animation-delay:1s]" />

       <div className="max-w-2xl w-full text-center relative z-10">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
             <div className="mb-12 flex justify-center">
                <div className="w-24 h-24 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] flex items-center justify-center">
                   <Rocket className="w-12 h-12 text-[#C8581A] animate-bounce" />
                </div>
             </div>

             <h1 className="text-[10rem] font-black leading-none text-white/5 uppercase tracking-tighter absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 select-none">
               404
             </h1>

             <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter mb-8 bg-clip-text text-transparent bg-linear-to-b from-white to-white/50">
               Page Not <br /> <span className="text-[#C8581A]">Found</span>
             </h2>

             <p className="text-xl font-bold text-white/40 uppercase tracking-tight mb-16 max-w-lg mx-auto leading-relaxed">
               Looks like this startup idea <br /> <span className="text-white">doesn't exist yet!</span>
             </p>

             <Link 
               to="/" 
               className="inline-flex items-center gap-6 px-16 py-6 bg-[#C8581A] text-white rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] shadow-[0_30px_60px_rgba(200,88,26,0.3)] hover:scale-110 active:scale-95 transition-all"
             >
                <ArrowLeft className="w-5 h-5" />
                Go Back Home
             </Link>
          </motion.div>
       </div>

       {/* Floating Stars */}
       {[...Array(20)].map((_, i) => (
         <motion.div
           key={i}
           initial={{ opacity: 0 }}
           animate={{ opacity: [0, 1, 0] }}
           transition={{ duration: Math.random() * 3 + 2, repeat: Infinity, delay: Math.random() * 5 }}
           className="absolute w-1 h-1 bg-white rounded-full"
           style={{
             top: `${Math.random() * 100}%`,
             left: `${Math.random() * 100}%`
           }}
         />
       ))}
    </div>
  );
};
