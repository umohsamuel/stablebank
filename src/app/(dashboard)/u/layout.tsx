import { UFooter } from "@/components/footer/u";
import { USidebar } from "@/components/sidebar/u";
import { PropsWithChildren } from "react";

export default function UserDashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex h-screen overflow-hidden">
      <USidebar />
      <div className="flex h-full w-full flex-col gap-9 overflow-y-auto px-12 py-6">
        {children}
        <UFooter />
      </div>
    </div>
  );
}
