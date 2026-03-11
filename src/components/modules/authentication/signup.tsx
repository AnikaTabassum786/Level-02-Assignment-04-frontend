"use client"

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";


interface Signup1Props {
  heading?: string;
  // logo: {
  //   url: string;
  //   src: string;
  //   alt: string;
  //   title?: string;
  // };
  buttonText?: string;
  googleText?: string;
  signupText?: string;
  signupUrl?: string;
  className?: string;
}

const Signup = ({
  heading = "Signup",
  // logo = {
  //   url: "https://www.shadcnblocks.com",
  //   src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-wordmark.svg",
  //   alt: "logo",
  //   title: "shadcnblocks.com",
  // },
  buttonText = "Create Account",
  signupText = "Already a user?",
  signupUrl = "https://shadcnblocks.com",
  className,
}: Signup1Props) => {


   const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [confirmPassword,setConfirmPassword] = useState("")
  const router = useRouter()

    const handleSignup = async () => {

    if(password !== confirmPassword){
      alert("Passwords do not match")
      return
    }

    const data = await authClient.signUp.email({
      name,
      email,
      password,
      callbackURL: "http://localhost:3000"
    })

    console.log("Signup result:", data)
    if(data){
      router.push('/')
    }
    
  }

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
              type="text"
              placeholder="name"
              className="text-sm"
              required
               value={name}
              onChange={(e)=>setName(e.target.value)}
            />
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
            <Input
              type="password"
              placeholder="Confirm Password"
              className="text-sm"
              required
               value={confirmPassword}
              onChange={(e)=>setConfirmPassword(e.target.value)}
            />
            <Button type="submit" className="w-full" onClick={handleSignup}>
              {buttonText}
            </Button>
          </div>
          <div className="flex justify-center gap-1 text-sm text-muted-foreground">
            <p>{signupText}</p>
            <Link
              href={'/login'}
              className="font-medium text-primary hover:underline"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Signup };
