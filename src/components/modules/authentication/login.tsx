

"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { authClient } from "@/lib/auth-client"
import { useForm } from "@tanstack/react-form"
import * as z from "zod"
import { toast } from "sonner";
import { env } from "../../../../env"
import { useRouter } from "next/navigation"


// const FRONTEND_URL = env.FRONTEND_URL
const FRONTEND_URL = env.NEXT_PUBLIC_FRONTEND_URL
interface Login1Props {
  heading?: string
  buttonText?: string
  signupText?: string
  className?: string
}

const loginSchema = z.object({
  email: z.string().email("Email is required"),
  password: z.string().min(1, "Password is required"),
})

const Login = ({
  heading = "Login",
  buttonText = "Login",
  signupText = "Need an account?",
  className,
}: Login1Props) => {
const router = useRouter();
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },

    validators: {
      onSubmit: loginSchema,
    },

    onSubmit: async ({ value }) => {

      const toastId = toast.loading("Login user...");

      try {
        const data = await authClient.signIn.email({

          email: value.email,
          password: value.password,
        
        });

        console.log("Signup result:", data);

        // if (data) {
        //   toast.success("User Login Successfully", { id: toastId });

        // } else {
        //   toast.error("Login failed", { id: toastId });
        // }

        if (data?.error) {
          toast.error(data.error.message || "Login failed", { id: toastId });
        } else {
          toast.success("User Login Successfully", { id: toastId });
        }

         router.push("/");

      } catch (error) {
        toast.error("Something went wrong", { id: toastId });
      }
    }
  })

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: FRONTEND_URL,
    })
  }

  return (
    <section className={cn("mt-20", className)}>
      <div className="flex h-full items-center justify-center">

        <div className="flex flex-col items-center gap-6">

          <div className="flex w-full max-w-sm min-w-sm flex-col gap-y-4 rounded-md border border-muted bg-background px-6 py-8 shadow-md">

            {heading && <h1 className="text-xl font-semibold">{heading}</h1>}

            <form
              onSubmit={(e) => {
                e.preventDefault()
                form.handleSubmit()
              }}
              className="space-y-4"
            >

              {/* Email */}
              <form.Field
                name="email"
                children={(field) => (
                  <div>
                    <Input
                      type="email"
                      placeholder="Email"
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
                      type="password"
                      placeholder="Password"
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

              <Button type="submit" className="w-full bg-black text-white cursor-pointer" variant="outline">
                {/* {buttonText} */}
                Login
              </Button>

            </form>

            {/* <Button
              onClick={handleGoogleLogin}
              variant="outline"
              className="w-full bg-black text-white"
              type="button"
            >
              Login with Google
            </Button> */}

          </div>

          <div className="flex justify-center gap-1 text-sm text-muted-foreground">
            <p>{signupText}</p>
            <a
              href="/signup"
              className="font-medium text-primary hover:underline"
            >
              Sign up
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}

export { Login }