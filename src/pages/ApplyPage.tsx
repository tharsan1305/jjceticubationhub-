import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, Rocket, Sparkles, CheckCircle2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export const ApplyPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    department: "CSE",
    year: "1st Year",
    startupName: "",
    category: "Future Tech",
    problem: "",
    solution: "",
    market: "",
    teamSize: 1,
    hasPrototype: "No",
    hasFunding: "No",
    source: "Social Media"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const storage = JSON.parse(localStorage.getItem("hub_applications") || "[]");
    storage.push({ ...formData, timestamp: new Date().toISOString() });
    localStorage.setItem("hub_applications", JSON.stringify(storage));
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center p-6 pt-32">
         <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           className="max-w-xl w-full bg-white dark:bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center shadow-2xl border border-slate-100 dark:border-slate-800"
         >
            <div className="w-24 h-24 bg-emerald-100 dark:bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-10">
               <CheckCircle2 className="w-12 h-12 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h2 className="text-4xl font-black text-primary dark:text-white uppercase tracking-tighter mb-6">Application Submitted! 🎉</h2>
            <p className="text-lg font-bold text-text-muted dark:text-white/40 leading-relaxed mb-12">
              Our team will review your application and contact you within <span className="text-[#C8581A]">7 working days</span>. Get ready to build the future!
            </p>
            <Link to="/" className="inline-flex items-center gap-4 px-12 py-5 bg-[#1a2a4a] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all">
               <ArrowLeft className="w-4 h-4" />
               Back to Home
            </Link>
         </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 pt-32 pb-32 transition-colors duration-300">
       <div className="container-custom">
          {/* Hero */}
          <div className="text-center max-w-3xl mx-auto mb-20">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
             >
                <div className="inline-flex items-center gap-3 bg-secondary/10 px-6 py-2 rounded-full mb-8">
                   <Sparkles className="w-4 h-4 text-secondary" />
                   <span className="text-[10px] font-black text-secondary uppercase tracking-[0.4em]">Batch 2026 Admissions</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-primary dark:text-white uppercase tracking-tighter leading-none mb-6">
                  Apply to JJCET <br className="hidden md:block" /> <span className="text-secondary italic">Incubation Hub</span>
                </h1>
                <p className="text-lg font-bold text-text-muted dark:text-white/40 uppercase tracking-tight">Turn your idea into a funded startup</p>
             </motion.div>
          </div>

          <div className="max-w-4xl mx-auto">
             <form onSubmit={handleSubmit} className="bg-slate-50 dark:bg-slate-900 rounded-[3rem] p-10 md:p-20 shadow-sm border border-slate-100 dark:border-slate-800">
                <div className="grid md:grid-cols-2 gap-10 mb-12">
                   {/* Personal Info */}
                   <div className="space-y-8">
                      <h3 className="text-sm font-black uppercase tracking-[0.3em] text-[#C8581A] pb-4 border-b border-slate-200 dark:border-slate-800">Founder Details</h3>
                      
                      <div className="space-y-6">
                         <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-primary dark:text-white/60">Full Name *</label>
                            <input required type="text" className="apply-input" placeholder="Enter your full name" onChange={e => setFormData({...formData, fullName: e.target.value})} />
                         </div>
                         <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-primary dark:text-white/60">Email Address *</label>
                            <input required type="email" className="apply-input" placeholder="email@address.com" onChange={e => setFormData({...formData, email: e.target.value})} />
                         </div>
                         <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                               <label className="text-[10px] font-black uppercase tracking-widest text-primary dark:text-white/60">Phone Number *</label>
                               <input required type="tel" className="apply-input" placeholder="+91 00000 00000" onChange={e => setFormData({...formData, phone: e.target.value})} />
                            </div>
                            <div className="space-y-2">
                               <label className="text-[10px] font-black uppercase tracking-widest text-primary dark:text-white/60">Department *</label>
                               <select className="apply-input appearance-none" onChange={e => setFormData({...formData, department: e.target.value})}>
                                  {["CSE", "AI & DS", "ECE", "Mechanical", "Civil", "MBA", "Other"].map(d => <option key={d}>{d}</option>)}
                               </select>
                            </div>
                         </div>
                         <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-primary dark:text-white/60">Year of Study *</label>
                            <select className="apply-input appearance-none" onChange={e => setFormData({...formData, year: e.target.value})}>
                               {["1st Year", "2nd Year", "3rd Year", "4th Year"].map(y => <option key={y}>{y}</option>)}
                            </select>
                         </div>
                      </div>
                   </div>

                   {/* Startup Info */}
                   <div className="space-y-8">
                      <h3 className="text-sm font-black uppercase tracking-[0.3em] text-[#C8581A] pb-4 border-b border-slate-200 dark:border-slate-800">Startup Details</h3>
                      <div className="space-y-6">
                         <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-primary dark:text-white/60">Startup Name *</label>
                            <input required type="text" className="apply-input" placeholder="Name your innovation" onChange={e => setFormData({...formData, startupName: e.target.value})} />
                         </div>
                         <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-primary dark:text-white/60">Category *</label>
                            <select className="apply-input appearance-none" onChange={e => setFormData({...formData, category: e.target.value})}>
                               {["Future Tech", "Digital Services", "SaaS & AI", "Creative Media", "Defense Tech", "Social Tech", "Other"].map(c => <option key={c}>{c}</option>)}
                            </select>
                         </div>
                         <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-primary dark:text-white/60">Problem Statement *</label>
                            <textarea required className="apply-input min-h-[100px] py-4" placeholder="What problem does your startup solve?" onChange={e => setFormData({...formData, problem: e.target.value})} />
                         </div>
                      </div>
                   </div>
                </div>

                <div className="space-y-10">
                   <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-primary dark:text-white/60">The Solution *</label>
                      <textarea required className="apply-input min-h-[120px] py-4" placeholder="How does your startup solve this?" onChange={e => setFormData({...formData, solution: e.target.value})} />
                   </div>
                   
                   <div className="grid md:grid-cols-2 gap-10">
                      <div className="space-y-2">
                         <label className="text-[10px] font-black uppercase tracking-widest text-primary dark:text-white/60">Target Market *</label>
                         <input required type="text" className="apply-input" placeholder="Who are your target customers?" onChange={e => setFormData({...formData, market: e.target.value})} />
                      </div>
                      <div className="space-y-2">
                         <label className="text-[10px] font-black uppercase tracking-widest text-primary dark:text-white/60">Team Size</label>
                         <input type="number" min="1" className="apply-input" placeholder="1" onChange={e => setFormData({...formData, teamSize: parseInt(e.target.value)})} />
                      </div>
                   </div>

                   <div className="grid md:grid-cols-3 gap-10">
                      <div className="space-y-4">
                         <label className="text-[10px] font-black uppercase tracking-widest text-primary dark:text-white/60">Do you have a prototype?</label>
                         <div className="flex gap-6">
                            {["Yes", "No"].map(opt => (
                              <label key={opt} className="flex items-center gap-2 cursor-pointer group">
                                 <input type="radio" value={opt} checked={formData.hasPrototype === opt} name="proto" className="hidden" onChange={e => setFormData({...formData, hasPrototype: e.target.value})} />
                                 <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${formData.hasPrototype === opt ? "border-[#C8581A]" : "border-slate-300 group-hover:border-slate-400"}`}>
                                    {formData.hasPrototype === opt && <div className="w-2.5 h-2.5 bg-[#C8581A] rounded-full" />}
                                 </div>
                                 <span className="text-xs font-bold text-primary dark:text-white uppercase">{opt}</span>
                              </label>
                            ))}
                         </div>
                      </div>
                      <div className="space-y-4">
                         <label className="text-[10px] font-black uppercase tracking-widest text-primary dark:text-white/60">Any previous funding?</label>
                         <div className="flex gap-6">
                            {["Yes", "No"].map(opt => (
                              <label key={opt} className="flex items-center gap-2 cursor-pointer group">
                                 <input type="radio" value={opt} checked={formData.hasFunding === opt} name="fund" className="hidden" onChange={e => setFormData({...formData, hasFunding: e.target.value})} />
                                 <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${formData.hasFunding === opt ? "border-[#C8581A]" : "border-slate-300 group-hover:border-slate-400"}`}>
                                    {formData.hasFunding === opt && <div className="w-2.5 h-2.5 bg-[#C8581A] rounded-full" />}
                                 </div>
                                 <span className="text-xs font-bold text-primary dark:text-white uppercase">{opt}</span>
                              </label>
                            ))}
                         </div>
                      </div>
                      <div className="space-y-2">
                         <label className="text-[10px] font-black uppercase tracking-widest text-primary dark:text-white/60">How did you hear about us?</label>
                         <select className="apply-input appearance-none" onChange={e => setFormData({...formData, source: e.target.value})}>
                            {["Social Media", "Friend", "Faculty", "College Notice", "Other"].map(s => <option key={s}>{s}</option>)}
                         </select>
                      </div>
                   </div>
                </div>

                <div className="mt-20">
                   <button type="submit" className="w-full py-6 bg-[#1a2a4a] text-white rounded-3xl font-black uppercase tracking-[0.2em] shadow-2xl hover:bg-[#C8581A] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-4">
                      Submit Application
                      <Send className="w-5 h-5" />
                   </button>
                   <p className="text-center mt-6 text-[9px] font-bold text-slate-400 uppercase tracking-widest">By submitting, you agree to our Startup Incubation Policy</p>
                </div>
             </form>
          </div>
       </div>

       {/* Specific styles for this page */}
       <style dangerouslySetInnerHTML={{ __html: `
          .apply-input {
             width: 100%;
             background: white;
             padding: 1.25rem 1.75rem;
             border-radius: 1.25rem;
             border: 1px solid #e2e8f0;
             font-weight: 700;
             font-size: 0.875rem;
             color: #1a2a4a;
             outline: none;
             transition: all 0.3s ease;
          }
          .dark .apply-input {
             background: #0a1628;
             border-color: #1a2a4a;
             color: white;
          }
          .apply-input:focus {
             border-color: #C8581A;
             box-shadow: 0 0 0 4px rgba(200, 88, 26, 0.1);
          }
          .apply-input::placeholder {
             color: #94a3b8;
             font-weight: 600;
             font-size: 0.75rem;
             text-transform: uppercase;
             letter-spacing: 0.1em;
          }
       `}} />
    </div>
  );
};
