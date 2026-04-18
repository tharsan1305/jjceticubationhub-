import { useEffect, useRef, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { ArrowUpRight, Award, Rocket, Briefcase, Globe, ExternalLink, Info } from "lucide-react";
import { startups } from "../constants";

export default function StartupPortfolio() {
  const { pathname } = useLocation();
  const headerRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("ALL");
  
  const categories = ["ALL", "FUTURE TECH", "DIGITAL SERVICES", "SAAS & AI", "SOCIAL TECH", "CREATIVE MEDIA"];

  const filteredStartups = activeFilter === "ALL" 
    ? startups 
    : startups.filter(s => s.tag.toUpperCase() === activeFilter);

  const { scrollYProgress: headerScroll } = useScroll({
    target: headerRef,
    offset: ["start start", "end start"]
  });

  const headerBgY = useTransform(headerScroll, [0, 1], ["0%", "8%"]);
  const headerOpacity = useTransform(headerScroll, [0, 1], [1, 0.7]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section with Parallax Background */}
      <section ref={headerRef} className="relative min-h-[45vh] flex items-center pt-32 pb-16 overflow-hidden bg-primary">
        {/* Parallax Background Layer */}
        <motion.div 
          style={{ y: headerBgY, opacity: headerOpacity, willChange: "transform, opacity" }}
          className="absolute inset-0 z-0 scale-110"
        >
          <img 
            src="https://rukamcapital.com/wp-content/uploads/2026/01/Blog-banner-11.jpg" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
            alt="Parallax Header Background"
          />
          <div className="absolute inset-0 bg-linear-to-b from-primary/80 to-primary" />
        </motion.div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-block px-4 py-1.5 bg-secondary/20 text-secondary text-[10px] font-black uppercase tracking-[0.3em] rounded-full mb-6"
            >
              Excellence Incubated
            </motion.div>
            <h1 className="text-6xl md:text-[5rem] font-black text-white mb-6 leading-none tracking-tighter">
              Our Startup <span className="text-secondary italic">Portfolio</span>
            </h1>
            <p className="text-[1.1rem] text-white/50 font-medium leading-relaxed max-w-2xl">
              From dormant concepts to disruptive market players. Explore the high-impact student ventures nurtured within our premier ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar & Grid Section */}
      <section className="py-20 md:py-24 bg-slate-50 relative z-10 mt-0 rounded-t-[3rem] shadow-[0_-20px_50px_-20px_rgba(0,0,0,0.1)]">
        <div className="container-custom">
          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 border ${
                  activeFilter === cat 
                    ? "bg-[#C8581A] text-white border-[#C8581A] shadow-xl shadow-secondary/20" 
                    : "bg-transparent text-[#C8581A] border-[#C8581A] hover:bg-secondary/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            <AnimatePresence mode="popLayout">
              {filteredStartups.map((startup, idx) => (
                <PortfolioCard key={startup.name} startup={startup} idx={idx} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-[#1E40AF]" />
        
        {/* Decorative elements */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <Award className="w-16 h-16 text-secondary mx-auto mb-8 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              Want to Launch Your <span className="text-secondary italic">Startup?</span>
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join the JJCET Incubation Hub and transform your innovative ideas into successful ventures. We provide the mentorship, funding access, and workspace you need.
            </p>
            
            <button className="bg-secondary text-white px-10 py-5 rounded-xl text-lg font-bold shadow-2xl shadow-secondary/30 hover:scale-105 active:scale-95 transition-all group">
              <span className="flex items-center gap-3">
                Apply for Incubation
                <Rocket className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

const PortfolioCard = ({ startup, idx }: any) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <motion.div
      layout
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="group bg-white rounded-[3rem] border border-slate-100 overflow-hidden shadow-sm hover:shadow-[0_12px_30px_rgba(0,0,0,0.15)] hover:-translate-y-2 transition-all duration-[400ms] h-[580px] flex flex-col"
    >
      <div className="h-64 overflow-hidden relative">
        <motion.img 
          style={{ y: imgY }}
          src={startup.image} 
          alt={startup.name} 
          className="w-full h-[120%] object-cover group-hover:scale-110 transition-transform duration-[2000ms]" 
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-linear-to-t from-primary/40 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-xl px-4 py-2 rounded-xl flex items-center gap-2 font-black text-primary text-[10px] shadow-2xl z-20 shadow-primary/20 uppercase tracking-widest">
           <Rocket className="w-3 h-3 text-secondary" />
           {startup.tag}
        </div>
      </div>
      
      <div className="p-10 flex-1 flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center font-black text-primary text-xl mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl border border-slate-100 relative -mt-20 z-20">
          <span className="group-hover:hidden">{startup.icon}</span>
          <Briefcase className="hidden group-hover:block w-8 h-8 text-secondary" />
        </div>

        <h3 className="text-3xl font-black text-primary mb-3 tracking-tighter group-hover:text-secondary transition-colors duration-500">
          {startup.name}
        </h3>
        
        <div className="bg-secondary/5 text-secondary text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.3em] mb-6 border border-secondary/10">
          Incubated Success
        </div>
        
        <p className="text-text-muted text-sm leading-relaxed mb-6 line-clamp-2 font-bold italic">
          "{startup.tagline}"
        </p>

        <p className="text-text-muted text-[13px] leading-relaxed mb-10 line-clamp-3 font-medium flex-1">
          {startup.about}
        </p>
        
        <div className="w-full pt-8 border-t border-slate-50 mt-auto flex flex-col gap-4">
          <Link 
            to={`/startups/${startup.slug}`}
            className="w-full bg-primary text-white py-4 text-[10px] font-black uppercase tracking-widest hover:-translate-y-1 transition-all flex items-center justify-center gap-3 rounded-xl shadow-lg"
          >
            View Case Study
            <Info className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
