"use client"
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";

interface Login1Props {
  heading?: string;
  // logo: {
  //   url: string;
  //   src: string;
  //   alt: string;
  //   title?: string;
  //   className?: string;
  // };
  buttonText?: string;
  googleText?: string;
  signupText?: string;
  signupUrl?: string;
  className?: string;
}

const Login = ({
  heading = "Login",
  // logo = {
  //   url: "https://www.shadcnblocks.com",
  //   src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-wordmark.svg",
  //   alt: "logo",
  //   title: "shadcnblocks.com",
  // },
  buttonText = "Login",
  signupText = "Need an account?",
  signupUrl = "https://shadcnblocks.com",
  className,
}: Login1Props) => {

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const session = authClient.useSession()
const handleEmailLogin = async () => {
    const data = await authClient.signIn.email({
      email,
      password,
      callbackURL: "http://localhost:3000"
    })

    console.log("LOGIN RESULT:", data)
  }

const handleGoogleLogin = async () => {
  await authClient.signIn.social({
    provider: "google",
    callbackURL: "http://localhost:3000",
  });
};

//  const session = authClient.useSession();
//  console.log(session.data)


  return (
    <section className={cn("mt-20", className)}>
      <div className="flex h-full items-center justify-center">
        {/* Logo */}
        <div className="flex flex-col items-center gap-6 lg:justify-start">
          {/* <a href={logo.url}>
            <img
              src={logo.src}
              alt={logo.alt}
              title={logo.title}
              className="h-10 dark:invert"
            />
          </a> */}
          <div className="flex w-full max-w-sm min-w-sm flex-col items-center gap-y-4 rounded-md border border-muted bg-background px-6 py-8 shadow-md">
            {heading && <h1 className="text-xl font-semibold">{heading}</h1>}
            <Input
              type="email"
              placeholder="Email"
              className="text-sm"
              required
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Password"
              className="text-sm"
              required
               value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
            <Button type="submit" className="w-full"
            onClick={handleEmailLogin}
            >
              {buttonText}
            </Button>
            <Button onClick={()=>handleGoogleLogin()} type="submit" className="w-full">
              Log in with Google
            </Button>
          </div>
          <div className="flex justify-center gap-1 text-sm text-muted-foreground">
            <p>{signupText}</p>
            <a
              href={'/signup'}
              className="font-medium text-primary hover:underline"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Login };
