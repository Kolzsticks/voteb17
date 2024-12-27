"use client";

import { cn } from "@/lib/utils";
import {
  BarChart3,
  Users,
  Vote,
  MapPin,
  FileText,
  Settings,
  HelpCircle,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  {
    label: "Overview",
    icon: BarChart3,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Voters",
    icon: Users,
    href: "/dashboard/voters",
    color: "text-violet-500",
  },
  {
    label: "Elections",
    icon: Vote,
    href: "/dashboard/elections",
    color: "text-pink-700",
  },
  {
    label: "Locations",
    icon: MapPin,
    href: "/dashboard/locations",
    color: "text-orange-700",
  },
  {
    label: "Reports",
    icon: FileText,
    href: "/dashboard/reports",
    color: "text-emerald-500",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/dashboard/settings",
  },
  {
    label: "Help",
    icon: HelpCircle,
    href: "/dashboard/help",
  },
];

interface SidebarProps {
  onNavigate?: () => void;
}

export function Sidebar({ onNavigate }: SidebarProps) {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-card text-card-foreground">
      <div className="px-3 py-2 flex-1">
        <Link 
          href="/dashboard" 
          className="flex items-center pl-3 mb-14"
          onClick={onNavigate}
        >
          <Vote className="h-8 w-8 text-primary" />
          <h1 className="text-2xl font-bold ml-2">VoteTrack</h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              onClick={onNavigate}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-primary/10 rounded-lg transition",
                pathname === route.href ? "bg-primary/10" : "transparent",
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}