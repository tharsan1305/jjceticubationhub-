import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { stats } from "../../constants";

export const Stats = () => {
  return (
    <section className="py-24 bg-[#0a1628] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-secondary/5 blur-[120px] rounded-full" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ stat, index }: { stat: any, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="text-center"
    >
      <div className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 tracking-tighter">
        <Counter value={stat.value} />
        <span className="text-[#C8581A] ml-1">{stat.suffix}</span>
      </div>
      <p className="text-[#C8581A] text-[10px] md:text-xs font-black uppercase tracking-[0.3em] font-sans">
        {stat.label}
      </p>
    </motion.div>
  );
};

const Counter = ({ value, duration = 2 }: { value: number, duration?: number }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (hasStarted) {
      let startVal = 0;
      const endVal = value;
      if (startVal === endVal) {
        setCount(endVal);
        return;
      }

      const totalMiliseconds = duration * 1000;
      const incrementTime = totalMiliseconds / endVal;

      const timer = setInterval(() => {
        startVal += 1;
        setCount(startVal);
        if (startVal >= endVal) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [hasStarted, value, duration]);

  return (
    <motion.span
      onViewportEnter={() => setHasStarted(true)}
      viewport={{ once: true }}
    >
      {count}
    </motion.span>
  );
};
