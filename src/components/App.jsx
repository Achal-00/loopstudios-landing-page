import React from "react";
import LandingSection from "./LandingSection/LandingSection";
import SectionOne from "./SectionOne/SectionOne";
import SectionTwo from "./SectionTwo/SectionTwo";
import Footer from "./Footer/Footer";

export default function App() {
  return (
    <div className="relative">
      <LandingSection />
      <SectionOne />
      <SectionTwo />
      <Footer />
    </div>
  );
}
