import React from "react";
import { motion } from "motion/react";
import { reviews } from "../../constants";
import { SectionHeader } from "../common/UIComponents";
import { Quote } from "lucide-react";

export const SuccessStories = () => {
  return (
    <section className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-secondary/10 blur-[150px] rounded-full" />
      
      <div className="container-custom">
        <SectionHeader 
          title="Success Stories" 
          subtitle="Impact & Testimonials" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="glass-card flex flex-col h-full group hover:bg-white hover:border-slate-100 transition-all duration-700 hover:shadow-2xl hover:-translate-y-3"
            >
              <div className="mb-12">
                <Quote className="w-16 h-16 text-secondary/20 group-hover:text-secondary/40 transition-colors" />
              </div>
              
              <p className="text-xl text-primary font-medium leading-relaxed mb-12 flex-1 italic tracking-tight">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-6 pt-10 border-t border-slate-100">
                <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-xl border-4 border-white group-hover:rotate-6 transition-all duration-500">
                  <img src={review.image} alt={review.author} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-2xl font-black text-primary tracking-tighter italic">{review.author}</h4>
                  <p className="text-xs font-black text-secondary uppercase tracking-widest mt-1 opacity-70 group-hover:opacity-100 transition-opacity">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
