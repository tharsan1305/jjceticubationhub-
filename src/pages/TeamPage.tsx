import React, { useState, useEffect } from "react";
import { PageTransition } from "../components/layout/PageTransition";
import { MentorLeadership } from "../components/sections/MentorLeadership";
import { InvestorMentorCTA } from "../components/sections/InspirationSections";
import { TeamSkeletonGrid } from "../components/common/Skeletons";
import { motion, AnimatePresence } from "motion/react";

const TeamPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <PageTransition>
      <div className="pt-24 min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div 
              key="skeleton"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="container-custom py-20"
            >
               <TeamSkeletonGrid />
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <MentorLeadership />
              <InvestorMentorCTA />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
};

export default TeamPage;
