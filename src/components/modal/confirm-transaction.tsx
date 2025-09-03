import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { redirect, RedirectType } from "next/navigation";
import { appRoutes } from "@/lib/navigation";
import TransactionCard from "../cards/u/transaction";
import { topUsers } from "@/lib/dummy";

export default function UConfirmTransaction() {
  const handleLogout = async () => {
    "use server";
    redirect(appRoutes.auth.signIn, RedirectType.replace);
  };

  return (
    <div>
      <DialogContent className="w-full !max-w-[660px] rounded-[20px] border-none bg-[#0E121C] px-[18px] py-5">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-5">
            <span className="text-brand-white text-base font-semibold">
              Confirm Transaction
            </span>
          </DialogTitle>

          <TransactionCard
            timestamp="2022.22.03,10;22:30"
            from={{
              name: topUsers[0].username,
              avatar: topUsers[0].avatar,
              amount: "$500",
              bank: topUsers[0].username,
            }}
            to={{
              name: topUsers[2].username,
              avatar: topUsers[2].avatar,
              amount: "+131.1100",
              token: "qmatic",
              bank: topUsers[2].username,
            }}
          />
        </DialogHeader>

        <DialogFooter>
          <DialogClose asChild onClick={handleLogout}>
            <Button
              type="button"
              className="text-brand-white bg-brand-purple flex h-12 w-full cursor-pointer items-center justify-center rounded-[10px] px-8 text-[22px] font-semibold"
            >
              Transfer
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </div>
  );
}
