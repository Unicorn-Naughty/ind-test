"use client";
import React from "react";
import OurServicesCarousel from "./our-services-carousel";
import { ourServicesCards } from "@/app/constants/our-services-constants";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const OureServicesCarouselPagenation: React.FC<Props> = ({
  className,
}) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  React.useEffect(() => setCurrentSlide(currentSlide), [currentSlide]);

  return (
    <div className={className}>
      <ul className=" gap-2 items-center mb-6 flex md:hidden">
        {Array.from({ length: ourServicesCards.length }).map((_, i) => (
          <li key={i} className="">
            <button
              onClick={() => setCurrentSlide(i)}
              className={cn(
                "relative size-2 bg-[#CCCCCC] rounded-[50%] overflow-hidden",
                currentSlide === i && "w-10 rounded-[10px]"
              )}
            >
              <span
                className={cn(
                  "absolute top-0 left-0 h-full bg-black transition-all duration-300",
                  currentSlide === i ? "w-1/2" : "w-0"
                )}
              ></span>
            </button>
          </li>
        ))}
      </ul>
      <OurServicesCarousel
        setCurrentSlide={setCurrentSlide}
        currentSlide={currentSlide}
        ourServicesCards={ourServicesCards}
      />
    </div>
  );
};
