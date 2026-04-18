import React from "react";
import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export const SectionHeader = ({ title, subtitle, light = false }: SectionHeaderProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-center mb-20 md:mb-32"
  >
    {subtitle && (
      <p className={`font-bold uppercase tracking-widest text-xs mb-8 ${light ? 'text-secondary/80' : 'text-secondary'}`}>
        {subtitle}
      </p>
    )}
    <h2 className={`text-5xl md:text-7xl font-bold leading-tight uppercase ${light ? 'text-white' : 'text-primary'}`}>
      {title}
    </h2>
  </motion.div>
);

interface PremiumButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'glass';
  className?: string;
  onClick?: () => void;
  icon?: LucideIcon;
  href?: string;
}

export const PremiumButton = ({ 
  children, 
  variant = 'primary', 
  className = "", 
  onClick, 
  icon: Icon,
  href
}: PremiumButtonProps) => {
  const baseStyles = "btn-premium relative overflow-hidden group scale-100 hover:scale-[1.02] active:scale-95 transition-all duration-300 font-bold";
  
  const variants = {
    primary: "bg-primary text-white shadow-xl shadow-primary/20",
    secondary: "bg-secondary text-white shadow-xl shadow-secondary/20",
    outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white",
    glass: "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20"
  };

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {Icon && <Icon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
      </span>
      {(variant === 'primary' || variant === 'secondary') && (
        <div className={`absolute inset-0 ${variant === 'primary' ? 'bg-secondary' : 'bg-primary'} translate-y-full group-hover:translate-y-0 transition-transform duration-500`} />
      )}
    </>
  );

  if (href) {
    const isExternal = typeof href === 'string' && href.startsWith('http');
    return (
      <a 
        href={href} 
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {content}
    </button>
  );
};
