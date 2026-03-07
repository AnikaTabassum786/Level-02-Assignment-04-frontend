// // "use client"

// import { Sidebar1 } from "@/components/layout/sidebar"

// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb"
// import { Separator } from "@/components/ui/separator"
// import {
//   SidebarInset,
//   SidebarProvider,
//   SidebarTrigger,
// } from "@/components/ui/sidebar"


// export default async function DashboardLayout({children}:{children:React.ReactNode}) {
//   return (
//     <SidebarProvider>
//       {/* <AppSidebar/> */}
//       <Sidebar1/>
//       <SidebarInset>
//         <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
//           <SidebarTrigger className="-ml-1" />
//           <Separator
//             orientation="vertical"
//             className="mr-2 data-[orientation=vertical]:h-4"
//           />
//         </header>
//         <div>
//       {children}
//         </div>
//       </SidebarInset>
//     </SidebarProvider>
//   )
// }


import { Sidebar1 } from "@/components/layout/sidebar";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function DashboardLayout({
 admin,
 seller,
 customer
}: {
  admin: React.ReactNode;
  seller: React.ReactNode;
  customer: React.ReactNode;
}) {

  //  const userInfo = data.user;
  
  const userInfo = {
    role: "admin",
  };
  return (
    <SidebarProvider>
      {/* <AppSidebar/> */}
      <Sidebar1 user={userInfo}/>
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
        </header>
        <div>
          {admin}
          {seller}
          {customer}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
  
  // <Sidebar1>{children}</Sidebar1>;
}
