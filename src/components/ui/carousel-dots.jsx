import React from "react";

export default function CarouselDots({ count, current, handleDotClick }) {
  return (
    <div className="flex justify-center gap-2">
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          className={`w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full transition-all ${
            current === index ? "bg-[#40CEEC] w-3.5 md:w-5" : "bg-gray-300"
          }`}
          onClick={() => handleDotClick(index)}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
}
