import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Who can apply to JJCET Incubation Hub?",
    a: "Any student from JJ College of Engineering & Technology with an innovative startup idea can apply. We welcome students from all departments and all years of study."
  },
  {
    q: "What support do we provide?",
    a: "We provide mentorship, workspace, networking opportunities, guidance on funding, legal support, and connections to industry experts and investors."
  },
  {
    q: "How long is the incubation period?",
    a: "The standard incubation period is 6 to 12 months depending on the startup's progress and requirements."
  },
  {
    q: "Is there any fee to join?",
    a: "No. The JJCET Incubation Hub is completely free for all selected student startups."
  },
  {
    q: "How many startups are selected per batch?",
    a: "We carefully select 3 to 5 high-potential startups per batch to ensure quality mentorship and support."
  },
  {
    q: "What happens after incubation?",
    a: "Successful startups get connected to investors, industry partners, and can continue operations as independent companies with our ongoing support."
  }
];

export const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="container-custom">
        <div className="text-center mb-24">
           <span className="bg-secondary/10 text-secondary text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-[0.4em] mb-6 inline-block">
             Knowledge Base
           </span>
           <h2 className="text-4xl md:text-5xl font-black text-primary dark:text-white uppercase tracking-tighter mb-4">
             Frequently Asked <br className="hidden md:block" /> Questions
           </h2>
           <p className="text-text-muted dark:text-white/40 font-bold uppercase tracking-widest text-xs">
             Everything you need to know about incubation
           </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i}
              className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                activeIndex === i 
                  ? "border-[#C8581A] bg-white dark:bg-slate-900 shadow-xl" 
                  : "border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50"
              }`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-8 text-left group"
              >
                <div className="flex items-center gap-4">
                   <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${
                     activeIndex === i ? "bg-[#C8581A] text-white" : "bg-white dark:bg-slate-800 text-primary dark:text-white"
                   }`}>
                      <HelpCircle className="w-4 h-4" />
                   </div>
                   <span className={`text-sm font-black uppercase tracking-widest transition-colors ${
                     activeIndex === i ? "text-[#C8581A]" : "text-primary dark:text-white"
                   }`}>
                    {faq.q}
                   </span>
                </div>
                <ChevronDown className={`w-5 h-5 transition-transform duration-500 ${
                  activeIndex === i ? "rotate-180 text-[#C8581A]" : "text-slate-300"
                }`} />
              </button>

              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="px-20 pb-10">
                       <p className="text-text-muted dark:text-white/50 text-sm font-bold leading-relaxed">
                         {faq.a}
                       </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
