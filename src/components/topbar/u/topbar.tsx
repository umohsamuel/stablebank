import LogoutModal from "@/components/modal/logout";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { CircleCheck, Copy, Power, UserRound } from "lucide-react";

export default function UTopbar() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-[18px]">
        <div className="text-brand-purple flex w-fit items-center gap-2 rounded-full bg-[#0E121C] px-4 py-2">
          <CircleCheck size={17} />
          <div className="flex flex-col">
            <div className="flex items-center gap-0.5 text-sm font-medium">
              <UserRound size={12} />
              <span>Personal</span>
            </div>
            <div className="flex items-center gap-0.5 text-white/60">
              <p className="text-base font-medium">0x0444...5784</p>
              <Copy size={8} />
            </div>
          </div>
        </div>
        <div className="text-brand-yellow flex w-fit items-center gap-2 rounded-full bg-[#0E121C] px-4 py-2">
          <CircleCheck size={17} />
          <div className="flex flex-col">
            <div className="flex items-center gap-0.5 text-sm font-medium">
              <UserRound size={12} />
              <span>Multisig</span>
            </div>
            <div className="flex items-center gap-0.5 text-white/60">
              <p className="text-base font-medium">0x0444...5784</p>
              <Copy size={8} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-7">
        <div className="flex w-fit items-center gap-2 rounded-full bg-[#0E121C] px-4 py-2 font-medium">
          <span className="text-base font-medium">Pending</span>
          <span className="flex aspect-square h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#53535335] text-sm">
            2
          </span>
        </div>
        <Dialog>
          <DialogTrigger className="cursor-pointer">
            <div className="flex h-[37px] w-fit items-center gap-2 rounded-full bg-[#0E121C] px-4 py-2 font-medium text-[#FE0420]">
              <Power size={14} />
            </div>
          </DialogTrigger>
          <LogoutModal />
        </Dialog>
      </div>
    </div>
  );
}
