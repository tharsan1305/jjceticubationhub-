import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Linkedin, Building2, Target, Rocket, GraduationCap, Layers, ArrowRight, Share2, Check, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

interface ProfileModalProps {
  member: any;
  isOpen: boolean;
  onClose: () => void;
}

export const ProfileModal = ({ member, isOpen, onClose }: ProfileModalProps) => {
  const [showToast, setShowToast] = useState(false);

  React.useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!member) return null;

  const handleShare = () => {
    const url = `${window.location.origin}${window.location.pathname}?member=${member.name.toLowerCase().replace(/\s+/g, '-')}`;
    navigator.clipboard.writeText(url);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const getFocalPoint = (name: string) => {
    if (name === "Mr. Tharsan") return "center 5%";
    return "center 10%";
  };

  const getCleanImageUrl = (url: string) => {
    if (!url) return "";
    // Remove Cloudinary transformations to get original image
    return url.replace(/\/upload\/c_[^/]+\//, "/upload/");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md cursor-pointer"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-5xl bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] z-10"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 bg-[#1a2a4a] text-white rounded-full flex items-center justify-center text-xl hover:scale-110 active:scale-95 transition-all z-[100] shadow-xl"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Column: Media (45% Width) */}
            <div className="md:w-[45%] relative bg-[#1a2a4a] flex items-center justify-center min-h-[500px]">
              {member.image ? (
                <img 
                  src={getCleanImageUrl(member.image)} 
                  alt={member.name} 
                  crossOrigin="anonymous"
                  style={{ objectPosition: getFocalPoint(member.name) }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <div className="text-white text-[4rem] font-bold tracking-widest uppercase">
                  {member.initials}
                </div>
              )}
              
              {/* Image Overlay Gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-80" />
              
              {/* Name and Badge Absolute Positioned */}
              <div className="absolute bottom-8 left-8 right-8 z-20">
                 <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-4 py-1.5 bg-[#C8581A] text-white text-[9px] font-black rounded-full uppercase tracking-widest shadow-lg">
                      {member.badge}
                    </span>
                    {member.category === 'students' && (
                      <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md text-white border border-white/30 text-[9px] font-black rounded-full uppercase tracking-widest">
                        INCUBATION
                      </span>
                    )}
                 </div>
                 <h2 className="text-2xl md:text-3xl font-black text-white tracking-tighter uppercase leading-tight">
                   {member.name}
                 </h2>
              </div>
            </div>

            {/* Right Column: Info (55% Width) */}
            <div className="md:w-[55%] p-8 md:p-12 lg:p-16 overflow-y-auto custom-scrollbar">
              <div className="max-w-xl">
                {/* 2. Current Role */}
                <div className="mb-10">
                   <p className="text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] mb-4">Professional Assignment</p>
                   <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-start gap-4">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0">
                         <Building2 className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                         <p className="text-lg font-black text-primary leading-tight mb-1 uppercase">{member.role}</p>
                         <p className="text-xs font-bold text-text-muted uppercase tracking-wider">{member.organisation}</p>
                      </div>
                   </div>
                </div>

                {/* 3. Academic Details (Students only) */}
                {member.category === 'students' && (
                  <div className="grid grid-cols-2 gap-6 mb-10">
                    <div>
                      <p className="text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] mb-3">Year of Study</p>
                      <div className="flex items-center gap-3 font-bold text-primary text-sm">
                        <GraduationCap className="w-5 h-5 text-secondary" />
                        {member.year}
                      </div>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] mb-3">Department</p>
                      <div className="flex items-center gap-3 font-bold text-primary italic text-sm">
                        <Layers className="w-5 h-5 text-secondary" />
                        {member.department}
                      </div>
                    </div>
                  </div>
                )}

                {/* 4. Responsibilities & Focus */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 pb-10 border-b border-slate-100">
                  <div>
                    <p className="text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] mb-3">Key Strategic Role</p>
                    <div className="flex items-start gap-3">
                       <Target className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                       <p className="text-xs font-bold text-primary leading-snug">{member.keyResponsibility}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] mb-3">Strategic Focus</p>
                    <div className="flex items-start gap-3">
                       <Rocket className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                       <p className="text-xs font-bold text-primary leading-snug">{member.focusArea}</p>
                    </div>
                  </div>
                </div>

                {/* 5. Biography */}
                <div className="mb-12">
                   <p className="text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] mb-4">Visionary Bio</p>
                   <p className="text-lg font-bold text-primary/70 leading-relaxed italic">
                     "{member.bio}"
                   </p>
                </div>

                {/* 6. Startup Portfolio (Students only) */}
                {member.startup && (
                   <div className="mb-12">
                      <p className="text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] mb-6">Entrepreneurial Venture</p>
                      <div className="p-8 border-2 border-[#C8581A] rounded-[2rem] bg-secondary/5 group relative overflow-hidden">
                         <div className="absolute top-0 right-0 p-6 opacity-10">
                            <Rocket className="w-16 h-16" />
                         </div>
                         
                         <div className="relative z-10">
                            <h4 className="text-2xl font-black text-primary mb-1 uppercase tracking-tighter">{member.startup.name}</h4>
                            <div className="flex items-center gap-3 mb-6">
                               <span className="text-[10px] font-bold text-secondary">{member.startup.role}</span>
                               <div className="w-1 h-1 bg-slate-300 rounded-full" />
                               <span className="text-[9px] font-black uppercase tracking-widest bg-white px-3 py-1 rounded-full shadow-sm border border-slate-100/50">
                                  {member.startup.category}
                               </span>
                            </div>
                            
                            <Link 
                              to="/startups"
                              onClick={onClose}
                              className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-[#C8581A] hover:gap-5 transition-all"
                            >
                               View Startup Deep-Dive
                               <ArrowRight className="w-4 h-4" />
                            </Link>
                         </div>
                      </div>
                   </div>
                )}

                {/* 7. Social Links */}
                <div className="flex flex-wrap gap-4 pt-4">
                  {member.linkedin && (
                    <a 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-4 px-8 py-4 bg-[#1a2a4a] text-white rounded-lg font-black text-[10px] uppercase tracking-widest shadow-xl shadow-primary/10 hover:-translate-y-1 transition-all"
                    >
                      <Linkedin className="w-4 h-4" />
                      Connect on LinkedIn
                    </a>
                  )}

                  {member.portfolioUrl && (
                    <a 
                      href={member.portfolioUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-4 px-8 py-4 border-1.5 border-[#C8581A] text-[#C8581A] rounded-lg font-black text-[10px] uppercase tracking-widest hover:bg-[#C8581A] hover:text-white transition-all duration-300"
                    >
                      View Portfolio
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}

                  <button 
                    onClick={handleShare}
                    className="inline-flex items-center gap-4 px-8 py-4 bg-slate-100 text-primary rounded-lg font-black text-[10px] uppercase tracking-widest hover:bg-slate-200 transition-all"
                  >
                    <Share2 className="w-4 h-4" />
                    Share Profile
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Toast Notification */}
          <AnimatePresence>
            {showToast && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-[#1a2a4a] text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-4 z-[200]"
              >
                <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-xs font-black uppercase tracking-widest">Profile link copied!</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </AnimatePresence>
  );
};
