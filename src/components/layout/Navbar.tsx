// "use client";

// import { Book, Menu, Sunset, Trees, Zap } from "lucide-react";

// import { cn } from "@/lib/utils";

// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { Button } from "@/components/ui/button";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu";
// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import Link from "next/link";
// import { ModeToggle } from "./MoodToggle";
// import { useCart } from "@/providers/CartProvider";
// import { authClient } from "@/lib/auth-client";
// import { toast } from "sonner";
// import { GiMedicines } from "react-icons/gi";

// interface MenuItem {
//   title: string;
//   url: string;
//   description?: string;
//   icon?: React.ReactNode;
//   items?: MenuItem[];
// }

// interface Navbar1Props {
//   className?: string;
//   logo?: {
//     url: string;
//     src: string;
//     alt: string;
//     title: string;
//     className?: string;
//   };
//   // menu?: MenuItem[];
//   auth?: {
//     login: {
//       title: string;
//       url: string;
//     };
//     signup: {
//       title: string;
//       url: string;
//     };
//   };
// }

// const Navbar = ({

//   logo = {
//     url: "https://www.shadcnblocks.com",
//     src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg",
//     alt: "logo",
//     title: "Shadcnblocks.com",
//   },

//   auth = {
//     login: { title: "Login", url: "/login" },
//     signup: { title: "Sign up", url: "/signup" },
//   },

//   className,
// }: Navbar1Props) => {

//   const { count } = useCart();


//   const menu: MenuItem[] = [
//     { title: "Home", url: "/" },
//     // { title: "Contact", url: "/contact" },
//     { title: "Dashboard", url: "/dashboard" },
//     { title: `Cart (${count})`, url: "/cart" },
//     { title: "Order", url: "/orders" },
//   ];

//   const { data: session } = authClient.useSession();

//   const handleLogout = async () => {
//     try {
//       await authClient.signOut();
//       window.location.href = "/login";
//       toast.success("Logout Successfully")
//     } catch (error) {
//       console.error("Logout failed:", error);
//     }
//   }

//   return (
//     <section className={cn("py-4", className)}>
//       <div className="container mx-auto px-4">
//         {/* Desktop Menu */}
//         <nav className="hidden items-center justify-between lg:flex">
//           <div className="flex items-center gap-6">
//             {/* Logo */}
//             {/* <a href={logo.url} className="flex items-center gap-2"> */}
//               {/* <img
//                 src={logo.src}
//                 className="max-h-8 dark:invert"
//                 alt={logo.alt}
//               /> */}

//               <GiMedicines size={32} />
//               <span className="text-lg font-semibold tracking-tighter">
//                 {/* {logo.title} */}
//                 MediNova
//               </span>
//             {/* </a> */}
//             <div className="flex items-center">
//               <NavigationMenu>
//                 <NavigationMenuList>
//                   {menu.map((item) => renderMenuItem(item))}
//                 </NavigationMenuList>
//               </NavigationMenu>
//             </div>
//           </div>
//           <div className="flex gap-2">
//             <ModeToggle></ModeToggle>
//             {/* <Button asChild variant="outline" size="sm">
//               <a href={auth.login.url}>{auth.login.title}</a>
//             </Button>
//             <Button asChild size="sm">
//               <a href={auth.signup.url}>{auth.signup.title}</a>
//             </Button>
//             <Button >
//                SignOut
//             </Button> */}

//             {session ? (
              
//               <div className="flex gap-2 items-center">
//               <Button onClick={handleLogout}>
//                 Sign Out
//               </Button>
//               <p>{session.user.email}</p>
//               </div>
//             ) : (
//               <>
//                 <Button asChild variant="outline" size="sm">
//                   <a href={auth.login.url}>{auth.login.title}</a>
//                 </Button>

//                 <Button asChild size="sm">
//                   <a href={auth.signup.url}>{auth.signup.title}</a>
//                 </Button>
//               </>
//             )}
//           </div>
//         </nav>

//         {/* Mobile Menu */}
//         <div className="block lg:hidden">
//           <div className="flex items-center justify-between">
//             {/* Logo */}
//             <a href={logo.url} className="flex items-center gap-2">
//               <img
//                 src={logo.src}
//                 className="max-h-8 dark:invert"
//                 alt={logo.alt}
//               />
//             </a>
//             <Sheet>
//               <SheetTrigger asChild>
//                 <Button variant="outline" size="icon">
//                   <Menu className="size-4" />
//                 </Button>
//               </SheetTrigger>
//               <SheetContent className="overflow-y-auto">
//                 <SheetHeader>
//                   <SheetTitle>
//                     <a href={logo.url} className="flex items-center gap-2">
//                       <img
//                         src={logo.src}
//                         className="max-h-8 dark:invert"
//                         alt={logo.alt}
//                       />
//                     </a>
//                   </SheetTitle>
//                 </SheetHeader>
//                 <div className="flex flex-col gap-6 p-4">
//                   <Accordion
//                     type="single"
//                     collapsible
//                     className="flex w-full flex-col gap-4"
//                   >
//                     {menu.map((item) => renderMobileMenuItem(item))}
//                   </Accordion>

//                   <div className="flex flex-col gap-3">
//                     <ModeToggle></ModeToggle>

//                     <Button asChild variant="outline">
//                       <a href={auth.login.url}>{auth.login.title}</a>
//                     </Button>
//                     <Button asChild>
//                       <a href={auth.signup.url}>{auth.signup.title}</a>
//                     </Button>
//                   </div>
//                 </div>
//               </SheetContent>
//             </Sheet>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const renderMenuItem = (item: MenuItem) => {

//   return (
//     <NavigationMenuItem key={item.title}>
//       <NavigationMenuLink
//         asChild
//         className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground"
//       >
//         <Link href={item.url}>{item.title}</Link>
//       </NavigationMenuLink>
//     </NavigationMenuItem>
//   );
// };

// const renderMobileMenuItem = (item: MenuItem) => {

//   return (
//     <Link key={item.title} href={item.url} className="text-md font-semibold">
//       {item.title}
//     </Link>
//   );
// };


// export { Navbar };



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
                    <p className="text-sm text-muted-foreground">
                      {session.user.email}
                    </p>
                    <Button onClick={handleLogout}>Sign Out</Button>
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