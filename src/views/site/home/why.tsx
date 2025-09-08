import { SectionCard } from "@/components/cards";
import Image from "next/image";
import React from "react";

export default function Why() {
  return (
    <div className="max-w-largest mx-auto w-full pt-5 pb-20">
      <div className="grid grid-cols-2">
        <div>
          <SectionCard title="WHY STABLEBANK" />
        </div>
        <div className="flex flex-col gap-5 text-[32px] font-normal">
          <p>Not everyone is ready for change. But you are.</p>
          <p>
            You&lsquo;re part of a new generation that earns in dollars, spends
            in euros, and saves in rupees. Traditional banking is stuck in the
            past, making you pay for living in the future. That&lsquo;s why we
            built StableBank –because those who take control of their financial
            destiny deserve more than what traditional systems offer.
          </p>
          <p>More freedom. More trust. More rewards.</p>

          <Image
            src={"/images/brand/gradient-logo-favicon.svg"}
            alt="logo"
            width={550}
            height={366}
            className="h-[366px] w-fit"
          />
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div>
          <p className="text-brand-white text-[32px] font-normal">
            Zero Bureaucracy,{" "}
            <span className="font-semibold italic">Just You!</span>
          </p>
        </div>
        <div className="flex flex-col gap-5 text-[32px] font-normal">
          <p>
            Our goal is to simplify finances for global citizens. We do this by
            making it easy to save, send, and spend stablecoins anywhere in the
            world. Download our app to see for yourself.
          </p>
        </div>
      </div>
    </div>
  );
}
