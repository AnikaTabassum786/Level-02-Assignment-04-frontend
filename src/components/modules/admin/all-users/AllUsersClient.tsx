"use client";

import { banUser } from "@/action/user.action";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

type User = {
  id: string;
  name: string;
  email: string;
  role:string;
  isBanned: boolean; 
};



export default function AllUsersClient({ users }: { users: User[] }) {

   const [userList, setUserList] = useState(users);

const handleBanUser = async (id: string) => {
    try {
      const res = await banUser(id);

      if (res.success) {
        toast.success(res.message);

        
        setUserList((prev) =>
          prev.map((user) =>
            user.id === id
              ? { ...user, isBanned: !user.isBanned }
              : user
          )
        );
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div>
      <h1>All Users</h1>

      {users.map((user: User) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.role}</p>
           <p style={{ color: user.isBanned ? "red" : "green" }}>
      {user.isBanned ? "BANNED" : "ACTIVE"}
    </p>
           <Button
           onClick={() => handleBanUser(user.id)}
           >Ban</Button>
          
        </div>
      ))}
    </div>
  );
}