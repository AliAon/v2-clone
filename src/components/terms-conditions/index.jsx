import React from "react";
import HeroSection from "../common/hero-section";
import WonportTerms from "./wonport-terms";
import PricingMethods from "./pricing-methods";
import TemporaryApi from "./temporary-api";
import LicenseAccess from "./license-access";

export default function TermConditions() {
  return (
    <div className="sm:mt-17 sm:mb-24 my-5">
      <HeroSection
        title={"Terms & Conditions"}
        description={`Lorem Ipsum is simply dummy text of the printing 
    and typesetting industry.`}
        banner={"/assets/png/terms-hero.png"}
      />

      <div className="max-w-7xl mx-auto px-3 md:px-5 xl:px-8">
        <WonportTerms />
        <PricingMethods />
        <TemporaryApi />
        <LicenseAccess />
      </div>
    </div>
  );
}
