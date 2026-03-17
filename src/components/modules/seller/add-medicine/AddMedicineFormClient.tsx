"use client"

import { useForm } from "@tanstack/react-form"
import { title } from "process"
import { z } from "zod";
import { toast } from "sonner";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const medicineSchema = z.object({
    name: z
        .string()
        .min(1, "Name is required"),

    description: z
        .string()
        .min(1, "Description is required"),

    price: z.string()
        .min(1, "Price is required"),

    stock: z.string()
        .min(1, "Stock is required"),

    manufacturer: z.string()
        .min(1, "Manufacturer is required"),

});

export default function AddMedicineFormClient() {


    const form = useForm({
        defaultValues: {
            name: " ",
            description: " ",
            price: " ",
            stock: " ",
            manufacturer: ""
        },
        validators: {
            onSubmit: medicineSchema
        },

        onSubmit: async ({ value }) => {
            const toastId = toast.loading("Creating");

            const medicineData = {
                name: value.name,
                description: value.description,
                price: value.price,
                stock: value.stock,
                manufacturer: value.manufacturer
            }

            console.log(medicineData);

            try {
                // const res = await createBlogPost(blogData)
                // console.log(res)
                // if(res.error){
                //     toast.error(res.error.message,{id:toastId})
                //     return;
                // }

                toast.success("Blog Created Successfully", { id: toastId });
            }
            catch (err) {
                toast.error("Something Went Wrong", { id: toastId })
            }
        }
    })



    return (
        <div>
            <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Create Blog</CardTitle>
        <CardDescription>
          Enter your information below to create your blog
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form
          id="blog-post"
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <FieldGroup>
            <form.Field
              name="name"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;

                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                    <Input
                      id={field.name}
                      value={field.state.value}
                      onChange={(e) =>
                        field.handleChange(e.target.value)
                      }
                      placeholder="Blog Title"
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />

            <form.Field
              name="description"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;

                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Content</FieldLabel>
                    <Textarea
                      id={field.name}
                      value={field.state.value}
                      onChange={(e) =>
                        field.handleChange(e.target.value)
                      }
                      placeholder="Write your blog"
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />

            {/* <form.Field
              name="tags"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;

                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>
                      Tags (comma separated)
                    </FieldLabel>
                    <Input
                      id={field.name}
                      value={field.state.value}
                      onChange={(e) =>
                        field.handleChange(e.target.value)
                      }
                      placeholder="nextjs, web"
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            /> */}
          </FieldGroup>
        </form>
      </CardContent>

      <CardFooter className="flex flex-col">
        <Button form="blog-post" type="submit" className="w-full">
          Submit
        </Button>
      </CardFooter>
    </Card>
        </div>
    )
}