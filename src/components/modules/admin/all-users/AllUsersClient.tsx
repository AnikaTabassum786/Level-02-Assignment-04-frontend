// "use client";

// import { banUser } from "@/action/user.action";
// import { Button } from "@/components/ui/button";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// import { useState } from "react";
// import { toast } from "sonner";

// type User = {
//   id: string;
//   name: string;
//   email: string;
//   role:string;
//   isBanned: boolean; 
// };



// export default function AllUsersClient({ users }: { users: User[] }) {

//    const [userList, setUserList] = useState(users);

// const handleBanUser = async (id: string) => {
//     try {
//       const res = await banUser(id);

//       if (res.success) {
//         toast.success(res.message);

        
//         setUserList((prev) =>
//           prev.map((user) =>
//             user.id === id
//               ? { ...user, isBanned: !user.isBanned }
//               : user
//           )
//         );
//       } else {
//         toast.error(res.message);
//       }
//     } catch (error) {
//       toast.error("Something went wrong");
//     }
//   };

//   return (
//     <>




// <Table>
//   <TableHeader>
//     <TableRow>
//       <TableHead className="text-center">Name</TableHead>
//       <TableHead className="text-center">Email</TableHead>
//       <TableHead className="text-center">Role</TableHead>
//       <TableHead className="text-center">Status</TableHead>
//       <TableHead className="text-start pl-10">Action</TableHead>
//     </TableRow>
//   </TableHeader>

//   <TableBody>
//     {users.length === 0 ? (
//       <TableRow>
//         <TableCell colSpan={5} className="text-center">
//           No users found
//         </TableCell>
//       </TableRow>
//     ) : (
//       users.map((user: User) => (
//         <TableRow key={user.id}>
//           <TableCell className="text-center">
//             {user.name}
//           </TableCell>

//           <TableCell className="text-center">
//             {user.email}
//           </TableCell>

//           <TableCell className="text-center">
//             {user.role}
//           </TableCell>

//           <TableCell className="text-center">
//                        <p style={{ color: user.isBanned ? "red" : "green" }}>
//       {user.isBanned ? "BANNED" : "ACTIVE"}
//     </p>
//           </TableCell>

//           <TableCell className="flex gap-2 pl-10">
//             <Button
//               variant="outline"
//               onClick={() => handleBanUser(user.id)}
//             >
//               {user.isBanned ? "Unban" : "Ban"}
//             </Button>

//           </TableCell>
//         </TableRow>
//       ))
//     )}
//   </TableBody>
// </Table>




//     </>
//   );
// }


"use client";

import { banUser } from "@/action/user.action";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import { toast } from "sonner";

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
  isBanned: boolean;
};

export default function AllUsersClient({ users }: { users: User[] }) {
  const [userList, setUserList] = useState(users);
  const [loadingId, setLoadingId] = useState<string | null>(null);

  // sync if props change (optional but best practice)
  useEffect(() => {
    setUserList(users);
  }, [users]);

  const handleBanUser = async (id: string) => {
    try {
      setLoadingId(id);

      const res = await banUser(id);

      if (res.success) {
        toast.success(res.message);

        // update UI instantly (no reload needed)
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
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <div className="p-2 md:p-4 lg:p-6">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">Name</TableHead>
            <TableHead className="text-center">Email</TableHead>
            <TableHead className="text-center">Role</TableHead>
            <TableHead className="text-center">Status</TableHead>
            <TableHead className="text-start pl-10">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {userList.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} className="text-center">
                No users found
              </TableCell>
            </TableRow>
          ) : (
            userList.map((user: User) => (
              <TableRow key={user.id}>
                <TableCell className="text-center">
                  {user.name}
                </TableCell>

                <TableCell className="text-center">
                  {user.email}
                </TableCell>

                <TableCell className="text-center">
                  {user.role}
                </TableCell>

                <TableCell className="text-center">
                  <p
                    className={`font-medium ${
                      user.isBanned ? "text-red-500" : "text-green-600"
                    }`}
                  >
                    {user.isBanned ? "BANNED" : "ACTIVE"}
                  </p>
                </TableCell>

                <TableCell className="flex gap-2 pl-10">
                  <Button
                    variant="outline"
                    disabled={loadingId === user.id}
                    onClick={() => handleBanUser(user.id)}
                  >
                    {loadingId === user.id
                      ? "Processing..."
                      : user.isBanned
                      ? "Unban"
                      : "Ban"}
                  </Button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}