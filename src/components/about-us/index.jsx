import React from "react";
import HeroSection from "../common/hero-section";
import OurDreams from "./our-dreams";
import OurVision from "./our-vision";
import OurTeam from "./our-team";
import MeetTeam from "./meet-team";

export default function AboutUs() {
  return (
    <div className="sm:mt-17 sm:mb-24 my-5">
      <HeroSection
        title={"About Us"}
        description={`Lorem Ipsum is simply dummy text of the printing 
and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
        banner={"/assets/png/about-hero.png"}
      />

     <div className="max-w-7xl mx-auto px-3 md:px-5 xl:px-8">
        <OurDreams />
       <OurVision />
         <MeetTeam />
         <OurTeam />
      </div>
    </div>
  );
}
