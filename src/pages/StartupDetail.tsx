import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { 
  ArrowLeft, 
  ExternalLink, 
  Rocket, 
  Target, 
  ShieldCheck, 
  Cpu, 
  ChevronRight,
  Globe,
  Building2
} from "lucide-react";
import { startups } from "../constants";

const StartupDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const startup = startups.find((s) => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!startup) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <h2 className="text-3xl font-black text-primary mb-6">Startup Not Found</h2>
        <Link to="/startups" className="bg-primary text-white px-8 py-3 rounded-xl font-bold">
          Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center overflow-hidden bg-primary">
        <div className="absolute inset-0">
          <img 
            src={startup.image} 
            alt={startup.name}
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-linear-to-b from-primary/80 via-primary/50 to-primary" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <Link 
              to="/startups" 
              className="inline-flex items-center gap-2 text-white/60 hover:text-secondary mb-12 transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="text-xs font-black uppercase tracking-widest">Back to Portfolio</span>
            </Link>

            <div className="flex items-center gap-4 mb-8">
               <div className="px-4 py-1.5 bg-secondary text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                 Incubated Success
               </div>
               <div className="px-4 py-1.5 bg-white/10 backdrop-blur-md text-white/80 text-[10px] font-black uppercase tracking-widest rounded-full border border-white/10">
                 {startup.tag}
               </div>
            </div>

            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-tight">
              {startup.name}
            </h1>
            <p className="text-xl md:text-3xl text-secondary font-bold italic leading-tight max-w-3xl">
              "{startup.tagline}"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 md:py-32 bg-slate-50 relative -mt-20 rounded-t-[4rem] z-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Main Content */}
            <div className="lg:col-span-8 space-y-24">
              
              {/* Metrics Grid */}
              {startup.stats && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {startup.stats.map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-white border border-slate-100 p-8 rounded-3xl text-center hover:shadow-xl transition-all"
                    >
                      <div className="text-secondary font-black text-2xl mb-2">{stat.value}</div>
                      <div className="text-[10px] font-black text-primary/40 uppercase tracking-widest">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* About */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-8">
                   <div className="w-12 h-[2px] bg-secondary" />
                   <h2 className="text-xs font-black uppercase tracking-[0.4em] text-primary">About the Venture</h2>
                </div>
                <p className="text-xl md:text-2xl text-text-muted leading-relaxed font-medium">
                  {startup.about}
                </p>
              </motion.div>

              {/* Philosophy */}
              {startup.philosophy && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-12 bg-linear-to-br from-slate-50 to-white border-l-4 border-secondary rounded-r-[3rem]"
                >
                   <h3 className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-6">Our Philosophy</h3>
                   <p className="text-lg md:text-xl text-text-muted font-medium italic">
                     "{startup.philosophy}"
                   </p>
                </motion.div>
              )}

              {/* Mission & Vision */}
              <div className="grid md:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-12 rounded-[3rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all group"
                >
                  <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-all">
                    <Rocket className="w-8 h-8 text-primary group-hover:text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-primary mb-6 uppercase tracking-tight">Vision</h3>
                  <p className="text-text-muted leading-relaxed font-medium italic">
                    {startup.vision}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-primary p-12 rounded-[3rem] shadow-2xl group"
                >
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-white transition-all">
                    <Target className="w-8 h-8 text-white group-hover:text-primary" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">Mission</h3>
                  <p className="text-white/70 leading-relaxed font-medium italic">
                    {startup.mission}
                  </p>
                </motion.div>
              </div>

              {/* Core Focus Areas */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-12">
                   <div className="w-12 h-[2px] bg-secondary" />
                   <h2 className="text-xs font-black uppercase tracking-[0.4em] text-primary">Core Focus Areas</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  {startup.core.map((item, i) => (
                    <div key={i} className="flex items-center gap-6 p-6 bg-white rounded-2xl border border-slate-100 group hover:border-secondary transition-all">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center group-hover:bg-secondary/10 transition-all">
                         <ChevronRight className="w-5 h-5 text-primary group-hover:text-secondary" />
                      </div>
                      <span className="text-primary font-bold uppercase tracking-widest text-[11px]">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar / Stats */}
            <div className="lg:col-span-4 space-y-12">
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm sticky top-32"
               >
                  <div className="flex items-center gap-4 mb-10">
                     <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-secondary" />
                     </div>
                     <h3 className="text-xl font-black text-primary uppercase tracking-tight">Company Info</h3>
                  </div>

                  <div className="space-y-8 mb-12">
                     <div className="flex flex-col gap-2">
                        <span className="text-[10px] font-black text-primary/30 uppercase tracking-[0.2em]">Industry</span>
                        <span className="text-primary font-bold">{startup.tag}</span>
                     </div>
                     <div className="flex flex-col gap-2">
                        <span className="text-[10px] font-black text-primary/30 uppercase tracking-[0.2em]">Incubation Status</span>
                        <span className="text-emerald-500 font-black">Active Success</span>
                     </div>
                  </div>

                  {startup.website && startup.website !== "#" ? (
                    <a 
                      href={startup.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-secondary text-white py-5 rounded-2xl font-black uppercase tracking-widest text-[11px] flex items-center justify-center gap-3 shadow-2xl shadow-secondary/30 hover:-translate-y-1 transition-all"
                    >
                      Visit Platform
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  ) : (
                    <div className="w-full bg-slate-100 text-primary/40 py-5 rounded-2xl font-black uppercase tracking-widest text-[11px] flex items-center justify-center gap-3 cursor-not-allowed">
                       Platform Coming Soon
                    </div>
                  )}

                  <div className="mt-10 pt-10 border-t border-slate-50">
                     <button 
                       onClick={() => navigate('/contact')}
                       className="w-full text-primary hover:text-secondary text-[10px] font-black uppercase tracking-[0.3em] transition-colors"
                     >
                       Enquire about this Venture
                     </button>
                  </div>
               </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Next Projects */}
      <section className="py-24 bg-white border-t border-slate-50">
        <div className="container-custom">
           <div className="flex flex-col md:flex-row justify-between items-center gap-10">
              <h2 className="text-2xl font-black text-primary uppercase tracking-tight">Explore Other Ventures</h2>
              <Link to="/startups" className="text-secondary font-black uppercase tracking-widest text-xs flex items-center gap-2 group">
                View Full Portfolio
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
           </div>
        </div>
      </section>
    </div>
  );
};

export default StartupDetail;
