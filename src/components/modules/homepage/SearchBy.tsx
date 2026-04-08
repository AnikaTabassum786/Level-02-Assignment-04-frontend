


// export function SearchBy() {
//   console.log("SearchBy loaded");
//   return <div>Search</div>;



"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export function SearchBy() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState("");

  // sync input with URL
  useEffect(() => {
    const currentSearch = searchParams.get("search") || "";
    setSearch(currentSearch);
  }, [searchParams]);

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams.toString());

    if (search) {
      params.set("search", search);
    } else {
      params.delete("search");
    }

    params.set("page", "1");

    router.push(`/?${params.toString()}`);
  };

  return (
    <div className="flex gap-2 items-center p-4">
      <input
        type="text"
        placeholder="Search medicine..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border px-3 py-2 rounded-md w-64"
      />

      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Search
      </button>
    </div>
  );
}