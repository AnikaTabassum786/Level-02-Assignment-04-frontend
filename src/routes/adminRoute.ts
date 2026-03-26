import { Route } from "@/types";


export const adminRoute:Route[]= [
    {
      title: "admin Management",
      items: [
        {
          title: "All Users",
          url: "/admin-dashboard/all-users",
        },
        {
          title: "All Medicines",
          url: "/admin-dashboard/all-medicines",
        },
        {
          title: "All Categories",
          url: "/admin-dashboard/categories",
        },
        {
          title: "Add Category",
          url: "/admin-dashboard/add-category",
        },
        {
          title: "All Orders",
          url: "/admin-dashboard/all-orders",
        }
      ],
    }
  ]