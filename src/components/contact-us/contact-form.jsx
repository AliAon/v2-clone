import React from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

export default function ContactForm() {
  return (
    <div className="relative border-[2.25px] border-[#40CEEC] rounded-[30px] shadow-[0px_3px_15px_3.75px_#40CEEC80] bg-white z-10 h-fit">
      <div className="absolute top-10 -left-10 glow-blue -z-10"></div>
      <div className="absolute bottom-0 -left-10 glow-blue -z-10"></div>
      <div className="bg-white rounded-[30px] z-50 px-5 sm:px-8 pt-5 sm:pt-8 pb-5 sm:pb-6">
        <div className="flex items-center gap-3">
          <p className="text-base sm:text-lg font-bold quick_sand bg-gradient-to-r from-black to-[#40CEEC] text-transparent bg-clip-text">
            Drop Us Your Message
          </p>
        </div>

        <form className="quick_sand mt-5 sm:mt-8">
          <div className="flex gap-5 sm:gap-10">
            <div className="w-full">
              <p className="text-sm sm:text-base font-bold text-black mb-1.5">Name:</p>
              <Input
                placeholder="Your Name"
                className="h-10 rounded-full border-[#66D8F080] text-sm font-medium placeholder:text-[#7E7E7E] shadow-[0px_3px_7.5px_0px_#40CEEC1A]"
              />
            </div>
            <div className="w-full">
              <p className="text-sm sm:text-base font-bold text-black mb-1.5">Email:</p>
              <Input
                placeholder="Your Email"
                className="h-10 rounded-full border-[#66D8F080] text-sm font-medium placeholder:text-[#7E7E7E] shadow-[0px_3px_7.5px_0px_#40CEEC1A]"
              />
            </div>
          </div>

          <div className="w-full mt-5">
            <p className="text-sm sm:text-base font-bold text-black mb-1.5">Subject:</p>
            <Input
              placeholder="Subject"
              className="h-10 rounded-full border-[#66D8F080] text-sm font-medium placeholder:text-[#7E7E7E] shadow-[0px_3px_7.5px_0px_#40CEEC1A]"
            />
          </div>

          <div className="w-full mt-5">
            <p className="text-sm sm:text-base font-bold text-black mb-1.5">Message:</p>
            <Textarea
              placeholder="Message"
              className="h-[340px] rounded-2xl resize-none border-[#66D8F080] text-sm font-medium placeholder:text-[#7E7E7E] shadow-[0px_3px_7.5px_0px_#40CEEC1A]"
            />
          </div>

          <div className="flex justify-end">
            <Button
              variant={"outline"}
              className="w-[142px] h-10 text-xs text-[#40CEEC] border-[#40CEEC] rounded-full font-bold mt-5"
            >
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
