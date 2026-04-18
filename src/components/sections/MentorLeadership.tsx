import React, { useState, useMemo, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import { leadership, students } from "../../constants";
import { SectionHeader } from "../common/UIComponents";
import { ProfileModal } from "./ProfileModal";
import { Linkedin, Briefcase, Search, Users, GraduationCap, Building2, Rocket, Share2, Check } from "lucide-react";

export const MentorLeadership = () => {
  const [selectedMember, setSelectedMember] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeStartup, setActiveStartup] = useState("ALL");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const startups = ["ALL", "AREOSTELLAR", "MAXIFILED", "NEXARA CREATION", "NEXORA CREW", "RAPID ARMS"];

  const filteredLeadership = leadership.filter(m => 
    m.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    m.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredStudents = useMemo(() => {
    let result = [...students].sort((a, b) => {
      const yearA = parseInt(a.year[0]);
      const yearB = parseInt(b.year[0]);
      return yearB - yearA;
    });

    if (activeStartup !== "ALL") {
      result = result.filter(s => s.startup?.name.toUpperCase() === activeStartup);
    }

    if (searchQuery) {
      result = result.filter(m => 
        m.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        m.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.department.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return result;
  }, [activeStartup, searchQuery]);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[45vh] flex items-center bg-[#0a1628] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(200,88,26,0.08),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(200,88,26,0.05),transparent_50%)]" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }} />
        
        <div className="container-custom relative z-10 py-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="px-4 py-1.5 bg-[#C8581A]/10 text-[#C8581A] text-[10px] font-black rounded-full uppercase tracking-[0.3em] mb-8 inline-block border border-[#C8581A]/20">
                EXPERTISE & VISION
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase leading-none">
                Meet Our <br />
                <span className="text-[#C8581A] italic font-serif lowercase tracking-normal px-2">Innovation Team</span>
              </h1>
              <p className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                The passionate minds driving innovation and entrepreneurship at JJCET Incubation Hub.
              </p>
            </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white pt-16 pb-8 border-b border-slate-100">
          <div className="container-custom">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
                  <StatItem number={1} label="Principal" isFirst />
                  <StatItem number={2} label="Faculty Leaders" />
                  <StatItem number={8} label="Student Innovators" />
                  <StatItem number={5} label="Active Startups" isLast />
              </div>
          </div>
      </section>
      
      <section id="team" className="pt-8 pb-32 bg-slate-50/50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(200,88,26,0.03),transparent_50%)] -z-10" />
        
        <div className="container-custom">
          {/* Search */}
          <div className="max-w-xl mx-auto mb-12">
            <div className="relative group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/30 group-hover:text-primary transition-colors" />
              <input 
                type="text" 
                placeholder="Search team member..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-16 pr-8 py-5 bg-white rounded-3xl border border-slate-100 outline-none focus:border-secondary transition-all font-bold text-primary w-full shadow-2xl shadow-primary/5"
              />
            </div>
          </div>

          {/* Section 1: Leadership */}
          {filteredLeadership.length > 0 && (
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-12 px-4 md:px-0">
                <h2 className="text-3xl font-black text-primary uppercase tracking-tight flex items-center">
                  Leadership & Faculty
                  <span className="ml-4 px-4 py-1.5 bg-[#1a2a4a] text-white text-[10px] font-black rounded-full uppercase tracking-widest shadow-lg">
                    {leadership.length} Members
                  </span>
                </h2>
                <div className="h-px flex-1 bg-slate-200 ml-8" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
                {filteredLeadership.map((member, i) => (
                  <LeaderCard 
                    key={member.name} 
                    member={member} 
                    index={i} 
                    onSelect={() => setSelectedMember(member)} 
                  />
                ))}
              </div>
            </div>
          )}

          {/* Startup Filter Bar */}
          <div className="mb-16 overflow-x-auto custom-scrollbar pb-6 px-4">
             <div className="flex flex-nowrap md:flex-wrap items-center justify-start md:justify-center gap-4">
                {startups.map((startup) => (
                   <button
                    key={startup}
                    onClick={() => setActiveStartup(startup)}
                    className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap border ${
                      activeStartup === startup 
                        ? "bg-[#1a2a4a] text-white border-[#1a2a4a] shadow-xl shadow-primary/20 scale-105" 
                        : "bg-white text-[#1a2a4a] border-[#1a2a4a]/20 hover:border-[#1a2a4a] hover:bg-[#1a2a4a]/5"
                    }`}
                   >
                    {startup}
                   </button>
                ))}
             </div>
          </div>

          {/* Section 2: Students */}
          <div>
            <div className="flex items-center gap-4 mb-16 px-4 md:px-0">
              <h2 className="text-3xl font-black text-primary uppercase tracking-tight flex items-center">
                Student Innovators
                <span className="ml-4 px-4 py-1.5 bg-[#1a2a4a] text-white text-[10px] font-black rounded-full uppercase tracking-widest shadow-lg">
                  {students.length} Members
                </span>
              </h2>
              <div className="h-px flex-1 bg-slate-200 ml-8" />
            </div>
            
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div 
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
              >
                {filteredStudents.map((member, i) => (
                  <LeaderCard 
                    key={member.name} 
                    member={member} 
                    index={i} 
                    onSelect={() => setSelectedMember(member)} 
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {filteredLeadership.length === 0 && filteredStudents.length === 0 && (
            <div className="text-center py-40">
              <Users className="w-20 h-20 text-slate-200 mx-auto mb-8" />
              <p className="text-xl font-bold text-primary/20 uppercase tracking-[0.4em]">No members found</p>
            </div>
          )}
        </div>
      </section>

      <ProfileModal 
        member={selectedMember} 
        isOpen={!!selectedMember} 
        onClose={() => setSelectedMember(null)} 
      />

      <style>{`
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(16,185,129,0.7) }
          70% { box-shadow: 0 0 0 8px rgba(16,185,129,0) }
          100% { box-shadow: 0 0 0 0 rgba(16,185,129,0) }
        }
        .pulse-dot {
          animation: pulse 2s infinite;
        }
      `}</style>
    </div>
  );
};

const StatItem = ({ number, label, isFirst, isLast }: { number: number, label: string, isFirst?: boolean, isLast?: boolean }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = number / (duration / 16);
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= number) {
            setCount(number);
            clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, 16);
      }
    }, { threshold: 0.5 });

    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, [number]);

  return (
    <div ref={nodeRef} className={`flex flex-col items-center justify-center p-8 ${!isLast ? 'md:border-r border-slate-100' : ''}`}>
        <span className="text-5xl font-black text-[#1a2a4a] mb-2 tracking-tighter">
            {count}
        </span>
        <span className="text-[10px] font-black text-[#C8581A] uppercase tracking-[0.2em]">{label}</span>
    </div>
  );
};

const LeaderCard = ({ member, index, onSelect }: { member: any, index: number, onSelect: () => void }) => {
  const isLeadership = member.category === 'leadership' || member.category === 'faculty';
  
  const getObjectPosition = () => {
    if (member.name.includes("Mathiyalagan") || member.name.includes("Premkumar") || member.name.includes("Navin")) return "center top";
    if (isLeadership) return "center 15%";
    return "center top";
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative cursor-pointer h-full"
      onClick={onSelect}
    >
      <div className="bg-white rounded-[3rem] p-4 shadow-xl shadow-primary/5 border border-slate-50 transition-all duration-500 group-hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] group-hover:border-[#C8581A]/40 flex flex-col h-full overflow-hidden">
        {/* Image / Avatar Container */}
        <div className={`relative overflow-hidden rounded-t-[1.5rem] ${isLeadership ? 'h-[260px]' : 'h-[220px]'} w-full flex items-center justify-center bg-[#f0f0f0] mb-8 shrink-0`}>
          {/* Active Pulse Dot */}
          <div className="absolute top-6 left-6 z-20 group/dot">
             <div className="w-2.5 h-2.5 bg-[#10B981] rounded-full pulse-dot shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
             <div className="absolute left-6 top-1/2 -translate-y-1/2 px-3 py-1 bg-primary text-white text-[8px] font-black rounded-lg opacity-0 group-hover/dot:opacity-100 transition-opacity whitespace-nowrap tracking-widest shadow-xl">
               ACTIVE MEMBER
             </div>
          </div>

          {member.image ? (
            <img 
              src={member.image} 
              alt={member.name} 
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = 'none';
                const next = target.nextSibling as HTMLElement;
                if (next) {
                  next.style.display = 'flex';
                }
              }}
              style={{ objectPosition: getObjectPosition() }}
              className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110" 
            />
          ) : null}
          
          <div 
            style={{ display: 'none' }}
            className="absolute inset-0 items-center justify-center text-white text-[3rem] font-bold tracking-widest"
          >
            {member.initials}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 px-4 pb-4">
          <div className="flex flex-wrap gap-2 mb-4">
            {member.year && (
              <span className="bg-[#1a2a4a] text-white text-[8px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest">
                {member.year}
              </span>
            )}
            {member.department && (
              <span className="bg-[#C8581A] text-white text-[8px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest">
                {member.department}
              </span>
            )}
          </div>

          <h3 className="text-2xl font-black text-primary mb-1 tracking-tighter leading-none group-hover:text-secondary transition-colors uppercase">
            {member.name}
          </h3>
          
          <div className="mb-6">
            {member.startup ? (
              <p className="text-[#C8581A] text-[0.8rem] font-semibold leading-tight uppercase mb-1">
                {member.startup.role} · {member.startup.name}
              </p>
            ) : (
              <p className="text-text-muted text-[10px] font-bold tracking-widest uppercase flex items-center gap-2">
                <Building2 className="w-3 h-3 text-secondary" />
                {member.role}
              </p>
            )}
          </div>

          {member.startup && (
            <div className="mt-auto pt-6 border-t border-slate-50">
              <div className="flex items-center gap-3 px-4 py-2 bg-secondary/5 rounded-xl border border-secondary/10 group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                <Rocket className="w-3 h-3" />
                <span className="text-[10px] font-black uppercase tracking-widest">
                  {member.startup.name}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};
