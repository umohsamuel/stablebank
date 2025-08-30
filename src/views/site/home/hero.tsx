import { Button } from "@/components/ui/button";
import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import TextMarquee from "@/components/marquee";

export default function HeroHome() {
  return (
    <div className="py-20">
      <div className="mx-auto flex w-fit items-center gap-2 rounded-3xl border border-solid border-white/50 px-3 py-2.5 font-sans text-sm font-normal">
        <div className="aspect-square h-[9px] w-[9px] rounded-full bg-white" />
        <span>Decentralised </span>
      </div>

      <h1 className="text-center text-7xl font-extrabold text-[#E5E5E5]">
        All Stables, One Wallet
      </h1>

      <p className="text-brand-white mx-auto mt-5 max-w-[480px] text-center text-[22px] font-normal">
        Secure, scalable, and decentralized solutions for your digital
        assets—experience the future of financial freedom.
      </p>

      <div className="mt-[46px] flex items-center justify-center">
        <Button className="text-brand-white h-[55px] px-[45px] text-xl font-extrabold">
          Start Banking
        </Button>
        <Button className="ml-[-4px] size-7 h-[55px] !px-8">
          <ArrowRight />
        </Button>
      </div>

      <div className="relative mx-auto flex h-fit justify-center">
        <Image
          src={"/images/svg/hero-home-phone.svg"}
          alt="phone"
          width={555}
          height={476}
          priority={true}
          draggable={false}
          className="relative z-[5]"
        />
        <p className="via-brand-yellow/10 absolute left-4 bg-gradient-to-r from-transparent via-10% to-transparent bg-clip-text text-[350px] font-medium text-transparent">
          StableBank
        </p>
      </div>

      <TextMarquee />
    </div>
  );
}
