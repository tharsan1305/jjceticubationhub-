import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  ArrowUpRight, 
  X, 
  Filter, 
  Trophy, 
  Star, 
  Award, 
  Search,
  MessageCircle,
  Instagram,
  Linkedin,
  Rocket,
  Bell,
  CheckCircle2
} from "lucide-react";
import { events as rawEvents } from "../../constants";
import { PremiumButton, SectionHeader } from "../common/UIComponents";

// --- Types ---
interface EventType {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  img: string;
  icon: any;
  status: string;
  seats: string | number;
  description: string;
  host: string;
  agenda: string[];
}

// --- Components ---

const NotifyModal = ({ isOpen, onClose, eventTitle }: { isOpen: boolean, onClose: () => void, eventTitle: string }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    year: "1st Year"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const responses = JSON.parse(localStorage.getItem('event_notifications') || '[]');
    responses.push({ ...formData, event: eventTitle, timestamp: new Date().toISOString() });
    localStorage.setItem('event_notifications', JSON.stringify(responses));
    setStep(2);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-primary/60 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            className="relative w-full max-w-lg bg-white rounded-[3rem] shadow-2xl overflow-hidden p-10 md:p-14"
          >
            <button onClick={onClose} className="absolute top-8 right-8 text-primary/30 hover:text-primary transition-colors">
              <X className="w-6 h-6" />
            </button>

            {step === 1 ? (
              <form onSubmit={handleSubmit}>
                <div className="mb-10 text-center">
                   <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Bell className="w-8 h-8 text-secondary animate-swing" />
                   </div>
                   <h3 className="text-3xl font-black text-primary mb-2 uppercase tracking-tighter">Get Notified</h3>
                   <p className="text-sm font-bold text-text-muted uppercase tracking-widest leading-none">
                      We'll alert you when registration opens
                   </p>
                </div>

                <div className="space-y-4 mb-10">
                   <input 
                     required
                     type="text" 
                     placeholder="Your Name" 
                     className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-secondary transition-all font-bold text-primary"
                     onChange={(e) => setFormData({...formData, name: e.target.value})}
                   />
                   <input 
                     required
                     type="email" 
                     placeholder="Email Address" 
                     className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-secondary transition-all font-bold text-primary"
                     onChange={(e) => setFormData({...formData, email: e.target.value})}
                   />
                   <div className="grid grid-cols-2 gap-4">
                      <input 
                        type="text" 
                        placeholder="Phone (Optional)" 
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-secondary transition-all font-bold text-primary"
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                      <input 
                        required
                        type="text" 
                        placeholder="Department" 
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-secondary transition-all font-bold text-primary"
                        onChange={(e) => setFormData({...formData, department: e.target.value})}
                      />
                   </div>
                   <select 
                     className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-secondary transition-all font-bold text-primary appearance-none"
                     onChange={(e) => setFormData({...formData, year: e.target.value})}
                   >
                     <option>1st Year</option>
                     <option>2nd Year</option>
                     <option>3rd Year</option>
                     <option>4th Year</option>
                   </select>
                </div>

                <button type="submit" className="w-full py-5 bg-[#1a2a4a] text-white rounded-2xl font-black uppercase tracking-[0.2em] shadow-xl hover:scale-105 active:scale-95 transition-all">
                   Notify Me
                </button>
              </form>
            ) : (
              <div className="text-center py-10">
                 <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                 </div>
                 <h3 className="text-3xl font-black text-primary mb-4 uppercase tracking-tighter">You're on the list!</h3>
                 <p className="text-lg font-bold text-text-muted leading-relaxed">
                   We will notify you as soon as the <br />
                   <span className="text-[#C8581A]">{eventTitle}</span> <br />
                   registration opens 🚀
                 </p>
                 <button 
                  onClick={onClose}
                  className="mt-12 px-12 py-4 bg-slate-100 text-primary rounded-xl font-black uppercase tracking-widest hover:bg-slate-200 transition-all"
                 >
                  Back to Events
                 </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const EventCard = ({ event, onNotify }: { event: EventType, onNotify: () => void }) => {
  const whatsappUrl = `https://wa.me/919442882091?text=Hi, I want to get updates about ${event.title} at JJCET Incubation Hub`;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      className="premium-card group bg-white border border-slate-100 flex flex-col h-full"
    >
      <div className="h-64 overflow-hidden relative">
        <img src={event.img} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
        <div className="absolute top-6 right-6">
           <div className="bg-[#C8581A] text-white text-[9px] font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-xl">
             COMING SOON
           </div>
        </div>
        <div className="absolute bottom-6 left-6">
          <span className="bg-white/90 backdrop-blur-md text-[#1a2a4a] text-[10px] font-black px-5 py-2 rounded-lg uppercase tracking-widest shadow-xl">
            {event.category}
          </span>
        </div>
      </div>
      
      <div className="p-10 flex-1 flex flex-col">
        <div className="flex-1">
          <div className="flex justify-between items-start mb-6">
             <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-[#1a2a4a] group-hover:bg-[#1a2a4a] group-hover:text-white transition-all">
                <event.icon className="w-6 h-6" />
             </div>
          </div>
          <h3 className="text-2xl font-black text-primary mb-2 leading-tight group-hover:text-secondary transition-colors uppercase tracking-tight">
            {event.title}
          </h3>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">
            REGISTRATION OPENING SOON
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-4 text-primary/40 font-black text-[10px] uppercase tracking-widest">
              <Calendar className="w-4 h-4 text-secondary" />
              Coming Soon
            </div>
            <div className="flex items-center gap-4 text-primary/40 font-black text-[10px] uppercase tracking-widest">
              <MapPin className="w-4 h-4 text-secondary" />
              {event.location}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-50 space-y-4">
            <PremiumButton 
              variant="secondary" 
              className="w-full py-4 text-xs font-black shadow-none border-[#C8581A]"
              onClick={onNotify}
            >
              NOTIFY ME
            </PremiumButton>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg"
            >
               <MessageCircle className="w-4 h-4" />
               Get Updates on WhatsApp
            </a>
        </div>
      </div>
    </motion.div>
  );
};

export const FeaturedEventBanner = ({ onNotify }: { onNotify: () => void }) => {
  const [showToast, setShowToast] = useState(false);

  const handleNotify = () => {
    onNotify();
  };

  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-16">
       {/* Background Elements */}
       <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-secondary/5 to-transparent -z-10" />
       
       <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative bg-[#1a2a4a] rounded-[4rem] p-12 md:p-24 overflow-hidden shadow-[0_50px_100px_-20px_rgba(15,23,42,0.4)]"
          >
            <div className="absolute top-0 right-0 w-full md:w-1/2 h-full">
               <img src="https://picsum.photos/seed/eventhero/1200/800" alt="Events 2026" className="w-full h-full object-cover opacity-30 mix-blend-overlay" />
               <div className="absolute inset-0 bg-linear-to-r from-[#1a2a4a] via-[#1a2a4a]/80 to-transparent" />
            </div>

            <div className="relative z-10 max-w-2xl text-left">
              <div className="flex items-center gap-6 mb-12">
                 <span className="bg-white/10 backdrop-blur-md text-white border border-white/20 text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-[0.4em]">
                   Events 2026
                 </span>
              </div>
              
              <h1 className="text-5xl md:text-[6rem] font-black text-white mb-8 tracking-tighter leading-[0.85] uppercase">
                JJCET <br />
                <span className="text-[#C8581A]">Incubation</span> <br />
                Hub
              </h1>
              
              <p className="text-white/50 text-xl font-bold mb-12 leading-relaxed uppercase tracking-tight max-w-xl">
                Exciting events are being planned. Stay tuned for hackathons, workshops, and pitch nights coming your way.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-12 pt-12 border-t border-white/10">
                 <motion.button 
                   onClick={handleNotify}
                   animate={{ scale: [1, 1.05, 1] }}
                   transition={{ duration: 2, repeat: Infinity }}
                   className="px-16 py-6 bg-[#C8581A] text-white rounded-[2rem] font-black text-xl uppercase tracking-[0.2em] shadow-[0_20px_40px_rgba(200,88,26,0.3)] hover:scale-110 active:scale-95 transition-all"
                 >
                   Notify Me
                 </motion.button>
              </div>
            </div>
          </motion.div>
       </div>
    </section>
  );
};

export const PastEvents = () => (
  <section className="py-32 bg-slate-50 relative overflow-hidden">
     <div className="container-custom">
        <div className="text-center mb-16">
           <h2 className="text-4xl font-black text-primary uppercase tracking-tighter mb-4">Past Events</h2>
           <p className="text-[#C8581A] text-xs font-black uppercase tracking-[0.3em]">Our journey is just beginning</p>
        </div>

        <div className="bg-white rounded-[3rem] p-24 border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
           <div className="w-24 h-24 bg-slate-50 rounded-[2rem] flex items-center justify-center mb-8">
              <Calendar className="w-12 h-12 text-slate-200" />
           </div>
           <h3 className="text-2xl font-black text-primary/30 uppercase tracking-[0.2em] mb-4">No past events yet</h3>
           <p className="text-slate-400 font-bold max-w-xs leading-relaxed">
             Our first official event of 2026 is currently in the works. Be part of history when we launch!
           </p>
        </div>
     </div>
  </section>
);

export const EventPlatform = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [notifyingEvent, setNotifyingEvent] = useState<string | null>(null);
  
  const categories = ["All", "Workshop", "Hackathon", "Pitching", "Bootcamp"];

  const filteredEvents = useMemo(() => {
    if (!rawEvents) return [];
    return activeFilter === "All" 
      ? rawEvents 
      : rawEvents.filter(e => e.category === activeFilter);
  }, [activeFilter, rawEvents]);

  return (
    <section className="bg-white min-h-screen">
      <FeaturedEventBanner onNotify={() => setNotifyingEvent("JJCET Events 2026")} />

      <div className="container-custom py-24">
        {/* Filter Toolbar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-24 gap-12">
           <div className="flex items-center gap-6 bg-slate-50 p-3 rounded-full border border-slate-100 overflow-x-auto max-w-full no-scrollbar">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className="flex flex-col items-center"
                >
                  <div className={`px-10 py-4 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                    activeFilter.toLowerCase() === cat.toLowerCase() 
                      ? "bg-[#1a2a4a] text-white shadow-xl" 
                      : "text-primary/40 hover:text-primary hover:bg-white"
                  }`}>
                    {cat}
                  </div>
                  <span className="text-[7px] font-black text-slate-300 uppercase tracking-widest mt-2">(Coming Soon)</span>
                </button>
              ))}
           </div>
           
           <div className="relative group w-full md:w-auto">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/30 group-hover:text-primary transition-colors" />
              <input 
                type="text" 
                placeholder="Search events..." 
                className="pl-16 pr-8 py-5 bg-slate-50 rounded-3xl border border-slate-100 outline-none focus:bg-white focus:border-secondary transition-all font-bold text-primary w-full md:w-96 shadow-sm"
              />
           </div>
        </div>

        {/* Dynamic Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {filteredEvents.map(event => (
            <EventCard 
              key={event.id} 
              event={event} 
              onNotify={() => setNotifyingEvent(event.title)} 
            />
          ))}
        </motion.div>
      </div>

      <PastEvents />

      {/* Social Follow Section */}
      <section className="py-32 bg-[#1a2a4a] text-white relative overflow-hidden">
         <div className="container-custom text-center">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">Stay Connected</h2>
            <p className="text-white/50 font-bold uppercase tracking-[0.3em] mb-16">Follow us for latest event announcements</p>
            
            <div className="flex flex-wrap items-center justify-center gap-8">
               <a 
                href="https://instagram.com/jjcet_incubation_hub" 
                target="_blank" 
                className="flex items-center gap-6 px-10 py-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:-translate-y-2 transition-all group"
               >
                  <Instagram className="w-8 h-8 text-[#C8581A]" />
                  <span className="text-lg font-black uppercase tracking-widest">Instagram</span>
               </a>
               <a 
                href="https://linkedin.com/company/jjcet-incubation-hub" 
                target="_blank" 
                className="flex items-center gap-6 px-10 py-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:-translate-y-2 transition-all group"
               >
                  <Linkedin className="w-8 h-8 text-[#C8581A]" />
                  <span className="text-lg font-black uppercase tracking-widest">LinkedIn</span>
               </a>
               <a 
                href="https://wa.me/919442882091" 
                target="_blank" 
                className="flex items-center gap-6 px-10 py-5 bg-[#25D366]/20 border border-[#25D366]/30 rounded-2xl hover:bg-[#25D366] hover:-translate-y-2 transition-all group"
               >
                  <MessageCircle className="w-8 h-8 text-[#25D366] group-hover:text-white" />
                  <span className="text-lg font-black uppercase tracking-widest">WhatsApp</span>
               </a>
            </div>
         </div>
      </section>

      <NotifyModal 
        isOpen={!!notifyingEvent} 
        onClose={() => setNotifyingEvent(null)} 
        eventTitle={notifyingEvent || ""} 
      />
    </section>
  );
};
