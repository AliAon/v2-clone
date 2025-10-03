import React from "react";
import HeroSection from "../common/hero-section";
import BestFeatures from "./best-features";
import GlobalCoverage from "./global-coverage";
import TimelineStepper from "./stepper";

export default function PrivacyPolicies() {
  return (
    <div className="sm:mt-17 sm:mb-24 my-5">
      <HeroSection
        title={"Privacy Policies"}
        description={`Lorem Ipsum is simply dummy text of the printing 
   and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
        banner={"/assets/png/privacy-hero.png"}
      />

      <div className="max-w-7xl mx-auto px-3 md:px-5 xl:px-8">
        <BestFeatures />
        <GlobalCoverage />
        <TimelineStepper/>
      </div>
    </div>
  );
}
