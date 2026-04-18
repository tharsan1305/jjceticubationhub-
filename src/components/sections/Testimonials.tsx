import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mr. Tharsan",
    role: "Founder & CEO, Nexora Crew",
    quote: "The incubation hub gave us the mentorship to transform ideas into a working startup. Moving from concept to real execution was a life-changing experience.",
    image: "https://res.cloudinary.com/dgqlb8j2x/image/upload/v1776452474/IMG_20260123_151908.png_muizui_ugtxbo.png"
  },
  {
    name: "Mr. Arun S",
    role: "Founder & CEO, Nexara Creation",
    quote: "Understanding the real journey of building a startup happened here. Workshops and mentor access gave me practical knowledge and startup sector confidence.",
    image: "https://res.cloudinary.com/dgqlb8j2x/image/upload/v1776457914/WhatsApp_Image_2026-04-18_at_2.01.11_AM_winf8s.jpg"
  },
  {
    name: "Mr. Prasanna Venkatesan R",
    role: "Founder & CEO, Rapid Arms",
    quote: "Innovation thrives in the right environment. The hub encouraged us to think like entrepreneurs and build scalable solutions for real-world problems.",
    image: "https://res.cloudinary.com/dgqlb8j2x/image/upload/v1776452992/WhatsApp_Image_2026-04-17_at_11.36.48_AM_xbshgk.jpg"
  }
];

export const Testimonials = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section 
      className="py-32 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container-custom">
        <div className="text-center mb-24">
           <h2 className="text-4xl md:text-5xl font-black text-primary dark:text-white uppercase tracking-tighter mb-4">
             Words from Our Founders
           </h2>
           <p className="text-[#C8581A] text-xs font-black uppercase tracking-[0.4em]">Success Stories in the Making</p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
           {testimonials.map((t, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.2 }}
               className="bg-white dark:bg-slate-800 rounded-[2.5rem] p-10 py-16 border border-slate-100 dark:border-slate-700 relative group hover:-translate-y-4 transition-all duration-700 shadow-xl shadow-primary/5"
             >
                <Quote className="w-16 h-16 text-[#C8581A]/10 absolute top-10 right-10 group-hover:scale-120 transition-transform duration-700" />
                
                <div className="relative z-10">
                   <p className="text-lg italic font-bold text-primary/70 dark:text-white/70 mb-12 leading-relaxed">
                     "{t.quote}"
                   </p>
                   
                   <div className="flex items-center gap-6">
                      <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-slate-50 dark:border-slate-700">
                         <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                         <h4 className="font-black text-sm text-primary dark:text-white uppercase tracking-widest">{t.name}</h4>
                         <p className="text-[10px] font-black text-[#C8581A] uppercase tracking-widest mt-1">{t.role}</p>
                      </div>
                   </div>
                </div>
             </motion.div>
           ))}
        </div>

        {/* Mobile View with Auto-Slide */}
        <div className="lg:hidden relative h-[500px]">
           <AnimatePresence mode="wait">
             <motion.div
               key={activeIndex}
               initial={{ opacity: 0, x: 50 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: -50 }}
               className="bg-white dark:bg-slate-800 rounded-[2.5rem] p-12 py-20 border border-slate-100 dark:border-slate-700 h-full flex flex-col justify-center"
             >
                <Quote className="w-16 h-16 text-[#C8581A]/10 absolute top-10 right-10" />
                
                <p className="text-xl italic font-bold text-primary/70 dark:text-white/70 mb-12 leading-relaxed">
                  "{testimonials[activeIndex].quote}"
                </p>
                
                <div className="flex items-center gap-6">
                   <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-2xl">
                      <img src={testimonials[activeIndex].image} alt={testimonials[activeIndex].name} className="w-full h-full object-cover" />
                   </div>
                   <div>
                      <h4 className="font-black text-lg text-primary dark:text-white uppercase tracking-tighter">{testimonials[activeIndex].name}</h4>
                      <p className="text-xs font-black text-[#C8581A] uppercase tracking-widest mt-1">{testimonials[activeIndex].role}</p>
                   </div>
                </div>
             </motion.div>
           </AnimatePresence>
           
           <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
              {testimonials.map((_, i) => (
                <button 
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-2 rounded-full transition-all duration-500 ${activeIndex === i ? "w-12 bg-[#C8581A]" : "w-2 bg-slate-200"}`}
                />
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};
