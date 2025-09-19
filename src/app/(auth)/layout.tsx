import { Metadata } from "next";
import Image from "next/image";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "StableBank | Authentication",
  description:
    "Secure, scalable, and decentralized solutions for your digital assets—experience the future of financial freedom.",
  icons: {
    icon: "/images/brand/favicon.svg",
  },
};

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <div className="relative flex h-screen w-full items-center justify-center">
      <Image
        src={"/images/svg/signup-card-1.svg"}
        alt="img"
        width={420}
        height={160}
        className="absolute top-[15%] left-0 h-[160px] w-auto object-fill object-center"
      />
      <Image
        src={"/images/svg/signup-card-2.svg"}
        alt="img"
        width={420}
        height={160}
        className="absolute top-[75%] left-0 h-[200px] w-auto object-fill object-center"
      />
      <Image
        src={"/images/svg/signup-card-3.svg"}
        alt="img"
        width={420}
        height={160}
        className="absolute top-[15%] right-0 h-[200px] w-auto object-fill object-center"
      />
      <Image
        src={"/images/svg/signup-card-4.svg"}
        alt="img"
        width={420}
        height={160}
        className="absolute top-[75%] right-0 h-[250px] w-auto object-fill object-center"
      />

      <Image
        src={"/images/brand/full-logo-white.svg"}
        alt="stable bank logo"
        width={300}
        height={35}
        className="absolute top-14 left-1/2 h-[26px] w-auto -translate-x-1/2 transform"
      />
      <div className="flex w-full max-w-[460px] flex-col items-center justify-center pt-32">
        {children}
      </div>
    </div>
  );
}
