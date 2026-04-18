import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import emailjs from "@emailjs/browser";
import { events, faqs, awards, contactInfo, emailConfig } from "../../constants";
import { SectionHeader, PremiumButton } from "../common/UIComponents";
import { 
  Calendar, 
  ChevronRight, 
  Trophy, 
  MapPin, 
  Mail, 
  Phone, 
  ArrowUpRight,
  Download,
  Search
} from "lucide-react";

export const UpcomingEvents = () => {
  return (
    <section id="events" className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <SectionHeader title="Events" subtitle="Mark Your Calendar" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {events.map((e, i) => (
            <motion.div
              key={e.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="premium-card group overflow-hidden flex flex-col h-[520px] bg-white border border-slate-100"
            >
              <div className="h-56 overflow-hidden relative">
                <img src={e.img} alt={e.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-6 right-6">
                  <div className="w-12 h-12 bg-white/95 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-2xl">
                    <e.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6">
                  <span className="bg-secondary text-white text-[10px] font-bold px-5 py-2 rounded-full uppercase tracking-widest shadow-xl">
                    {e.category}
                  </span>
                </div>
              </div>
              <div className="p-10 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4 leading-tight group-hover:text-secondary transition-colors line-clamp-2">{e.title}</h3>
                  <div className="flex items-center gap-4 text-secondary font-bold text-[11px] uppercase tracking-widest">
                    <Calendar className="w-5 h-5" />
                    {new Date(e.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </div>
                </div>
                <PremiumButton variant="outline" className="w-full mt-8" href="/events">
                  View Details
                </PremiumButton>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-24">
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <SectionHeader 
                title="FAQs" 
                subtitle="Information Center" 
                className="!text-left !mb-12"
              />
              <p className="text-xl text-text-muted font-medium mb-12 leading-relaxed">
                Everything you need to know about joining the JJCET incubation ecosystem. Can't find an answer? Connect with our support team.
              </p>
              <PremiumButton variant="outline" href="/contact">
                Support Desk
              </PremiumButton>
            </div>
          </div>
          
          <div className="lg:w-2/3 space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`rounded-[2rem] border transition-all duration-500 overflow-hidden ${
                  openIndex === i ? 'border-primary bg-slate-50' : 'border-slate-100 bg-white hover:border-slate-200'
                }`}
              >
                <button 
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full p-8 text-left flex items-start justify-between outline-none group"
                >
                  <span className={`font-bold text-xl transition-colors ${
                    openIndex === i ? 'text-primary' : 'text-primary/70 group-hover:text-primary'
                  }`}>
                    {faq.q}
                  </span>
                  <div className={`p-3 rounded-xl transition-all duration-500 shrink-0 ml-6 ${
                    openIndex === i ? 'bg-primary text-white rotate-90' : 'bg-slate-50 text-primary/30 group-hover:bg-slate-100'
                  }`}>
                     <ChevronRight className="w-5 h-5" />
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-10 text-lg text-text-muted font-medium leading-relaxed border-t border-slate-100/50 pt-6">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const ContactSection = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null, msg: string }>({ type: null, msg: '' });
  const [formData, setFormData] = useState({ name: '', email: '', pitch: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, msg: '' });

    try {
      // Configuration check (optional)
      if (emailConfig.publicKey === "YOUR_PUBLIC_KEY") {
        throw new Error("EmailJS keys not configured");
      }

      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.pitch,
          to_email: contactInfo.email,
        },
        emailConfig.publicKey
      );

      setStatus({ type: 'success', msg: 'Your proposal has been sent successfully!' });
      setFormData({ name: '', email: '', pitch: '' });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus({ type: 'error', msg: 'Failed to send proposal. Please try again or check keys.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-slate-50 relative overflow-hidden">
       {/* Background Decorative */}
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-primary/5 to-transparent" />
      
      <div className="container-custom">
        <div className="glass-card grid lg:grid-cols-2 gap-24 p-16 md:p-24 relative overflow-hidden">
          <div className="noise-overlay absolute inset-0 opacity-[0.02]" />
          
          <div className="relative z-10">
            <p className="text-secondary font-bold uppercase tracking-widest text-xs mb-10">Connect With Us</p>
            <h2 className="text-5xl font-bold text-primary mb-16 leading-tight">Transform Your <br /><span className="text-secondary">Vision Today</span></h2>
            
            <div className="space-y-12">
               {[
                 { icon: MapPin, text: contactInfo.address, sub: "Incubation Headquarters", href: null },
                 { icon: Mail, text: contactInfo.email, sub: "Proposal Submissions", href: `mailto:${contactInfo.email}` },
                 { icon: Phone, text: contactInfo.phone, sub: "Strategic Inquiries", href: `tel:${contactInfo.phone.replace(/\s/g, '')}` },
               ].map((item, idx) => (
                 <motion.div 
                   key={idx} 
                   whileHover={{ x: 10 }}
                   className="group"
                 >
                    {item.href ? (
                      <a href={item.href} className="flex items-center gap-8">
                        <div className="w-16 h-16 bg-white rounded-[1.5rem] flex items-center justify-center shadow-xl group-hover:bg-primary transition-all duration-500 border border-slate-50">
                           <item.icon className="text-secondary w-7 h-7 group-hover:text-white transition-colors" />
                        </div>
                        <div>
                           <p className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">{item.text}</p>
                           <p className="text-[10px] font-bold text-primary/30 uppercase tracking-widest mt-1">{item.sub}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-8">
                        <div className="w-16 h-16 bg-white rounded-[1.5rem] flex items-center justify-center shadow-xl group-hover:bg-primary transition-all duration-500 border border-slate-50">
                           <item.icon className="text-secondary w-7 h-7 group-hover:text-white transition-colors" />
                        </div>
                        <div>
                           <p className="text-xl font-bold text-primary">{item.text}</p>
                           <p className="text-[10px] font-bold text-primary/30 uppercase tracking-widest mt-1">{item.sub}</p>
                        </div>
                      </div>
                    )}
                 </motion.div>
               ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                 <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 ml-4">Full Name</label>
                 <input 
                   required
                   type="text" 
                   value={formData.name}
                   onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                   placeholder="John Doe" 
                   className="w-full px-8 py-5 bg-white rounded-2xl outline-none border border-slate-100 focus:border-secondary transition-all font-bold text-primary shadow-sm" 
                 />
              </div>
              <div className="space-y-3">
                 <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 ml-4">Email Address</label>
                 <input 
                   required
                   type="email" 
                   value={formData.email}
                   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                   placeholder="john@startup.com" 
                   className="w-full px-8 py-5 bg-white rounded-2xl outline-none border border-slate-100 focus:border-secondary transition-all font-bold text-primary shadow-sm" 
                 />
              </div>
            </div>
            <div className="space-y-3">
               <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 ml-4">Pitch Summary</label>
               <textarea 
                 required
                 value={formData.pitch}
                 onChange={(e) => setFormData({ ...formData, pitch: e.target.value })}
                 placeholder="Briefly describe your innovative idea..." 
                 rows={5} 
                 className="w-full px-8 py-6 bg-white rounded-2xl outline-none border border-slate-100 focus:border-secondary transition-all font-bold text-primary shadow-sm resize-none" 
               />
            </div>

            <AnimatePresence>
              {status.type && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`p-6 rounded-2xl text-sm font-bold ${
                    status.type === 'success' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'
                  }`}
                >
                  {status.msg}
                </motion.div>
              )}
            </AnimatePresence>

            <PremiumButton 
              type="submit"
              disabled={loading}
              variant="primary" 
              className="w-full py-8 text-xl shadow-2xl shadow-primary/20 disabled:opacity-50"
            >
               {loading ? "Sending..." : "Submit Proposal"} <ArrowUpRight className="ml-3 w-7 h-7" />
            </PremiumButton>
          </form>
        </div>
      </div>
    </section>
  );
};

export const Newsletter = () => {
  return (
    <section className="section-padding pt-0">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-primary rounded-[4rem] p-16 md:p-32 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-[40%] h-full bg-linear-to-l from-secondary/10 to-transparent skew-x-[-20deg] translate-x-1/2" />
          <div className="noise-overlay absolute inset-0 opacity-[0.05]" />
          
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter italic">Stay <span className="text-secondary">Informed</span></h2>
            <p className="text-white/50 text-xl mb-16 max-w-2xl mx-auto font-medium leading-relaxed">
              Join our exclusive startup newsletter to receive workshops updates, funding alerts, and incubation news.
            </p>
            <form className="flex flex-col sm:flex-row gap-6 max-w-2xl mx-auto relative group">
              <input type="email" placeholder="name@innovative.com" className="flex-1 px-10 py-6 bg-white/5 rounded-2xl outline-none border border-white/10 focus:border-secondary focus:bg-white/10 transition-all text-white font-bold text-lg" />
              <PremiumButton variant="secondary" className="px-12 py-6 text-lg">
                Subscribe <ChevronRight className="ml-2 w-6 h-6" />
              </PremiumButton>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const AwardsRecognition = () => {
  return (
    <section className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <SectionHeader title="Achievements" subtitle="Awards & Recognition" />

        <div className="grid md:grid-cols-3 gap-12">
          {awards.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              className="premium-card bg-white p-12 text-center group"
            >
              <div className="w-24 h-24 bg-slate-50 rounded-3xl flex items-center justify-center mx-auto mb-10 group-hover:bg-primary transition-all duration-500 shadow-xl group-hover:rotate-6">
                 <a.icon className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-6 uppercase leading-tight">
                {a.title}
              </h3>
              <p className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-4">
                {a.context || a.desc}
              </p>
              <div className="w-16 h-1 bg-slate-100 mx-auto rounded-full group-hover:w-32 transition-all duration-500 group-hover:bg-secondary" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
