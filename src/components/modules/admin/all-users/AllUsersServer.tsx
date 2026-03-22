import { userService } from "@/services/user.service";
import AllUsersClient from "./AllUsersClient";


export default async function AllUsersServer() {
  

const res = await userService.getAllUsers();
const users = res.data?.data || [];


  console.log(users)

  return <AllUsersClient users={users} />;
}