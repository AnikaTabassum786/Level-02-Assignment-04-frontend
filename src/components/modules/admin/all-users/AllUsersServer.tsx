import { userService } from "@/services/user.service";
import AllUsersClient from "./AllUsersClient";


export default async function AllUsersServer() {
  
 
  // const { data: users, error } = await userService.getAllUsers();

  const res = await userService.getAllUsers();
const users = res.data?.data || [];

  // if (error) {
  //   return <div>Error loading users</div>;
  // }

  console.log(users)

  return <AllUsersClient users={users} />;
}