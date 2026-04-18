import React from "react";
import { PageTransition } from "../components/layout/PageTransition";
import { OurVision } from "../components/sections/OurVision";
import { AboutSection, WhyJoinUs } from "../components/sections/AboutSections";
import { AwardsRecognition } from "../components/sections/MarketingSections";
import { PartnerSupport, DownloadBrochure } from "../components/sections/InspirationSections";

const AboutPage = () => {
  return (
    <PageTransition>
      <OurVision />
      <AboutSection />
      <WhyJoinUs />
      <AwardsRecognition />
      <PartnerSupport />
      <DownloadBrochure />
    </PageTransition>
  );
};

export default AboutPage;
