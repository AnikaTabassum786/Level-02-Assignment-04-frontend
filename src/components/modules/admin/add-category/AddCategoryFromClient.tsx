"use client";

import { useForm } from "@tanstack/react-form";
import { z } from "zod";
import { toast } from "sonner";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


import { createCategory } from "@/action/category";

const categorySchema = z.object({
  name: z.string().min(1, "Category Name is required"),
});

export default function AddCategoryFormClient() {
  const form = useForm({
    defaultValues: {
      name: "",
    },

    validators: {
      onSubmit: categorySchema,
    },

    onSubmit: async ({ value }) => {
      const toastId = toast.loading("Creating...");

      const categoryData = {
        name: value.name,
      };

      console.log(categoryData);

      try {
        const res = await createCategory(categoryData);
        console.log(res);

        if (res?.error) {
          toast.error("Something went wrong", { id: toastId });
          return;
        }

        toast.success("Category Created Successfully", { id: toastId });
      } catch (err: any) {
        console.error("Create category error:", err);
        toast.error(err?.message || "Something went wrong", {
          id: toastId,
        });
      }
    },
  });

  return (
    <div>
      <Card className="w-full max-w-2xl">
        <CardContent>
          <form
            id="category-post"
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
                    field.state.meta.isTouched &&
                    !field.state.meta.isValid;

                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name}>
                        Category Name
                      </FieldLabel>

                      <Input
                        id={field.name}
                        value={field.state.value}
                        onChange={(e) =>
                          field.handleChange(e.target.value)
                        }
                        placeholder="Enter category name"
                      />

                      {isInvalid && (
                        <FieldError
                          errors={field.state.meta.errors}
                        />
                      )}
                    </Field>
                  );
                }}
              />
            </FieldGroup>
          </form>
        </CardContent>

        <CardFooter className="flex flex-col">
          <Button
            form="category-post"
            type="submit"
            className="w-full"
          >
            Submit
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}