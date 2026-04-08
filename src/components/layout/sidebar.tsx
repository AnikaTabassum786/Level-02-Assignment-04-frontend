// "use client";

// import Link from "next/link";

// import {
//   Sidebar,
//   SidebarContent,
//   SidebarGroup,
//   SidebarGroupContent,
//   SidebarGroupLabel,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
//   SidebarRail,
// } from "@/components/ui/sidebar";

// import { Roles } from "@/constants/roles";


// import { adminRoute } from "@/routes/adminRoute";
// import { sellerRoute } from "@/routes/sellerRoute";
// import { customerRoute } from "@/routes/customerRoute";
// import { Route } from "@/types";

// type SidebarProps = {
//   user: {
//     role: string;
//   };
// } & React.ComponentProps<typeof Sidebar>;

// const Sidebar1 = ({ user, ...props }: SidebarProps) => {
//   let routes: Route[] = [];

//   console.log(user.role)

//   switch (user.role) {
//     case Roles.admin:
//       routes = adminRoute;
//       break;

//     case Roles.seller:
//       routes = sellerRoute;
//       break;

//     case Roles.customer:
//       routes = customerRoute;
//       break;

//     default:
//       routes = [];
//   }

//   return (
//     <Sidebar {...props}>
//       <SidebarContent>
//         {routes.map((group) => (
//           <SidebarGroup key={group.title}>
//             <SidebarGroupLabel>{group.title}</SidebarGroupLabel>

//             <SidebarGroupContent>
//               <SidebarMenu>
//                 {group.items.map((item) => (
//                   <SidebarMenuItem key={item.title}>
//                     <SidebarMenuButton asChild>
//                       <Link href={item.url}>{item.title}</Link>
//                     </SidebarMenuButton>
//                   </SidebarMenuItem>
//                 ))}
//               </SidebarMenu>
//             </SidebarGroupContent>

//           </SidebarGroup>
//         ))}
//       </SidebarContent>

//       <SidebarRail />
//     </Sidebar>
//   );
// };

// export { Sidebar1 };


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

type SidebarProps = {
  user: {
    role: string;
  };
} & React.ComponentProps<typeof Sidebar>;

const Sidebar1 = ({ user, ...props }: SidebarProps) => {
  const pathname = usePathname(); 

  let routes: Route[] = [];

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
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  );
};

export { Sidebar1 };