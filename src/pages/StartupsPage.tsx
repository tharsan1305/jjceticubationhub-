import React, { useState, useEffect } from "react";
import { PageTransition } from "../components/layout/PageTransition";
import StartupPortfolio from "./StartupPortfolio";
import { StartupJourneyTimeline } from "../components/sections/StartupJourneyTimeline";
import { FundingSupport } from "../components/sections/InspirationSections";
import { StartupSkeletonGrid } from "../components/common/Skeletons";
import { motion, AnimatePresence } from "motion/react";

const StartupsPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div 
              key="skeleton"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="container-custom pt-48 pb-32"
            >
               <StartupSkeletonGrid />
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <StartupPortfolio />
              <StartupJourneyTimeline />
              <FundingSupport />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
};

export default StartupsPage;
