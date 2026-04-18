import React from "react";
import { motion } from "motion/react";
import { benefits } from "../../constants";
import { SectionHeader } from "../common/UIComponents";
import { CheckCircle2, ShieldCheck } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="text-secondary font-black uppercase tracking-[0.5em] text-xs mb-10">Institutional Excellence</p>
            <h2 className="text-5xl md:text-7xl font-black text-primary mb-12 leading-tight tracking-tighter">
              Legacy of <br />
              <span className="text-gradient italic">Innovation</span>
            </h2>
            <p className="text-xl text-text-muted font-medium leading-relaxed mb-12">
              JJCET Incubation Hub is more than just a workspace. It's an ecosystem built on the strong academic foundation of JJ College of Engineering and Technology, designed to bridge the gap between classroom learning and global entrepreneurship.
            </p>
            <div className="space-y-8">
               {[
                 "Vibrant community of 20+ active student founders",
                 "Access to state-of-the-art technical laboratories",
                 "Strategic mentorship from industry veterans",
                 "Strong alumni network for market expansion"
               ].map((item, i) => (
                 <motion.div 
                   key={i} 
                   whileHover={{ x: 10 }}
                   className="flex items-center gap-6 group"
                 >
                   <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center group-hover:bg-secondary transition-colors">
                     <CheckCircle2 className="text-secondary w-5 h-5 group-hover:text-white transition-colors" />
                   </div>
                   <span className="text-lg font-bold text-primary italic">{item}</span>
                 </motion.div>
               ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <img 
                src="https://d28wu8o6itv89t.cloudfront.net/images/StartupIndiaSchemejpg-1768550033506.jpeg" 
                className="w-full h-auto drop-shadow-2xl" 
                alt="Institutional Context"
              />
            </div>
            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -top-10 -right-10 glass-card !p-12 !rounded-[3rem] shadow-2xl hidden md:block"
            >
               <ShieldCheck className="text-secondary w-12 h-12 mb-4" />
               <p className="text-primary font-black text-2xl tracking-tighter">Certified</p>
               <p className="text-[10px] text-secondary font-black uppercase tracking-widest">Startup India Hub</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const WhyJoinUs = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container-custom">
        <SectionHeader 
          title="Why Incubation?" 
          subtitle="Our Support System" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="premium-card group"
            >
              <div className="w-20 h-20 bg-primary rounded-3xl flex items-center justify-center mb-10 group-hover:bg-secondary group-hover:rotate-12 transition-all duration-500 shadow-xl">
                 <benefit.icon className="text-white w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black text-primary mb-6 tracking-tighter italic">{benefit.title}</h3>
              <p className="text-text-muted font-medium leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
