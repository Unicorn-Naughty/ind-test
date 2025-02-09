"use client";
import React from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../../ui/carousel";
import { OurServiceCard } from "@/app/constants/our-services-constants";
import { cn } from "@/lib/utils";
import { OurServicesCard } from "./our-services-card";

interface Props {
  className?: string;
  currentSlide: number;
  ourServicesCards: OurServiceCard[];
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>;
}

export const OurServicesCarousel: React.FC<Props> = ({
  ourServicesCards,
  currentSlide,
  setCurrentSlide,
}) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(currentSlide);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(currentSlide);
    api.scrollTo(currentSlide);

    api.on("select", () => {
      const newSlide = api.selectedScrollSnap();
      setCurrent(newSlide);
      setCurrentSlide(newSlide);
    });
  }, [api, currentSlide, setCurrentSlide]);

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {ourServicesCards.map((item, index) => (
          <CarouselItem
            key={index}
            className={cn("sm:basis-1/2 lg:basis-1/3  xl:basis-1/4")}
          >
            <OurServicesCard
              className={cn(
                "transition-shadow duration-300 ease-in-out max-sm:mb-10",
                current === index && "drop-shadow-lg"
              )}
              item={item}
            />
            <p className="text-balance text-[14px] leading-5 text-[#151515]">
              {item.text}
            </p>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default OurServicesCarousel;
