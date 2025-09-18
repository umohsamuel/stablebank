"use client";

import React, { useEffect, useState, ReactNode } from "react";

import { usePathname, useRouter } from "next/navigation";
import { appRoutes } from "@/lib/navigation";
import { LoaderCircle } from "lucide-react";
import { clearToken, getToken } from "@/composables/token";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();
  const pathname = usePathname();

  const logout = (): void => {
    clearToken();
    setToken(null);

    if (pathname !== appRoutes.auth.signIn) {
      router.replace(appRoutes.auth.signIn);
    }
  };

  function handleLogout() {
    requestAnimationFrame(() => {
      logout();
    });
  }

  useEffect(() => {
    const { token } = getToken();
    if (token) {
      setToken(token);
    }
    setLoading(false);

    window.addEventListener("auth:logout", handleLogout);
    return () => window.removeEventListener("auth:logout", handleLogout);
  }, []);

  const isAuthenticated = !!token;

  if (loading) {
    return (
      <div className="flex h-screen w-full animate-pulse items-center justify-center">
        <LoaderCircle size={32} color="#4649D6" className="animate-spin" />
      </div>
    );
  }

  if (!loading && !isAuthenticated) {
    handleLogout();
    return null;
  }

  return <div>{children}</div>;
};
