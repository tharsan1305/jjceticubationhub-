import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Phone, MessageCircle } from "lucide-react";

// Layout & Animation
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { GlobalLoader } from "./components/layout/GlobalLoader";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import StartupsPage from "./pages/StartupsPage";
import TeamPage from "./pages/TeamPage";
import EventsPage from "./pages/EventsPage";
import ContactPage from "./pages/ContactPage";
import StartupDetail from "./pages/StartupDetail";
import { ApplyPage } from "./pages/ApplyPage";
import { NotFoundPage } from "./pages/NotFoundPage";

// Components
import { CustomCursor } from "./components/common/CustomCursor";
import { AIChatbot } from "./components/common/AIChatbot";
import { AnnouncementBanner } from "./components/common/AnnouncementBanner";
import { BackToTop } from "./components/common/BackToTop";

const AnimatedRoutes = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // Theme Sync
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <>
      <CustomCursor />
      {loading ? (
        <GlobalLoader onComplete={() => setLoading(false)} />
      ) : (
        <div className="flex flex-col min-h-screen">
          <AnnouncementBanner />
          <Navbar isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/startups" element={<StartupsPage />} />
                <Route path="/team" element={<TeamPage />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/apply" element={<ApplyPage />} />
                <Route path="/startups/:slug" element={<StartupDetail />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
          
          <AIChatbot />
          <BackToTop />

          {/* WhatsApp / Action Button */}
          <a 
            href="https://wa.me/919442882091"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all group"
          >
             <div className="absolute inset-0 bg-[#25D366] rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-all" />
             <MessageCircle className="w-7 h-7 relative z-10" />
          </a>
        </div>
      )}
    </>
  );
};

export default function App() {
  return (
    <Router>
      <div className="font-sans antialiased bg-white dark:bg-slate-950 transition-colors duration-300">
        <AnimatedRoutes />
      </div>
    </Router>
  );
}
