import { Route } from "@/types";

export const sellerRoute:Route[]= [
    {
      title: "Seller Management",
      items: [
        {
          title: "All Medicine",
          url: "/seller-dashboard/all-medicine",
        },
        {
          title: "Add Medicine",
          url: "/seller-dashboard/add-medicine",
        }
      ],
    }
  ]