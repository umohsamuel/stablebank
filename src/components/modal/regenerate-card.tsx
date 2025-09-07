import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";

export default function RegenerateCardModal() {
  return (
    <DialogContent className="w-full !max-w-[400px] rounded-[20px] border-none bg-[#0E121C] px-[18px] py-5">
      <DialogHeader>
        <DialogTitle className="flex flex-col gap-3 font-medium">
          <h2 className="text-base">Regenerate Card Details</h2>
          <p className="text-xs text-white/60">
            This will gerate new card numbers and security codes. Update any
            saved payment methods
          </p>
        </DialogTitle>
      </DialogHeader>

      <DialogFooter className="grid grid-cols-2 gap-7">
        <DialogClose asChild>
          <Button
            type="button"
            className="rounded-[20px] bg-[#1F2937] py-3 text-base font-medium"
          >
            Cancel
          </Button>
        </DialogClose>

        <DialogClose asChild>
          <Button
            type="button"
            className="bg-brand-purple rounded-[20px] py-3 text-base font-medium"
          >
            Regenerate
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
}
