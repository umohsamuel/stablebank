import { Button } from "@/components/ui/button";
import { appRoutes } from "@/lib/navigation";
import { MoveRight, Sparkles } from "lucide-react";
import { redirect } from "next/navigation";

export default function Login() {
  async function handleSignIn() {
    "use server";
    redirect(appRoutes.dashboard.user.home);
  }

  return (
    <div className="flex flex-col gap-7">
      <div className="flex flex-col gap-3">
        <div className="flex w-fit items-center gap-3.5 rounded-full bg-[#0F0F0F] py-2 pr-16 pl-2.5 text-base font-medium shadow-2xl shadow-[#171E2E]">
          <Sparkles size={18} />
          <span>Sign-in to your account</span>
        </div>
        <h1 className="text-4xl font-semibold">
          Web3’s Super-wallet,{" "}
          <span className="text-brand-yellow">Secure and Easy to use.</span>
        </h1>
      </div>

      <div className="flex flex-col gap-6">
        <div className="relative h-[52px] rounded-[8px] bg-[#0F0F0F] text-base font-medium text-white placeholder:text-white/60">
          <input
            type="email"
            placeholder="Email Address"
            className="hide-autofill h-full w-full rounded-[8px] border-0 bg-inherit px-4 ring-0 outline-0"
          />
          <MoveRight
            size={24}
            className="absolute top-1/2 right-2 -translate-1/2 transform"
            color="#FFFFFF52"
          />
        </div>
        <div className="relative h-[52px] rounded-[8px] bg-[#0F0F0F] text-base font-medium text-white placeholder:text-white/60">
          <input
            type="password"
            placeholder="Password"
            className="hide-autofill h-full w-full rounded-[8px] border-0 bg-inherit px-4 ring-0 outline-0"
          />
          <MoveRight
            size={24}
            className="absolute top-1/2 right-2 -translate-1/2 transform"
            color="#FFFFFF52"
          />
        </div>
      </div>

      <Button
        onClick={handleSignIn}
        className="text-brand-white bg-brand-purple flex h-12 cursor-pointer items-center justify-center rounded-[40px] px-8 text-base font-semibold"
      >
        Sign-in
      </Button>
    </div>
  );
}
