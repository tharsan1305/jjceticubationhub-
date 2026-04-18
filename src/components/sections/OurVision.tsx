import React from "react";
import { motion } from "motion/react";

export const OurVision = () => {
  return (
    <section className="pt-40 pb-32 bg-slate-900 overflow-hidden relative">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-[60%] h-full bg-linear-to-l from-primary/20 to-transparent skew-x-[-20deg] translate-x-1/2 opacity-50" />
      <div className="noise-overlay absolute inset-0 opacity-[0.05]" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 xl:gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:order-1 relative"
          >
            <div className="absolute -inset-8 bg-secondary/20 blur-[100px] rounded-full animate-pulse" />
            <div className="relative z-10 rounded-[3rem] md:rounded-[4.5rem] overflow-hidden border-[10px] md:border-[16px] border-white/5 shadow-2xl">
              <img 
                src="https://res.cloudinary.com/dgqlb8j2x/image/upload/v1776457990/WhatsApp_Image_2026-04-17_at_1.19.11_PM_eeikud.jpg" 
                className="w-full h-auto hover:scale-110 transition-transform duration-[3000ms]" 
                alt="Our Vision"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2"
          >
            <div className="flex items-center gap-6 mb-10">
               <div className="h-px w-12 bg-secondary" />
               <p className="text-secondary font-black uppercase tracking-[0.5em] text-[10px]">Future Focus</p>
            </div>
            <h2 className="text-6xl md:text-7xl lg:text-[6rem] font-black text-white mb-12 leading-[0.9] tracking-tighter">
              Our <span className="text-secondary italic">Vision</span>
            </h2>
            <div className="space-y-12">
              <p className="text-xl md:text-2xl lg:text-3xl text-white font-medium leading-tight tracking-tight max-w-xl">
                To cultivate a thriving ecosystem of innovation and entrepreneurship at JJCET, where student brilliance is transformed into market-leading ventures.
              </p>
              <div className="h-1 w-32 bg-secondary/30 rounded-full" />
              <p className="text-lg text-white/40 leading-relaxed font-medium max-w-lg">
                We believe that the classrooms of today are the boardrooms of tomorrow. Our mission is to provide the critical infrastructure, expert mentorship, and industry connections needed for student-led startups to achieve global excellence.
              </p>
              
              <div className="grid grid-cols-2 gap-12 pt-16 border-t border-white/5">
                <motion.div whileHover={{ y: -5 }}>
                  <p className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter uppercase">Impact</p>
                  <p className="text-[10px] text-white/30 font-black uppercase tracking-[0.4em]">Global Excellence</p>
                </motion.div>
                <motion.div whileHover={{ y: -5 }}>
                  <p className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter uppercase">Growth</p>
                  <p className="text-[10px] text-white/30 font-black uppercase tracking-[0.4em]">Student Driven</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
