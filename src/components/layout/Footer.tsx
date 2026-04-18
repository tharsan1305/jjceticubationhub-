import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Twitter, Linkedin, Facebook, MapPin, Mail, Phone } from "lucide-react";
import { contactInfo } from "../../constants";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-48 pb-16 overflow-hidden relative">
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 mb-32">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-6 mb-12 group">
              <div className="p-4 bg-white rounded-[1.5rem] shadow-2xl group-hover:scale-110 transition-transform border border-white/5">
                <img 
                  src="/images/JJCET-logo.png" 
                  alt="JJCET Logo" 
                  className="h-20 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col text-white">
                <span className="text-4xl font-bold tracking-widest leading-none">JJCET</span>
                <span className="text-[10px] font-bold text-secondary uppercase tracking-widest mt-2">Incubation Hub</span>
              </div>
            </Link>
            <p className="text-white/40 max-w-sm text-lg leading-relaxed mb-12 font-medium">
              Empowering student-led innovation and transforming vision into high-impact startups. Join the ecosystem where ideas evolve into market leaders.
            </p>
            <div className="flex gap-6">
               {[Instagram, Twitter, Linkedin, Facebook].map((Icon, i) => (
                 <a key={i} href="#" className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary hover:-translate-y-2 transition-all duration-500 shadow-xl">
                    <Icon className="w-6 h-6 text-white" />
                 </a>
               ))}
            </div>
          </div>

          <div>
            <h4 className="font-black text-[10px] uppercase tracking-[0.5em] mb-12 text-secondary">Ecosystem</h4>
            <ul className="space-y-8">
               {[
                 { name: "About Hub", href: "/about" },
                 { name: "Startups", href: "/startups" },
                 { name: "Leadership", href: "/team" },
                 { name: "Events & News", href: "/events" },
                 { name: "Contact Us", href: "/contact" }
               ].map(link => (
                 <li key={link.name}>
                   <Link to={link.href} className="text-white/50 hover:text-white transition-colors text-sm font-bold tracking-tight inline-flex items-center group">
                     {link.name}
                     <span className="w-0 group-hover:w-4 h-px bg-secondary ml-0 group-hover:ml-2 transition-all duration-300" />
                   </Link>
                 </li>
               ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black text-[10px] uppercase tracking-[0.5em] mb-12 text-secondary">Resources</h4>
            <ul className="space-y-8">
               {[
                 "Venture Capital Awareness",
                 "Mentorship Programs",
                 "Pitch Deck Verification",
                 "IP & Legal Framework",
                 "Download Brochure"
               ].map(link => (
                 <li key={link}>
                   <a href="#" className="text-white/50 hover:text-white transition-colors text-sm font-bold tracking-tight inline-flex items-center group">
                     {link}
                     <span className="w-0 group-hover:w-4 h-px bg-secondary ml-0 group-hover:ml-2 transition-all duration-300" />
                   </a>
                 </li>
               ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black text-[10px] uppercase tracking-[0.5em] mb-12 text-secondary">Headquarters</h4>
            <div className="space-y-10">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 border border-white/5 group-hover:bg-secondary transition-colors">
                  <MapPin className="text-secondary w-6 h-6 group-hover:text-white transition-colors" />
                </div>
                <p className="text-white/50 text-base font-medium leading-relaxed">
                  Ammapettai, Poolangulathupatti Post, <br />
                  Tiruchirappalli - 620 009, <br />
                  Tamil Nadu, India.
                </p>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 border border-white/5 group-hover:bg-secondary transition-all">
                  <Phone className="text-secondary w-6 h-6 group-hover:text-white transition-colors" />
                </div>
                <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="text-white/50 text-base font-medium tracking-tight hover:text-white transition-colors">
                  {contactInfo.phone} <br />
                  <span className="text-[10px] opacity-50 uppercase tracking-widest">Available 24/7</span>
                </a>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 border border-white/5 group-hover:bg-secondary transition-all">
                  <Mail className="text-secondary w-6 h-6 group-hover:text-white transition-colors" />
                </div>
                <a href={`mailto:${contactInfo.email}`} className="text-white/50 text-base font-medium tracking-tight hover:text-white transition-colors">
                  {contactInfo.email} <br />
                  <span className="text-[10px] opacity-50 uppercase tracking-widest">Official Support</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
          <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.4em] order-2 md:order-1 text-center md:text-left">
            © 2026 JJCET INCUBATION HUB. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-12 order-1 md:order-2">
            <a href="#" className="text-white/20 hover:text-secondary text-[10px] font-black uppercase tracking-widest transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/20 hover:text-secondary text-[10px] font-black uppercase tracking-widest transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
