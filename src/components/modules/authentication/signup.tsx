



"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"
import { useForm } from "@tanstack/react-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { authClient } from "@/lib/auth-client"
import { toast } from "sonner";
import { env } from "../../../../env"

const FRONTEND_URL = env.FRONTEND_URL

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

  const toastId = toast.loading("Creating account...");

  try {
    const data = await authClient.signUp.email({
      name: value.name,
      email: value.email,
      password: value.password,
      callbackURL: FRONTEND_URL,
    });

    console.log("Signup result:", data);

    if (data) {
      toast.success("User Created Successfully", { id: toastId });
      router.push("/");
    } else {
      toast.error("Signup failed", { id: toastId });
    }

  } catch (error) {
    toast.error("Something went wrong", { id: toastId });
  }
}
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