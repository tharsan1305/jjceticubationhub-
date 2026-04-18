import React, { useEffect, useState } from "react";
import { motion, useSpring } from "motion/react";

export const CustomCursor = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClickable, setIsClickable] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useSpring(0, { stiffness: 500, damping: 28 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 28 });

  useEffect(() => {
    setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      const target = e.target as HTMLElement;
      setIsClickable(!!target.closest('button, a, .cursor-pointer, input, select'));
      setIsHovering(!!target.closest('.group'));
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isMobile || !isVisible) return null;

  return (
    <>
      <motion.div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          x: mouseX,
          y: mouseY,
          pointerEvents: "none",
          zIndex: 9999,
        }}
        animate={{
          scale: isClickable ? 2.5 : 1,
          backgroundColor: isClickable ? "rgba(200, 88, 26, 0.2)" : "transparent",
          border: "1px solid rgba(200, 88, 26, 0.4)",
          backdropFilter: "blur(4px)"
        }}
        className="w-4 h-4 rounded-full -translate-x-1/2 -translate-y-1/2"
      />
      <motion.div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          x: mouseX,
          y: mouseY,
          pointerEvents: "none",
          zIndex: 9998,
        }}
        animate={{
          scale: isClickable ? 1.5 : 0.5,
          opacity: isClickable ? 0.2 : 0.1
        }}
        className="w-10 h-10 bg-[#C8581A] rounded-full -translate-x-1/2 -translate-y-1/2 blur-lg"
      />
    </>
  );
};
