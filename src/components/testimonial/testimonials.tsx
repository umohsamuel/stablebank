import React from "react";
import { SectionCard } from "../cards";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export default function Testimonials() {
  return (
    <div className="flex flex-col gap-[72px]">
      <div className="mx-auto flex w-full max-w-[544px] flex-col items-center gap-5 text-center">
        <SectionCard title="Testimonial" />
        <h1 className="text-[50px] font-bold">
          Trusted by <span className="text-brand-yellow">Innovators</span>
        </h1>
        <p className="text-xl">
          Secure your digital assets with the peace of mind that comes from
          knowing you are protected by the best technology in the blockchain
          space.
        </p>
      </div>

      <div className="flex w-full flex-col gap-5">
        <InfiniteMovingCards items={dummyData} speed="slow" />
        <InfiniteMovingCards items={dummyData} speed="slow" direction="right" />
      </div>
    </div>
  );
}

const dummyData = [
  {
    name: "Guy Hawkins",
    quote:
      "“AI streamlines international client coordination by scheduling emails for optimal inbox timing.”",
    title: "Co founder",
    image: "/images/placeholder/dummy-profile-img.png",
  },
  {
    name: "Guy Hawkins",
    quote:
      "“AI streamlines international client coordination by scheduling emails for optimal inbox timing.”",
    title: "Co founder",
    image: "/images/placeholder/dummy-profile-img.png",
  },
  {
    name: "Guy Hawkins",
    quote:
      "“AI streamlines international client coordination by scheduling emails for optimal inbox timing.”",
    title: "Co founder",
    image: "/images/placeholder/dummy-profile-img.png",
  },
  {
    name: "Guy Hawkins",
    quote:
      "“AI streamlines international client coordination by scheduling emails for optimal inbox timing.”",
    title: "Co founder",
    image: "/images/placeholder/dummy-profile-img.png",
  },
  {
    name: "Guy Hawkins",
    quote:
      "“AI streamlines international client coordination by scheduling emails for optimal inbox timing.”",
    title: "Co founder",
    image: "/images/placeholder/dummy-profile-img.png",
  },
];
