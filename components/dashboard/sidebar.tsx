"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  User,
  Settings,
  LogOut,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/context/auth-context";

const menuItems = [
  {
    title: "Overview",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Profile",
    href: "/dashboard/profile",
    icon: User,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { logout } = useAuth();

  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen p-6">
      <div className="space-y-4">
        <h2 className="text-xl font-bold px-2">Dashboard</h2>
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Button
              key={item.href}
              variant="ghost"
              className={cn(
                "w-full justify-start text-white hover:text-white hover:bg-gray-800",
                pathname === item.href && "bg-gray-800"
              )}
              onClick={() => router.push(item.href)}
            >
              <item.icon className="mr-2 h-4 w-4" />
              {item.title}
            </Button>
          ))}
          <Button
            variant="ghost"
            className="w-full justify-start text-white hover:text-white hover:bg-gray-800"
            onClick={logout}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </nav>
      </div>
    </div>
  );
} 