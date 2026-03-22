"use client";

type Category = {
  id: string;
  name: string;
};

export default function AllCategoriesClient({ categories }: { categories: Category[] }) {

  return (
    <div>
      <h1>All Users</h1>

      {categories.map((category: Category) => (
        <div key={category.id}>
          <p>{category.name}</p>
        </div>
      ))}
    </div>
  );
}