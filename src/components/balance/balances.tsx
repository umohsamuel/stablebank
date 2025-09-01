"use client";

import { CircleQuestionMark, Copy } from "lucide-react";
import NetworkSelector from "../selector/network";
import Image from "next/image";
import { copyToClipboard } from "@/utils/copy-to-clipboard";

export default function Balances() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8 text-base font-medium text-white/60">
          <p className="flex items-center gap-1.5">
            <span>Balance (0)</span>
            <CircleQuestionMark size={14} color="#4649D6" />
          </p>
          <p className="flex items-center gap-2">
            <span>Hide 0 balance</span>{" "}
            <input
              type="checkbox"
              name="hide-balance"
              id="hide-balance"
              size={14}
            />
          </p>
        </div>

        <NetworkSelector />
      </div>

      <div className="flex w-full items-center justify-center gap-6 rounded-[20px] bg-[#0E121C] px-6 py-20">
        <Image
          src={"/images/placeholder/qr-code.svg"}
          alt="qr code"
          width={160}
          height={160}
        />
        <div className="flex flex-col gap-2.5">
          <h2 className="text-2xl font-semibold">
            Add tokens to your{" "}
            <span className="font-normal text-[#E9F2A3] italic">
              StableBank
            </span>{" "}
            Wallet
          </h2>

          <div
            onClick={() => {
              copyToClipboard("mfoniso@stablebank");
            }}
            className="flex cursor-pointer items-center gap-4 rounded-[20px] bg-[#131926] px-4 py-2 text-sm font-medium text-white/60"
          >
            <span>mfoniso@stablebank</span>
            <Copy size={8} color="#FFFFFF99" />
          </div>

          <NetworkSelector />
        </div>
      </div>
    </div>
  );
}
