import { Sidebar } from "@/components/Sidebar";
import { UserNav } from "@/components/UserNav";
import { ThemeToggle } from "@/components/ThemeToggle";
import { MobileNav } from "@/components/MobileNav";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-screen overflow-hidden bg-background">
      <div className="flex h-full">
        <div className="hidden md:flex w-72 border-r">
          <Sidebar />
        </div>
        <div className="flex-1 flex flex-col">
          <header className="border-b">
            <div className="flex h-16 items-center px-4 gap-4">
              <MobileNav />
              <div className="flex-1">
                <div className="relative w-full max-w-[600px]">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search..."
                    className="pl-8 w-full"
                  />
                </div>
              </div>
              <ThemeToggle />
              <UserNav />
            </div>
          </header>
          <main className="flex-1 overflow-y-auto p-4 md:p-8">{children}</main>
        </div>
      </div>
    </div>
  );
}