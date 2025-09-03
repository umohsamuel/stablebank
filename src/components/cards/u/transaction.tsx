import React from "react";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

type TransactionCardProps = {
  timestamp: string;
  from: {
    name: string;
    avatar: string;
    amount: string;
    bank: string;
  };
  to: {
    name: string;
    avatar: string;
    amount: string;
    token: string;
    bank: string;
  };
};

export default function TransactionCard({
  timestamp,
  from,
  to,
}: TransactionCardProps) {
  return (
    <Card className="w-full !gap-0 rounded-[10px] border-[1.5px] border-solid border-[#192134] bg-transparent !px-0 !py-0 shadow-md">
      <div className="flex items-center justify-between rounded-t-[10px] bg-[#192134] px-7 py-3 text-sm font-medium">
        <span className="text-brand-white">{timestamp}</span>
        <button className="text-brand-purple hover:underline">Routing</button>
      </div>

      <CardContent className="grid grid-cols-3 !px-4 !pt-6 !pb-9">
        <div className="flex items-center gap-3">
          <Image
            src={from.avatar}
            alt={from.name}
            width={48}
            height={48}
            className="h-12 w-12 rounded-[9px] object-cover"
          />
          <div>
            <p className="text-brand-purple text-lg font-semibold">
              {from.amount}
            </p>
            <p className="text-brand-white text-sm">{from.bank}</p>
          </div>
        </div>

        <div className="flex w-full items-center justify-center">
          <ArrowRight className="text-brand-white h-6 w-6" />
        </div>

        <div className="flex items-center gap-3">
          <Image
            src={to.avatar}
            alt={to.name}
            width={48}
            height={48}
            className="h-12 w-12 rounded-[9px] object-cover"
          />
          <div>
            <p className="text-lg font-semibold text-[#14AE5C]">
              {to.amount} {to.token}
            </p>
            <p className="text-brand-white text-sm">{to.bank}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
