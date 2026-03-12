import { userService } from "@/services/user.service";


export default async function Home() {
  
  const {data} = await userService.getSession();
  console.log(data)

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-00 font-sans dark:bg-black">
     This is Home
    </div>
  );
}
