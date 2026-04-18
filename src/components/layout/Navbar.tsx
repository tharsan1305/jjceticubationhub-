import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { navLinks } from "../../constants";
import { PremiumButton } from "../common/UIComponents";

interface NavbarProps {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export const Navbar = ({ isDarkMode, onToggleDarkMode }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full py-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-100 dark:border-slate-800 transition-all duration-300"
    >
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 flex justify-between items-center h-full gap-8">
        
        {/* Branding */}
        <div className="flex-shrink-0">
          <Link to="/" className="flex items-center gap-5 group">
            <div className="shrink-0 transition-transform group-hover:scale-105">
              <img 
                src="https://img.sanishtech.com/u/88812ac7ad49e08ca56b9c2ae4246c7a.png" 
                alt="JJCET Logo" 
                className="h-[50px] md:h-[60px] w-auto brightness-110"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-black text-primary dark:text-white tracking-tighter leading-none uppercase">
                JJCET
              </span>
              <span className="text-[10px] md:text-[0.7rem] text-[#C8581A] font-black uppercase tracking-[0.2em] mt-1 whitespace-nowrap">
                Incubation Hub
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 items-center justify-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href}
              className={`text-[11px] font-black uppercase tracking-widest transition-all duration-300 relative group px-2 py-1 whitespace-nowrap ${
                location.pathname === link.href 
                  ? "text-[#C8581A]" 
                  : "text-primary/50 dark:text-white/40 hover:text-[#C8581A]"
              }`}
            >
              {link.name}
              <span 
                className={`absolute -bottom-1 left-0 h-[2px] bg-[#C8581A] transition-all duration-300 ${
                  location.pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                }`} 
              />
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex-shrink-0 flex items-center gap-6">
          <button 
            onClick={onToggleDarkMode}
            className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center hover:scale-110 active:scale-95 transition-all text-primary dark:text-white"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <Link to="/apply" className="hidden md:block transition-transform hover:scale-105">
            <PremiumButton variant="primary" className="px-8 py-4 rounded-xl shadow-xl shadow-primary/10 text-[10px] font-black uppercase tracking-widest">
              Apply Now
            </PremiumButton>
          </Link>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-3 bg-slate-100 dark:bg-slate-800 text-primary dark:text-white rounded-xl transition-all" 
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 bg-white dark:bg-slate-900 z-[200] p-8 md:hidden flex flex-col"
          >
            <div className="flex justify-between items-center mb-16">
               <div className="flex items-center gap-4">
                  <img src="https://img.sanishtech.com/u/88812ac7ad49e08ca56b9c2ae4246c7a.png" alt="Logo" className="h-10 w-auto" />
                  <span className="text-xl font-black text-primary dark:text-white uppercase tracking-tighter">JJCET HUB</span>
               </div>
               <button onClick={() => setIsMobileMenuOpen(false)} className="p-3 bg-slate-50 dark:bg-slate-800 text-primary dark:text-white rounded-xl">
                 <X className="w-6 h-6" />
               </button>
            </div>

            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-black text-primary dark:text-white uppercase tracking-tighter hover:text-secondary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-6">
                 <button 
                   onClick={() => { onToggleDarkMode(); setIsMobileMenuOpen(false); }} 
                   className="flex items-center justify-between p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl w-full"
                 >
                    <span className="font-black uppercase tracking-widest text-[10px] dark:text-white">Appearance</span>
                    {isDarkMode ? <Sun className="w-5 h-5 text-secondary" /> : <Moon className="w-5 h-5 text-[#1a2a4a]" />}
                 </button>
                 <Link to="/apply" onClick={() => setIsMobileMenuOpen(false)}>
                    <PremiumButton variant="primary" className="w-full py-6 text-sm font-black uppercase tracking-widest">
                      Apply Now
                    </PremiumButton>
                 </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
