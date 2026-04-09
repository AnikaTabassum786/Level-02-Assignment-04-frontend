"use client";

import { updateProfile } from "@/action/profile.action";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";



type Customer = {
    id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    role: string;
};



export default function ManageProfileClient({
    customer,
}: {
    customer: Customer;
}) {
    if (!customer) return <p>No user data</p>;

    const [formData, setFormData] = useState({
        name: customer.name || "",
        email: customer.email || "",
        phone: customer.phone || "",
        address: customer.address || "",
       
    });

    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);



        // const { role, ...safeData } = formData;
        const res = await updateProfile(formData);

        setLoading(false);

        if (res.success) {
            toast("Profile Updated Successfully");
            router.refresh(); // refresh data
        } else {
            alert(res.message || "Something went wrong");
        }
    };


    return (
        <>
            {/* <h1 className="text-xl font-semibold mb-4">My Profile</h1> */}
            <div className="flex justify-center items-center">
            <form onSubmit={handleSubmit} className=" p-5 rounded space-y-4 ">
                {/* <h2 className="text-lg font-semibold">Update Profile</h2> */}

                <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full border px-3 py-2 rounded"
                />

                <input
                    name="email"
                    value={formData.email}
                    disabled
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full border px-3 py-2 rounded"
                />

                <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    className="w-full border px-3 py-2 rounded"
                />

                <input
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Address"
                    className="w-full border px-3 py-2 rounded"
                />

                <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-black text-white py-2 rounded hover:opacity-80 cursor-pointer"
                >
                    {loading ? "Updating..." : "Update Profile"}
                </Button>
            </form>
            </div>
        </>
    );
}