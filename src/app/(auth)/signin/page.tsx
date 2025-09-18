"use client";

import { Button } from "@/components/ui/button";
import { setToken } from "@/composables/token";
import { appRoutes } from "@/lib/navigation";
import { passwordSchema } from "@/schema/password";
import axios, { AxiosResponse } from "axios";
import { MoveRight, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

export default function Login() {
  const router = useRouter();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    loading: false,
  });

  function updateLoginData<K extends keyof typeof loginData>(
    field: K,
    value: (typeof loginData)[K]
  ) {
    setLoginData((prev) => ({ ...prev, [field]: value }));
  }

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    updateLoginData("loading", true);

    if (!loginData.email || !loginData.password) {
      toast.error("Email and password are required.");
      loginData.loading = false;
      return;
    }

    const validPassword = passwordSchema.safeParse(loginData.password);

    if (!validPassword.success) {
      toast.error(validPassword.error.issues.map((e) => e.message).join(" "));
      loginData.loading = false;
      return;
    }

    try {
      const res: AxiosResponse<LoginResponse> = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
        {
          email: loginData.email,
          password: validPassword.data,
        }
      );

      if (res.status >= 200 && res.status < 300) {
        toast.success("Login successful!");
        setToken(res.data.accessToken, res.data.refreshToken);
        requestAnimationFrame(() => {
          router.push(appRoutes.auth.bankTag);
        });
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const errMsg = error.response.data.message;
        console.error("Login error:", error);
        toast.error(errMsg || "Login failed. Please try again.");
      }
    } finally {
      updateLoginData("loading", false);
    }
  }

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-7">
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
            name="email"
            value={loginData.email}
            onChange={(e) => updateLoginData("email", e.target.value)}
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
            value={loginData.password}
            onChange={(e) => updateLoginData("password", e.target.value)}
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
        type="submit"
        disabled={loginData.loading}
        className="text-brand-white bg-brand-purple flex h-12 cursor-pointer items-center justify-center rounded-[40px] px-8 text-base font-semibold"
      >
        {loginData.loading ? "Signing in..." : "Sign-in"}
      </Button>
    </form>
  );
}
