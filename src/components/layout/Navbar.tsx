



"use client";

import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ModeToggle } from "./MoodToggle";
import { useCart } from "@/providers/CartProvider";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { GiMedicines } from "react-icons/gi";

interface MenuItem {
  title: string;
  url: string;
}

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const { count } = useCart();
  const { data: session } = authClient.useSession();

  // const role = session?.user?.role;
  const role = (session?.user as { role?: string })?.role;

  // ✅ Role-based menu
  const menu: MenuItem[] = [
    { title: "Home", url: "/" },

    ...(role === "CUSTOMER"
      ? [
          { title: `Cart (${count})`, url: "/cart" },
          { title: "Order", url: "/orders" },
        ]
      : []),

    ...(role ? [{ title: "Dashboard", url: "/dashboard" }] : []),
  ];

  const handleLogout = async () => {
    try {
      await authClient.signOut();
      window.location.href = "/login";
      toast.success("Logout Successfully");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <section className={cn("py-4 border-b", className)}>
      <div className="container mx-auto px-4">
        {/* ================= DESKTOP ================= */}
        <nav className="hidden items-center justify-between lg:flex">
          {/* Left */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <GiMedicines size={30} />
              <span className="text-lg font-semibold">MediNova</span>
            </div>

            <NavigationMenu>
              <NavigationMenuList>
                {menu.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.url}
                        className="px-4 py-2 text-sm font-medium rounded-md hover:bg-muted transition"
                      >
                        {item.title}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            <ModeToggle />

            {session ? (
              <div className="flex items-center gap-3">
                <p className="text-sm text-muted-foreground">
                  {session.user.email}
                </p>
                <Button onClick={handleLogout} size="sm">
                  Sign Out
                </Button>
              </div>
            ) : (
              <>
                <Button asChild variant="outline" size="sm">
                  <Link href="/login">Login</Link>
                </Button>
                <Button asChild size="sm">
                  <Link href="/signup">Sign Up</Link>
                </Button>
              </>
            )}
          </div>
        </nav>

        {/* ================= MOBILE ================= */}
        <div className="lg:hidden flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GiMedicines size={28} />
            <span className="font-semibold">MediNova</span>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline">
                <Menu className="w-4 h-4" />
              </Button>
            </SheetTrigger>

            <SheetContent>
              <SheetHeader>
                <SheetTitle>MediNova</SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-4 mt-6">
                {menu.map((item) => (
                  <Link
                    key={item.title}
                    href={item.url}
                    className="text-base font-medium"
                  >
                    {item.title}
                  </Link>
                ))}

                <ModeToggle />

                {session ? (
                  <>
                    <div>
<p className="text-sm text-muted-foreground">
                      {session.user.email}
                    </p>
                    <Button onClick={handleLogout} className="cursor-pointer">Sign Out</Button>
                    </div>
                  </>
                ) : (
                  <>
                    <Button asChild variant="outline">
                      <Link href="/login">Login</Link>
                    </Button>
                    <Button asChild>
                      <Link href="/signup">Sign Up</Link>
                    </Button>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </section>
  );
};

export { Navbar };