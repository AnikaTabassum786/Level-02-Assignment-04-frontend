


"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

import { Roles } from "@/constants/roles";
import { adminRoute } from "@/routes/adminRoute";
import { sellerRoute } from "@/routes/sellerRoute";
import { customerRoute } from "@/routes/customerRoute";
import { Route } from "@/types";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";

type SidebarProps = {
  user: {
    role: string;
  };
} & React.ComponentProps<typeof Sidebar>;

const Sidebar1 = ({ user, ...props }: SidebarProps) => {
  const pathname = usePathname(); 

  let routes: Route[] = [];

  const handleLogout = async () => {
  try {
    await authClient.signOut();
    window.location.href = "/login";
    toast.success("Logout Successfully");
  } catch (error) {
    console.error("Logout failed:", error);
  }
};

  switch (user.role) {
    case Roles.admin:
      routes = adminRoute;
      break;
    case Roles.seller:
      routes = sellerRoute;
      break;
    case Roles.customer:
      routes = customerRoute;
      break;
    default:
      routes = [];
  }

  return (
    <Sidebar {...props}>
      <SidebarContent>
        {routes.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>

            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => {
                  const isActive = pathname === item.url;

                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild
                        className={`transition-all ${
                          isActive
                            ? "font-semibold"
                            : "hover:bg-muted"
                        }`}
                      >
                        <Link href={item.url}>{item.title}</Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}

       <SidebarMenu>
  <SidebarMenuItem>
    <SidebarMenuButton
      onClick={handleLogout}
      className="hover:bg-muted transition ml-2 cursor-pointer font-semibold"
    >
      Sign Out
    </SidebarMenuButton>
  </SidebarMenuItem>
</SidebarMenu>

      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
};

export { Sidebar1 };