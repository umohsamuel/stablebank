"use client";

import { cn } from "@/utils/cn";
import { appRoutes, navLinks } from "@/utils/navigation";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className }: NavbarProps) {
  const pathname = usePathname();
  const bordered = false;

  return (
    <nav
      className={cn(
        "max-w-largest bg-brand-black mx-auto flex h-20 w-full items-center justify-between px-10",
        bordered &&
          "mt-[33px] rounded-[40px] border border-[#FEF8F10F] bg-[#000000CC]",
        className
      )}
    >
      <ul className="flex items-center gap-10">
        {navLinks.map((link) => (
          <li key={link.name} className="">
            <Link
              href={link.href}
              className={`text-lg ${pathname.startsWith(link.href) ? "text-brand-yellow font-bold" : "text-brand-white font-medium"}`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      <Image
        src={"/images/brand/logo-full.svg"}
        alt="StableBank logo"
        width={165}
        height={20}
        className="h-[20px] w-auto"
      />

      <div className="flex items-center">
        <Link
          href={appRoutes.auth.signIn}
          className="text-brand-white px-6 text-base font-semibold"
        >
          Sign-In
        </Link>
        <Link
          href={appRoutes.auth.signUp}
          className="text-brand-white bg-brand-purple flex h-10 items-center justify-center rounded-[40px] px-8 text-base font-semibold"
        >
          Get started
        </Link>
      </div>
    </nav>
  );
}
