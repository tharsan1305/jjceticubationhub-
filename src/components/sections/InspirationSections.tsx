import React from "react";
import { motion } from "motion/react";
import { SectionHeader, PremiumButton } from "../common/UIComponents";
import { 
  Building2, 
  Handshake, 
  Download, 
  Search,
  Zap,
  Star,
  Globe,
  TrendingUp,
  Target,
  Users
} from "lucide-react";

export const FundingSupport = () => (
  <section className="section-padding bg-slate-900 relative overflow-hidden">
     <div className="noise-overlay absolute inset-0 opacity-[0.05]" />
     <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
           <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
           >
              <p className="text-secondary font-bold uppercase tracking-widest text-xs mb-10">Financial Catalyst</p>
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-12 leading-tight uppercase">Funding <br /><span className="text-secondary">Assistance</span></h2>
              <p className="text-xl text-white/50 font-medium leading-relaxed mb-12">
                We bridge the gap between innovation and capital. Our hub provides student startups with the necessary guidance to navigate grants, seed funding, and venture capital networking.
              </p>
              <div className="grid grid-cols-2 gap-8">
                 {[
                   { label: "State Grants", desc: "Access to government innovation schemes." },
                   { label: "Seed Capital", desc: "Early-stage institutional investment support." },
                   { label: "VC Network", desc: "Direct intros to leading venture firms." },
                   { label: "Pitch Prep", desc: "Intensive training for funding rounds." }
                 ].map((item, i) => (
                   <div key={i} className="p-8 bg-white/5 rounded-3xl border border-white/5 hover:bg-white/10 transition-colors">
                      <p className="text-secondary font-bold text-lg mb-2 uppercase tracking-widest">{item.label}</p>
                      <p className="text-xs text-white/30 font-bold leading-relaxed">{item.desc}</p>
                   </div>
                 ))}
              </div>
           </motion.div>
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative"
           >
              <div className="absolute -inset-10 bg-secondary/10 blur-[120px] rounded-full" />
              <div className="rounded-[4rem] overflow-hidden border-[16px] border-white/5 shadow-2x">
                 <img src="https://rukamcapital.com/wp-content/uploads/2026/01/Blog-banner-11.jpg" alt="Funding Support" className="w-full h-auto opacity-80" />
                 <div className="absolute inset-0 bg-linear-to-t from-primary to-transparent opacity-40" />
              </div>
           </motion.div>
        </div>
     </div>
  </section>
);

export const PartnerSupport = () => {
   const partners = [
      { name: "EDII-TN", logo: "https://www.rmkec.ac.in/2023/wp-content/uploads/2022/07/06-EDII-TN.png" },
      { name: "StartupTN", logo: "https://ngitbi.com/wp-content/uploads/2025/02/blue-horizontal.png" },
      { name: "MSME", logo: "https://5.imimg.com/data5/JK/ND/MY-20716531/msme-logo.png" }
   ];

   return (
      <section className="py-24 bg-white border-y border-slate-50">
         <div className="container-custom">
            <div className="flex flex-wrap items-center justify-center gap-20 md:gap-40 opacity-100 transition-all duration-700">
               {partners.map((partner, i) => (
                  <div key={i} className="flex items-center group cursor-pointer">
                     <div className="w-32 h-16 md:w-48 md:h-24 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <img 
                          src={partner.logo} 
                          alt={partner.name} 
                          className="max-w-full max-h-full object-contain filter-none" 
                        />
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export const InvestorMentorCTA = () => (
   <section className="section-padding bg-white relative">
      <div className="container-custom">
         <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
               whileHover={{ y: -10 }}
               className="p-16 rounded-[4rem] bg-primary text-white relative overflow-hidden group shadow-2xl"
            >
               <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 blur-[100px]" />
               <div className="relative z-10">
                  <Handshake className="w-16 h-16 text-secondary mb-10 group-hover:rotate-12 transition-transform" />
                  <h3 className="text-4xl font-bold mb-8 uppercase">Become a Mentor</h3>
                  <p className="text-white/50 text-xl font-medium mb-12 leading-relaxed">Share your expertise and guide the next generation of student entrepreneurs to success.</p>
                  <PremiumButton variant="secondary" className="px-10 py-5">Register as Mentor</PremiumButton>
               </div>
            </motion.div>
            <motion.div
               whileHover={{ y: -10 }}
               className="p-16 rounded-[4rem] bg-slate-50 text-primary relative overflow-hidden group border border-slate-100 shadow-xl"
            >
               <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px]" />
               <div className="relative z-10">
                  <TrendingUp className="w-16 h-16 text-secondary mb-10 group-hover:rotate-12 transition-transform" />
                  <h3 className="text-4xl font-bold mb-8 uppercase">Join as Investor</h3>
                  <p className="text-primary/40 text-xl font-medium mb-12 leading-relaxed">Invest in high-potential student-led startups and shape the future of product innovation.</p>
                  <PremiumButton variant="primary" className="px-10 py-5">Partner with Us</PremiumButton>
               </div>
            </motion.div>
         </div>
      </div>
   </section>
);

export const InnovationGallery = () => (
   <section className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
         <SectionHeader title="Innovation Gallery" subtitle="Moments of Growth" />
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { id: 1, title: "Startup Meetup" },
              { id: 2, title: "Innovation Expo" },
              { id: 3, title: "Pitching Session" },
              { id: 4, title: "Demo Day" },
              { id: 5, title: "Workshop Lab" },
              { id: 6, title: "Incubator Visit" },
              { id: 7, title: "Hackathon Finals" },
              { id: 8, title: "Award Ceremony" }
            ].map((item, i) => (
               <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-2xl overflow-hidden aspect-[4/3] shadow-lg group relative cursor-pointer"
               >
                  <img 
                    src={`https://picsum.photos/seed/gallery${item.id}/800/600`} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                     <p className="text-white font-bold text-sm uppercase tracking-widest">
                       {item.title}
                     </p>
                  </div>
               </motion.div>
            ))}
         </div>
      </div>
   </section>
);

export const DownloadBrochure = () => (
   <section className="section-padding pt-0">
      <div className="container-custom">
         <div className="bg-slate-50 rounded-[4rem] p-16 md:p-24 flex flex-col md:flex-row items-center justify-between gap-12 border border-slate-100 shadow-sm">
            <div className="flex items-center gap-10">
               <div className="w-24 h-24 bg-primary rounded-3xl flex items-center justify-center shadow-2xl">
                  <Download className="text-secondary w-10 h-10" />
               </div>
                <div>
                   <h3 className="text-3xl font-bold text-primary mb-2 uppercase">Incubation Brochure 2026</h3>
                   <p className="text-primary/40 text-sm font-bold uppercase tracking-widest">Get the complete roadmap in PDF</p>
                </div>
            </div>
            <PremiumButton variant="primary" className="px-12 py-6 text-lg">
               Download Now (4.2 MB)
            </PremiumButton>
         </div>
      </div>
   </section>
);
