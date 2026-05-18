"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import { WorkExperience } from "@/data/WorkExperience";

const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="section-title mx-auto mb-12 text-center">Experience</h2>
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={50}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="h-[480px]"
        >
          {WorkExperience.map((item, index) => (
            <SwiperSlide key={index}>
              <Card className="flex min-h-[400px] flex-col bg-tertiary p-8 dark:bg-secondary/40">
                <CardHeader className="mb-10 shrink-0 p-0">
                  <div className="flex items-center gap-x-4">
                    <div
                      className="flex h-[70px] w-[70px] items-center justify-center rounded-full text-lg font-semibold text-white"
                      style={{ backgroundColor: item.logoColor }}
                    >
                      {item.initials}
                    </div>
                    <div className="flex flex-col">
                      <CardTitle>{item.company}</CardTitle>
                      <p>{item.role}</p>
                      <p>{item.time}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardDescription className="mb-4 flex-1 text-justify text-lg leading-relaxed text-muted-foreground">
                  {item.description}
                </CardDescription>
                <div className="mt-auto flex flex-wrap pt-2">
                  {item.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      className="mb-2 mr-2 text-sm font-medium uppercase"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;



