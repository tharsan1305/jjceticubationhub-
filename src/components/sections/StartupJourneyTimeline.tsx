import React from "react";
import { motion } from "motion/react";
import { journeySteps } from "../../constants";
import { SectionHeader } from "../common/UIComponents";

export const StartupJourneyTimeline = () => {
  return (
    <section id="process" className="section-padding bg-slate-50 overflow-hidden relative">
      <div className="container-custom">
        <SectionHeader 
          title="Startup Journey" 
          subtitle="Roadmap to Success" 
        />

        <div className="relative">
          {/* Timeline Line (Desktop) */}
          <div className="absolute top-[40px] left-0 w-full h-1 bg-primary/5 hidden lg:block" />
          
          <div className="grid lg:grid-cols-5 gap-12 gap-y-24">
            {journeySteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Connector for Mobile/Tablet (Vertical) */}
                {i < journeySteps.length - 1 && (
                  <div className="absolute top-[80px] w-1 h-full bg-primary/5 left-1/2 -translate-x-1/2 lg:hidden" />
                )}

                <div className="w-24 h-24 rounded-full bg-white border-8 border-slate-50 shadow-2xl flex items-center justify-center mb-10 relative z-10 group-hover:border-secondary group-hover:bg-primary transition-all duration-700">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <step.icon className="w-10 h-10 text-primary group-hover:text-white transition-colors" />
                  </motion.div>
                  <div className="absolute -top-4 -right-4 w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white text-xs font-black shadow-xl group-hover:scale-110 transition-transform">
                    {i + 1}
                  </div>
                </div>
                
                <h3 className="text-2xl font-black text-primary mb-4 leading-tight tracking-tight px-4">{step.title}</h3>
                <p className="text-sm text-text-muted font-medium px-6 leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
