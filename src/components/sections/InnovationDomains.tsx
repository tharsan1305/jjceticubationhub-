import React from "react";
import { motion } from "motion/react";
import { domains } from "../../constants";
import { SectionHeader } from "../common/UIComponents";

export const InnovationDomains = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom">
        <SectionHeader 
          title="Innovation Domains" 
          subtitle="Sectors We Support" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {domains.map((domain, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.05, duration: 0.8 }}
               whileHover={{ y: -10 }}
               className="p-16 rounded-[3.5rem] bg-slate-50 relative overflow-hidden group cursor-pointer border border-transparent hover:border-slate-200 transition-all duration-700"
             >
               {/* Background Decorative Pattern */}
               <div className="absolute top-0 right-0 w-48 h-48 bg-linear-to-bl from-primary/5 to-transparent rounded-bl-[100px] -z-1" />
               
               <div className={`w-20 h-20 ${domain.color} bg-white rounded-3xl flex items-center justify-center mb-10 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                 <domain.icon className="w-10 h-10" />
               </div>
               
               <h3 className="text-3xl font-black text-primary mb-6 tracking-tighter group-hover:text-secondary transition-colors italic">{domain.name}</h3>
               <p className="text-sm text-text-muted font-medium leading-relaxed opacity-70">Focusing on high-potential technological advancements in {domain.name.toLowerCase()} to build scalable and sustainable global solutions.</p>
               
               <div className="mt-12 flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-primary/30 group-hover:text-secondary transition-all">
                  Browse Startups
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    →
                  </motion.div>
               </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
