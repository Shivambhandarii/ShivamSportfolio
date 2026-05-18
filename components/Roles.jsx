"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

const Roles = () => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: "true,",
      }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
        WheelGesturesPlugin(),
      ]}
    >
      <CarouselContent>
        <CarouselItem>Go-To-Market & Growth</CarouselItem>
        <CarouselItem>Product Strategy</CarouselItem>
        <CarouselItem>Product Manager</CarouselItem>
        <CarouselItem>Product-Led Growth</CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default Roles;
