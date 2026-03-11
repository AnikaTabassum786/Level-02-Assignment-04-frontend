import { authClient } from "@/lib/auth-client";

export default async function Home() {
  const session = await authClient.getSession()

  console.log(session)
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-00 font-sans dark:bg-black">
     This is Home
    </div>
  );
}
