"use client";

type Medicine = {
  id: string;
  name: string;
  email: string;
  role:string;
};

export default function AllMedicinesClient({ medicines }: { medicines: Medicine[] }) {

  return (
    <div>
      <h1>All Users</h1>

      {medicines.map((medicine: Medicine) => (
        <div key={medicine.id}>
          <p>{medicine.name}</p>
          {/* <p>{medicine.email}</p> */}
          {/* <p>{medicine.role}</p> */}
        </div>
      ))}
    </div>
  );
}