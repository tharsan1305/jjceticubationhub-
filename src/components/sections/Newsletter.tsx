import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle2, Mail } from "lucide-react";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email");
      return;
    }

    setStatus("loading");
    
    // Simulate API call
    setTimeout(() => {
      const subscribers = JSON.parse(localStorage.getItem("subscribers") || "[]");
      if (subscribers.includes(email)) {
        setStatus("error");
        setMessage("You are already subscribed!");
      } else {
        subscribers.push(email);
        localStorage.setItem("subscribers", JSON.stringify(subscribers));
        setStatus("success");
        setEmail("");
      }
    }, 1000);
  };

  return (
    <section className="py-24 bg-[#0a1628] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-12 md:p-20">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 text-center md:text-left">
               <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 mx-auto md:mx-0">
                  <Mail className="w-8 h-8 text-white" />
               </div>
               <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
                 Stay in the Loop
               </h2>
               <p className="text-white/50 font-bold uppercase tracking-widest text-[10px] leading-relaxed">
                 Get updates on new startups, events and <br className="hidden md:block" /> opportunities directly in your inbox.
               </p>
            </div>

            <div className="w-full md:w-[400px]">
               <form onSubmit={handleSubmit} className="relative">
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === 'error') setStatus('idle');
                    }}
                    placeholder="Enter your email address"
                    className="w-full bg-white dark:bg-white px-8 py-6 rounded-[2rem] font-bold text-primary outline-none focus:ring-4 focus:ring-secondary/20 transition-all text-sm placeholder:text-slate-400"
                  />
                  <button 
                    disabled={status === 'loading' || status === 'success'}
                    type="submit"
                    className="absolute right-3 top-3 bottom-3 px-10 bg-[#C8581A] text-white rounded-[1.5rem] font-black text-[10px] uppercase tracking-widest hover:scale-105 active:scale-95 disabled:opacity-50 transition-all flex items-center gap-3 shadow-xl shadow-secondary/20"
                  >
                    {status === 'loading' ? 'Sending...' : 'Subscribe'}
                    <Send className="w-4 h-4" />
                  </button>
               </form>

               <AnimatePresence>
                 {status === 'success' && (
                   <motion.div
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     className="mt-6 flex items-center gap-3 text-emerald-400 font-black text-[10px] uppercase tracking-widest"
                   >
                     <CheckCircle2 className="w-4 h-4" />
                     You are subscribed! 🎉
                   </motion.div>
                 )}
                 {status === 'error' && (
                   <motion.div
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     className="mt-6 flex items-center gap-3 text-red-400 font-black text-[10px] uppercase tracking-widest"
                   >
                     {message}
                   </motion.div>
                 )}
               </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
