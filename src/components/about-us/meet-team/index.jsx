import React from "react";
import MeetCard from "./meet-card";

const list = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

export default function MeetTeam() {
  return (
    <div className="mt-10 sm:mt-20">
      <div className="relative max-w-xl mx-auto">
        <div className="absolute top-0 left-0 glow-blue"></div>
        <p className="text-sm font-semibold text-[#40CEEC] quick_sand text-center">
          Meet the Team
        </p>

        <p className="text-2xl sm:text-3xl font-semibold text-[#101828] quick_sand pt-3 text-center">
          Meet Our Dedicated Team of Educators and innovators.
        </p>
      </div>

      <div className="relative sm:max-w-7xl  max-w-xl mx-auto mt-10">
        <div className="grid  gap-4 grid-cols-2 lg:grid-cols-4 xl:h-[615px] sm:h-[1000px] h-[800px]">
          {/* Responsive grid layout: 1 column on mobile, 2 columns on tablets, 4 columns on laptops */}
          <div className="absolute bottom-0 -left-10 glow-blue"></div>
          <div className="absolute bottom-20 -right-10 glow-blue"></div>
          {list.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <MeetCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
