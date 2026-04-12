"use client";

import { useForm } from "@tanstack/react-form";
import { z } from "zod";
import { toast } from "sonner";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { updateMedicine } from "@/action/medicine.action";

const medicineSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  price: z.string().min(1, "Price is required"),
  stock: z.string().min(1, "Stock is required"),
  manufacturer: z.string().min(1, "Manufacturer is required"),
});

type Medicine = {
  id: string;
  name: string;
  description?: string;
  price: number;
  stock: number;
  manufacturer: string;
};

export default function EditMedicineClient({
  medicine,
}: {
  medicine: Medicine;
}) {
  const form = useForm({
    defaultValues: {
      name: medicine.name,
      description: medicine.description || "",
      price: String(medicine.price),
      stock: String(medicine.stock),
      manufacturer: medicine.manufacturer,
    },

    validators: {
      onSubmit: medicineSchema,
    },

    onSubmit: async ({ value }) => {
      const toastId = toast.loading("Updating...");

      const payload = {
        name: value.name,
        description: value.description,
        price: Number(value.price),
        stock: Number(value.stock),
        manufacturer: value.manufacturer,
      };

      try {
        const res = await updateMedicine(medicine.id, payload);

        if (!res.success) {
          toast.error(res.message || "Update failed", { id: toastId });
          return;
        }

        toast.success("Medicine updated successfully", { id: toastId });
      } catch (err: any) {
        console.error(err);
        toast.error(err.message || "Something went wrong", { id: toastId });
      }
    },
  });

  return (
    <div>
      <h1 className="flex justify-center items-center pt-6 pb-2 sm:p-4 md:p-4 lg:p-6 text-lg md:text-xl lg:text-3xl">Edit Medicine</h1>
     
     <div  className="flex justify-center items-center py-4">
       <Card className="w-full max-w-2xl ">
        <CardContent>
          <form
            id="medicine-edit"
            onSubmit={(e) => {
              e.preventDefault();
              form.handleSubmit();
            }}
          >
            <FieldGroup>
              {/* Name */}
              <form.Field
                name="name"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;

                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel>Medicine Name</FieldLabel>
                      <Input
                        value={field.state.value}
                        onChange={(e) =>
                          field.handleChange(e.target.value)
                        }
                      />
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  );
                }}
              />

              {/* Price */}
              <form.Field
                name="price"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;

                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel>Price</FieldLabel>
                      <Input
                        type="number"
                        value={field.state.value}
                        onChange={(e) =>
                          field.handleChange(e.target.value)
                        }
                      />
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  );
                }}
              />

              {/* Stock */}
              <form.Field
                name="stock"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;

                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel>Stock</FieldLabel>
                      <Input
                        type="number"
                        value={field.state.value}
                        onChange={(e) =>
                          field.handleChange(e.target.value)
                        }
                      />
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  );
                }}
              />

              {/* Manufacturer */}
              <form.Field
                name="manufacturer"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;

                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel>Manufacturer</FieldLabel>
                      <Input
                        value={field.state.value}
                        onChange={(e) =>
                          field.handleChange(e.target.value)
                        }
                      />
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  );
                }}
              />

              {/* Description */}
              <form.Field
                name="description"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;

                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel>Description</FieldLabel>
                      <Textarea
                        value={field.state.value}
                        onChange={(e) =>
                          field.handleChange(e.target.value)
                        }
                      />
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  );
                }}
              />
            </FieldGroup>
          </form>
        </CardContent>

        <CardFooter>
          <Button form="medicine-edit" type="submit" className="w-full cursor-pointer">
            Update
          </Button>
        </CardFooter>
      </Card>
     </div>
    </div>
  );
}