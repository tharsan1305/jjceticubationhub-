import React from "react";
import { PageTransition } from "../components/layout/PageTransition";
import { ContactSection, FAQSection, Newsletter } from "../components/sections/MarketingSections";

const ContactPage = () => {
  return (
    <PageTransition>
      <div className="pt-24">
        <ContactSection />
        <FAQSection />
        <Newsletter />
      </div>
    </PageTransition>
  );
};

export default ContactPage;
