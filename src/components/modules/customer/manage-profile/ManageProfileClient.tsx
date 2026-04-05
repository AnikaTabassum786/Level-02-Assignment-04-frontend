"use client";

import { banUser } from "@/action/user.action";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

type Customer = {
  id: string;
  name: string;
  email: string;
  phone:string;
  address: string; 
  role:string;
};



export default function ManageProfileClient({
  customer,
}: {
  customer: Customer;
}) {
  if (!customer) return <p>No user data</p>;

  return (
   <>
   <h1 className="text-xl font-semibold mb-4">My Profile</h1>

      <div className="border p-3 rounded">
        <p><strong>Name:</strong> {customer.name}</p>
        <p><strong>Email:</strong> {customer.email}</p>
        <p><strong>Phone:</strong> {customer.phone}</p>
        <p><strong>Address:</strong> {customer.address}</p>
        <p><strong>Role:</strong> {customer.role}</p>
      </div>
   </>
  );
}