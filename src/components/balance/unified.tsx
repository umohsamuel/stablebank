import { ArrowDownLeft, ArrowUpRight, RefreshCcw } from "lucide-react";

export default function UnifiedBalance() {
  return (
    <div className="w-full rounded-[20px] bg-[#0E121C] px-6 py-8">
      <h2 className="flex items-center gap-2 text-xl font-medium">
        <span>Unified Balance</span>
        <RefreshCcw size={14} color="#4649D6" />
      </h2>

      <div className="mt-2.5 flex items-center gap-3">
        <p className="text-5xl font-bold">$0.00</p>
        <div className="bg-brand-purple flex aspect-square h-9 w-9 shrink-0 items-center justify-center rounded-full">
          <ArrowUpRight />
        </div>
        <div className="bg-brand-purple flex aspect-square h-9 w-9 shrink-0 items-center justify-center rounded-full">
          <ArrowDownLeft />
        </div>
      </div>

      <p className="text-brand-yellow mt-2 text-base font-medium">
        DeFi Balance: $0.00
      </p>
    </div>
  );
}
