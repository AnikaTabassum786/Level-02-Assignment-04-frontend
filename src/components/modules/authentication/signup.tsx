// "use client"

// import { cn } from "@/lib/utils";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import Link from "next/link";
// import { useState } from "react";
// import { authClient } from "@/lib/auth-client";
// import { useRouter } from "next/navigation";

// interface Signup1Props {
//   heading?: string;
//   buttonText?: string;
//   googleText?: string;
//   signupText?: string;
//   signupUrl?: string;
//   className?: string;
// }

// const Signup = ({
//   heading = "Signup",
//   buttonText = "Create Account",
//   signupText = "Already a user?",
//   signupUrl = "https://shadcnblocks.com",
//   className,
// }: Signup1Props) => {

//   const [name,setName] = useState("")
//   const [email,setEmail] = useState("")
//   const [password,setPassword] = useState("")
//   const [confirmPassword,setConfirmPassword] = useState("")
//   const router = useRouter()

//   const handleSignup = async () => {

//     if(password !== confirmPassword){
//       alert("Passwords do not match")
//       return
//     }

//     const data = await authClient.signUp.email({
//       name,
//       email,
//       password,
//       callbackURL: "http://localhost:3000"
//     })

//     console.log("Signup result:", data)
//     if(data){
//       router.push('/')
//     }
//   }

//   return (
//     <section className={cn("mt-20", className)}>
//       <div className="flex h-full items-center justify-center">
//         {/* Logo */}
//         <div className="flex flex-col items-center gap-6 lg:justify-start">
//           {/* <a href={logo.url}>
//             <img
//               src={logo.src}
//               alt={logo.alt}
//               title={logo.title}
//               className="h-10 dark:invert"
//             />
//           </a> */}
//           <div className="flex w-full max-w-sm min-w-sm flex-col items-center gap-y-4 rounded-md border border-muted bg-background px-6 py-8 shadow-md">
//             {heading && <h1 className="text-xl font-semibold">{heading}</h1>}
//              <Input
//               type="text"
//               placeholder="name"
//               className="text-sm"
//               required
//                value={name}
//               onChange={(e)=>setName(e.target.value)}
//             />
//             <Input
//               type="email"
//               placeholder="Email"
//               className="text-sm"
//               required
//               value={email}
//               onChange={(e)=>setEmail(e.target.value)}
//             />
//             <Input
//               type="password"
//               placeholder="Password"
//               className="text-sm"
//               required
//               value={password}
//               onChange={(e)=>setPassword(e.target.value)}
//             />
//             <Input
//               type="password"
//               placeholder="Confirm Password"
//               className="text-sm"
//               required
//                value={confirmPassword}
//               onChange={(e)=>setConfirmPassword(e.target.value)}
//             />
//             <Button type="submit" className="w-full" onClick={handleSignup}>
//               {buttonText}
//             </Button>
//           </div>
//           <div className="flex justify-center gap-1 text-sm text-muted-foreground">
//             <p>{signupText}</p>
//             <Link
//               href={'/login'}
//               className="font-medium text-primary hover:underline"
//             >
//               Login
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export { Signup };



"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"
import { useForm } from "@tanstack/react-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { authClient } from "@/lib/auth-client"

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Email is required"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
})

export default function Signup() {

  const router = useRouter()

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    validators: {
      onSubmit: formSchema,
    },

    onSubmit: async ({ value }) => {

      const data = await authClient.signUp.email({
        name: value.name,
        email: value.email,
        password: value.password,
        callbackURL: "http://localhost:3000",
      })

      console.log("Signup result:", data)

      if (data) {
        router.push("/")
      }
    },
  })

  return (
    <section className="mt-20 flex justify-center">
      <div className="w-full max-w-sm border rounded-md p-6 shadow-md space-y-4">

        <h1 className="text-xl font-semibold text-center">Signup</h1>

        <form
          onSubmit={(e) => {
            e.preventDefault()
            form.handleSubmit()
          }}
          className="space-y-4"
        >

          {/* Name */}
          <form.Field
            name="name"
            children={(field) => (
              <div>
                <Input
                  placeholder="Name"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                {field.state.meta.errors?.length ? (
                  <p className="text-red-500 text-sm">
                    {field.state.meta.errors[0]?.message}
                  </p>
                ) : null}
              </div>
            )}
          />

          {/* Email */}
          <form.Field
            name="email"
            children={(field) => (
              <div>
                <Input
                  placeholder="Email"
                  type="email"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                {field.state.meta.errors?.length ? (
                  <p className="text-red-500 text-sm">
                    {field.state.meta.errors[0]?.message}
                  </p>
                ) : null}
              </div>
            )}
          />

          {/* Password */}
          <form.Field
            name="password"
            children={(field) => (
              <div>
                <Input
                  placeholder="Password"
                  type="password"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                {field.state.meta.errors?.length ? (
                  <p className="text-red-500 text-sm">
                    {field.state.meta.errors[0]?.message}
                  </p>
                ) : null}
              </div>
            )}
          />

          {/* Confirm Password */}
          <form.Field
            name="confirmPassword"
            children={(field) => (
              <div>
                <Input
                  placeholder="Confirm Password"
                  type="password"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                {field.state.meta.errors?.length ? (
                  <p className="text-red-500 text-sm">
                    {field.state.meta.errors[0]?.message}
                  </p>
                ) : null}
              </div>
            )}
          />

          <Button type="submit" className="w-full">
            Create Account
          </Button>

        </form>

        <div className="text-sm text-center">
          Already a user?{" "}
          <Link href="/login" className="text-primary font-medium">
            Login
          </Link>
        </div>

      </div>
    </section>
  )
}