"use client";

import { Button } from "@/components/ui/button";
import { appRoutes } from "@/lib/navigation";
import { passwordSchema } from "@/schema/password";
import axios, { AxiosResponse } from "axios";
import { MoveRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

interface SignupResponse {
  user: {
    id: string;
    email: string;
  };
  accessToken: string;
  refreshToken: string;
}

export default function Signup() {
  const router = useRouter();
  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
    loading: false,
  });

  function updateSignupData<K extends keyof typeof signupData>(
    field: K,
    value: (typeof signupData)[K]
  ) {
    setSignupData((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSignup(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    updateSignupData("loading", true);

    if (!signupData.email || !signupData.password) {
      toast.error("Email and password are required.");
      signupData.loading = false;
      return;
    }

    const validPassword = passwordSchema.safeParse(signupData.password);

    if (!validPassword.success) {
      toast.error(validPassword.error.issues.map((e) => e.message).join(" "));
      signupData.loading = false;
      return;
    }

    try {
      const res: AxiosResponse<SignupResponse> = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
        {
          email: signupData.email,
          password: validPassword.data,
        }
      );

      if (res.status >= 200 && res.status < 300) {
        toast.success("Account created successfully!");

        router.push(appRoutes.auth.signIn);
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const errMsg = error.response.data.message;
        console.error("Signup error:", error);
        toast.error(errMsg || "Signup failed. Please try again.");
      }
    } finally {
      updateSignupData("loading", false);
    }
  }

  return (
    <form onSubmit={handleSignup} className="flex flex-col gap-7">
      <div className="flex flex-col gap-3">
        <div className="flex w-fit items-center gap-3.5 rounded-full bg-[#0F0F0F] py-2 pr-16 pl-2.5 text-base font-medium shadow-2xl shadow-[#171E2E]">
          <Sparkles size={18} />
          <span>Create Account</span>
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
            name="email"
            value={signupData.email}
            onChange={(e) => updateSignupData("email", e.target.value)}
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
            name="password"
            value={signupData.password}
            onChange={(e) => updateSignupData("password", e.target.value)}
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

      <div className="flex flex-col gap-1">
        <Button
          type="submit"
          disabled={signupData.loading}
          className="text-brand-white bg-brand-purple flex h-12 cursor-pointer items-center justify-center rounded-[40px] px-8 text-base font-semibold"
        >
          {signupData.loading ? "Creating..." : "Create Account"}
        </Button>

        <p className="flex justify-end gap-2">
          Don't have an account?{" "}
          <Link
            href={appRoutes.auth.signUp}
            className="text-brand-purple font-bold"
          >
            Sign up
          </Link>
        </p>
      </div>
    </form>
  );
}
