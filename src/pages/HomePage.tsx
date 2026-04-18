import React from "react";
import { PageTransition } from "../components/layout/PageTransition";
import { Hero } from "../components/sections/Hero";
import { Stats } from "../components/sections/Stats";
import { StartupMarquee } from "../components/sections/StartupMarquee";
import { SuccessStories } from "../components/sections/SuccessStories";
import { InnovationDomains } from "../components/sections/InnovationDomains";
import { FAQSection } from "../components/sections/FAQSection";
import { Testimonials } from "../components/sections/Testimonials";
import { Newsletter } from "../components/sections/Newsletter";

const HomePage = () => {
  return (
    <PageTransition>
      <Hero />
      <StartupMarquee />
      <Stats />
      <InnovationDomains />
      <SuccessStories />
      <FAQSection />
      <Testimonials />
      <Newsletter />
    </PageTransition>
  );
};

export default HomePage;
