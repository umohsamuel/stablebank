import { Button } from "@/components/ui/button";
import { MoveRight, Sparkles } from "lucide-react";

export default function CreateBankTag() {
  return (
    <div className="flex flex-col gap-7">
      <div className="flex flex-col gap-3">
        <div className="flex w-fit items-center gap-3.5 rounded-full bg-[#0F0F0F] py-2 pr-16 pl-2.5 text-base font-medium shadow-2xl shadow-[#171E2E]">
          <Sparkles size={18} />
          <span>Create your Unique Banktag</span>
        </div>
        <h1 className="text-4xl font-semibold">
          Select and reserve a{" "}
          <span className="text-brand-yellow">username.</span>
        </h1>
      </div>

      <div className="flex flex-col gap-6">
        <div className="relative h-[52px] rounded-[8px] bg-[#0F0F0F] text-base font-medium text-white placeholder:text-white/60">
          <input
            type="text"
            placeholder="Input desired banktag"
            className="hide-autofill h-full w-full rounded-[8px] border-0 bg-inherit px-4 ring-0 outline-0"
          />
          <MoveRight
            size={24}
            className="absolute top-1/2 right-2 -translate-1/2 transform"
            color="#FFFFFF52"
          />
        </div>
      </div>

      <Button className="text-brand-white bg-brand-purple flex h-12 cursor-pointer items-center justify-center rounded-[40px] px-8 text-base font-semibold">
        Create Banktag{" "}
      </Button>
    </div>
  );
}
