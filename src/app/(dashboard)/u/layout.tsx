import { UFooter } from "@/components/footer/u";
import { USidebar } from "@/components/sidebar/u";
import { UTopbar } from "@/components/topbar/u";
import { AuthProvider } from "@/layouts/auth/auth.provider";
import { PropsWithChildren } from "react";

export default function UserDashboardLayout({ children }: PropsWithChildren) {
  return (
    <AuthProvider>
      <div className="flex h-screen overflow-hidden">
        <USidebar />
        <div className="flex h-full w-full flex-col gap-8 overflow-y-auto px-12 py-6">
          <UTopbar />
          {children}
          <UFooter />
        </div>
      </div>
    </AuthProvider>
  );
}
