import { profileService } from "@/services/profileService";
import ManageProfileClient from "./ManageProfileClient";



export default async function ManageProfileServer() {
  

const res = await profileService.getOwnInfo();
const customers = res.data?.data || [];


  console.log(customers)

  return <ManageProfileClient customer={customers} />
}