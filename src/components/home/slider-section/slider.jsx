import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { BsArrowLeftShort } from "react-icons/bs";
import clsx from "clsx";

const CORE = [
  "/assets/png/slider-2.png",
  "/assets/png/slider-2.png",
  "/assets/png/slider-2.png",
  "/assets/png/slider-2.png",
  "/assets/png/slider-2.png",
  "/assets/png/slider-2.png",
  "/assets/png/slider-2.png",
];

/* clones for head & tail */
const SLIDES = [
  CORE[CORE.length - 1], // clone of last
  ...CORE,
  CORE[0], // clone of first
];

const CARD_W = 375;
const GAP = 20;
const SLIDE_W = CARD_W + GAP;

export default function CardSlider() {
  const [index, setIndex] = useState(1); // 1 == first REAL slide
  const [isAnimating, setIsAnimating] = useState(false);
  const trackRef = useRef(null);

  /* helpers */
  const next = () => jumpTo(index + 1);
  const prev = () => jumpTo(index - 1);

  function jumpTo(i) {
    setIndex(i);
    setIsAnimating(true);
  }

  /* remove transition for the instant jump after hitting a clone */
  useEffect(() => {
    const handleEnd = () => {
      setIsAnimating(false);
      // if we’re on the head‑clone (0)             → reset to last REAL
      if (index === 0) setIndex(CORE.length);
      // if we’re on the tail‑clone (len‑1)        → reset to first REAL
      if (index === CORE.length + 1) setIndex(1);
    };

    const track = trackRef.current;
    track?.addEventListener("transitionend", handleEnd);
    return () => track?.removeEventListener("transitionend", handleEnd);
  }, [index]);

  /* derive translateX and active‑card */
  const offset = -(index * SLIDE_W);
  const active = (index - 1 + CORE.length) % CORE.length; // 0‑based into CORE

  return (
    <div className="hidden md:block flex-1 h-[560px] overflow-hidden relative select-none">
      {/* track */}
      <div
        ref={trackRef}
        className={clsx(
          "flex gap-5",
          isAnimating && "transition-transform duration-500 ease-in-out"
        )}
        style={{ transform: `translateX(${offset}px)` }}
      >
        {SLIDES.map((src, i) => (
          <Image
            key={i + src}
            src={src}
            alt=""
            width={375}
            height={i === index ? 560 : 450}
            className={clsx(
              "w-full rounded-[24px] transition-all duration-300",
              i === index ? "h-[560px]" : "h-[450px]"
            )}
            priority={i === index}
          />
        ))}
      </div>

      {/* dots & arrows */}
      <div className="absolute bottom-10 left-[525px] flex items-center gap-25">
        <div className="flex items-center gap-2">
          {CORE.map((_, i) => (
            <button
              key={i}
              onClick={() => jumpTo(i + 1)}
              className={clsx(
                "w-3 h-3 rounded-full cursor-pointer",
                i === active ? "bg-[#40CEEC]" : "bg-[#C7C7C7]"
              )}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            className="w-[60px] h-9 flex items-center justify-center bg-[#40CEEC] rounded-full hover:scale-105 transition text-white cursor-pointer"
          >
            <BsArrowLeftShort size={35} className="-rotate-45" />
          </button>
          <button
            onClick={next}
            className="w-[60px] h-9 flex items-center justify-center bg-[#40CEEC] rounded-full hover:scale-105 transition text-white cursor-pointer"
          >
            <BsArrowLeftShort size={35} className="rotate-135" />
          </button>
        </div>
      </div>
    </div>
  );
}
