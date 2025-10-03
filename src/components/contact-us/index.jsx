import React from "react";
import HeroSection from "../common/hero-section";
import ContactForm from "./contact-form";
import ContactMap from "./contact-map";

export default function ContactUs() {
  return (
    <div className="sm:mt-17 sm:mb-24 my-5">
      <HeroSection
        title={"Contact Us"}
        description={`Lorem Ipsum is simply dummy text of the printing 
and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
        banner={"/assets/png/contact-hero.png"}
      />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-14 mt-10 md:mt-20 px-3 md:px-5 xl:px-8">
        <div className="sm:order-1 order-2">
          <ContactForm />
        </div>
        <div className="sm:order-2 order-1">
          <ContactMap />
        </div>
      </div>
    </div>
  );
}
