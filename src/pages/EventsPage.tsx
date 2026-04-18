import React from "react";
import { PageTransition } from "../components/layout/PageTransition";
import { FeaturedEventBanner, EventPlatform } from "../components/sections/EventPlatform";
import { AwardsRecognition } from "../components/sections/MarketingSections";
import { InnovationGallery } from "../components/sections/InspirationSections";

const EventsPage = () => {
  return (
    <PageTransition>
      <div className="pt-24 min-h-screen bg-white">
        <FeaturedEventBanner />
        <EventPlatform />
        <InnovationGallery />
        <AwardsRecognition />
      </div>
    </PageTransition>
  );
};

export default EventsPage;
