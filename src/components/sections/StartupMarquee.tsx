import React from "react";
import { motion } from "motion/react";

const startupNames = ["AREOSTELLAR", "MAXIFILED", "NEXARA CREATION", "NEXORA CREW", "RAPID ARMS"];

export const StartupMarquee = () => {
  return (
    <section className="py-12 bg-white border-y border-slate-100 overflow-hidden">
      <div className="flex relative">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex items-center gap-12 whitespace-nowrap"
        >
          {/* Duplicate for infinite effect */}
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-12">
              {startupNames.map((name) => (
                <div key={name} className="flex items-center gap-12">
                  <span className="text-2xl md:text-3xl font-black text-[#1a2a4a] tracking-[0.15em] hover:text-[#C8581A] transition-colors cursor-default select-none">
                    {name}
                  </span>
                  <div className="w-2 h-2 bg-[#C8581A] rounded-full" />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
