"use client";

type User = {
  id: string;
  name: string;
  email: string;
  role:string;
};

export default function AllUsersClient({ users }: { users: User[] }) {

  return (
    <div>
      <h1>All Users</h1>

      {users.map((user: User) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.role}</p>
        </div>
      ))}
    </div>
  );
}