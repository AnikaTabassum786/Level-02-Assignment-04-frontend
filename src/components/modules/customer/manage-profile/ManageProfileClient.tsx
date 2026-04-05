"use client";



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
      <div className=" space-y-3">
  <div>
    <label className="block text-sm font-medium">Name</label>
    <input
      type="text"
      defaultValue={customer.name}
      className="w-1/2 border px-3 py-2 rounded"
    />
  </div>

  <div>
    <label className="block text-sm font-medium">Email</label>
    <input
      type="email"
      defaultValue={customer.email}
      className="w-1/2 border px-3 py-2 rounded"
    />
  </div>

  <div>
    <label className="block text-sm font-medium">Phone</label>
    <input
      type="text"
      defaultValue={customer.phone}
      className="w-1/2 border px-3 py-2 rounded"
    />
  </div>

  <div>
    <label className="block text-sm font-medium">Address</label>
    <input
      type="text"
      defaultValue={customer.address}
      className="w-1/2 border px-3 py-2 rounded"
    />
  </div>

 
</div>


   </>
  );
}