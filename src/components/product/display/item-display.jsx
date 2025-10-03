import Image from "next/image";
import React, { useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import { GoArrowUp } from "react-icons/go";
import ReactPlayer from "react-player";

export default function ItemDisplay({
  product,
  selectedImage,
  setSelectedImage,
}) {
  const scrollRef = useRef(null);

  const handleClick = (image) => {
    setSelectedImage(image);
  };

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = 100;
      container.scrollBy({
        top: direction === "up" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative flex gap-5">
      <div className="absolute top-1/2 -left-10 -translate-y-1/2 glow-blue"></div>
      {product?.media.length > 0 ? (
        <>
          <div
            onClick={() => scroll("up")}
            className="absolute -top-0 left-1 w-5 h-5 md:w-9 md:h-9 flex items-center justify-center rounded-full bg-[#40CEEC] z-50 cursor-pointer"
          >
            <GoArrowUp
              color="#fff"
              className="w-3 h-3 md:w-[15px] md:h-[15px]"
            />
          </div>
          <div
            ref={scrollRef}
            className="w-10 md:w-[72px] overflow-y-auto flex flex-col gap-3 md:gap-5 no-scrollbar h-[361px] md:h-[660px] self-center"
          >
            {product?.media.length > 0 ? (
              product?.media?.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleClick(item)}
                  className={`w-10 h-10 md:w-[72px] md:h-[72px] flex items-center justify-center !rounded-lg cursor-pointer p-2 z-10 ${
                    item.url === selectedImage?.url
                      ? "border-[1.5px] border-transparent gradient-border-text !rounded-lg"
                      : "border"
                  }`}
                >
                  {item.type === "image" ? (
                    <img
                      src={item.url ?? "/assets/jpg/no-image.jpg"}
                      alt=""
                      width={39}
                      height={72}
                      className="w-[30px] h-[30px] md:w-[50px] md:h-[60px] object-cover rounded-md"
                    />
                  ) : (
                    <div className="relative w-[30px] h-[30px] md:w-[50px] md:h-[60px]">
                      {/* If your API provides a thumbnail */}
                      <img
                        src="/assets/png/placeholder.png"
                        alt="video thumbnail"
                        fill
                        className="object-cover rounded-md w-full h-full  "
                      />
                      {/* Play icon overlay */}
                      <FaPlay className="absolute inset-0 m-auto text-white text-xs md:text-sm bg-black/50 rounded-full p-1" />
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p>No media</p>
            )}
          </div>

          <div
            onClick={() => scroll("down")}
            className="absolute bottom-0 left-1 w-5 h-5  md:w-9 md:h-9 flex items-center justify-center rounded-full bg-[#40CEEC] z-50 cursor-pointer"
          >
            <GoArrowUp
              color="#fff"
              className="w-3 h-3 md:w-[15px] md:h-[15px] rotate-180"
            />
          </div>

          <div className="flex-1 flex items-center justify-center border-[3.75px] border-[#40CEEC] rounded-2xl relative">
            {selectedImage?.type === "image" && (
              <img
                src={selectedImage.url ?? "/assets/jpg/no-image.jpg"}
                alt=""
                width={400}
                height={400}
                className="w-full h-full object-cover rounded-2xl"
              />
            )}

            {selectedImage?.type === "video" && (
              <div className="absolute inset-0">
                <ReactPlayer
                  src={selectedImage.url ?? "/assets/png/placeholder.png"}
                  controls={true}
                  width="100%"
                  height="100%"
                  className="!absolute !top-0 !left-0 !w-full !h-full object-cover rounded-2xl"
                  style={{ objectFit: "cover" }}
                />
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="flex-1 flex items-center justify-center border-[3.75px] border-[#40CEEC] rounded-2xl relative">
          <img
            src="/assets/jpg/no-image.jpg"
            alt=""
            width={400}
            height={400}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      )}
    </div>
  );
}
